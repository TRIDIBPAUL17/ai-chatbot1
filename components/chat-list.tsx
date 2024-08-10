import { Separator } from '@/components/ui/separator'
import { UIState } from '@/lib/chat/actions'
import { Session } from '@/lib/types'
import Link from 'next/link'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

export interface ChatList {
  messages: UIState
  session?: Session
  isShared: boolean
}

export function ChatList({ messages, session, isShared }: ChatList) {
  if (!messages.length) {
    return null
  }

  return (
    <div className="relative mx-auto max-w-2xl px-6 py-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {!isShared && !session ? (
        <>
          <div className="group relative mb-6 flex items-start md:-ml-12">
            <div className="bg-red-100 dark:bg-red-800 flex h-[30px] w-[30px] shrink-0 select-none items-center justify-center rounded-full border border-red-300 shadow-md transform transition-transform duration-300 group-hover:scale-110">
              <ExclamationTriangleIcon className="text-red-600 dark:text-red-400" />
            </div>
            <div className="ml-4 flex-1 space-y-2 overflow-hidden px-1">
              <p className="text-gray-700 dark:text-gray-300 leading-normal">
                Please{' '}
                <Link href="/login" className="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-500">
                  log in
                </Link>{' '}
                or{' '}
                <Link href="/signup" className="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-500">
                  sign up
                </Link>{' '}
                to save and revisit your chat history!
              </p>
            </div>
          </div>
          <Separator className="my-6" />
        </>
      ) : null}

      {messages.map((message, index) => (
        <div key={message.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm mb-4 transition-transform duration-300 transform hover:scale-[1.02]">
          <div>{message.display}</div>
          {index < messages.length - 1 && <Separator className="my-4" />}
        </div>
      ))}
    </div>
  )
}
