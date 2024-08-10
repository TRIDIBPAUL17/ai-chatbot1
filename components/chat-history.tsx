import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { SidebarList } from '@/components/sidebar-list'
import { buttonVariants } from '@/components/ui/button'
import { IconPlus } from '@/components/ui/icons'

interface ChatHistoryProps {
  userId?: string
}

export async function ChatHistory({ userId }: ChatHistoryProps) {
  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-4 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Chat History
        </h4>
      </div>
      <div className="mb-4">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'h-12 w-full flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg transition-transform duration-300 transform hover:scale-105 active:scale-95'
          )}
        >
          <IconPlus className="mr-2 stroke-2" />
          New Chat
        </Link>
      </div>
      <React.Suspense
        fallback={
          <div className="flex flex-col flex-1 space-y-4 overflow-auto animate-pulse">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="w-full h-6 rounded-md bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800"
              />
            ))}
          </div>
        }
      >
        {/* @ts-ignore */}
        <SidebarList userId={userId} />
      </React.Suspense>
    </div>
  )
}
