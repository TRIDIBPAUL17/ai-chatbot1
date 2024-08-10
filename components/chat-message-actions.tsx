'use client'

import { type Message } from 'ai'
import { Button } from '@/components/ui/button'
import { IconCheck, IconCopy } from '@/components/ui/icons'
import { useCopyToClipboard } from '@/lib/hooks/use-copy-to-clipboard'
import { cn } from '@/lib/utils'

interface ChatMessageActionsProps extends React.ComponentProps<'div'> {
  message: Message
}

export function ChatMessageActions({
  message,
  className,
  ...props
}: ChatMessageActionsProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 })

  const onCopy = () => {
    if (isCopied) return
    copyToClipboard(message.content)
  }

  return (
    <div
      className={cn(
        'flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-10 md:-top-2 md:opacity-0',
        className
      )}
      {...props}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={onCopy}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 dark:hover:bg-blue-600 text-gray-600 dark:text-gray-300 transition-all duration-300 transform hover:scale-110 active:scale-95"
      >
        {isCopied ? (
          <IconCheck className="text-green-500" />
        ) : (
          <IconCopy className="text-blue-500" />
        )}
        <span className="sr-only">Copy message</span>
      </Button>
    </div>
  )
}
