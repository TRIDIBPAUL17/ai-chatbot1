import { type Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'

import { auth } from '@/auth'
import { getChat, getMissingKeys } from '@/app/actions'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
import { Session } from '@/lib/types'

export interface ChatPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params
}: ChatPageProps): Promise<Metadata> {
  const session = await auth()

  if (!session?.user) {
    // If no user session, return a generic title
    return {
      title: 'Chat'
    }
  }

  const chat = await getChat(params.id, session.user.id)

  if (!chat || 'error' in chat) {
    // Redirect if chat not found or error in fetching chat
    redirect('/')
  }

  return {
    title: chat.title.slice(0, 50) ?? 'Chat'
  }
}

export default async function ChatPage({ params }: ChatPageProps) {
  const session = (await auth()) as Session
  const missingKeys = await getMissingKeys()

  if (!session?.user) {
    // Redirect to login if user is not authenticated
    redirect(`/login?next=/chat/${params.id}`)
  }

  const userId = session.user.id
  const chat = await getChat(params.id, userId)

  if (!chat || 'error' in chat || chat.userId !== userId) {
    // Redirect or notFound if chat not found, error, or user does not own the chat
    return notFound()
  }

  return (
    <AI initialAIState={{ chatId: chat.id, messages: chat.messages }}>
      <Chat
        id={chat.id}
        session={session}
        initialMessages={chat.messages}
        missingKeys={missingKeys}
      />
    </AI>
  )
}
