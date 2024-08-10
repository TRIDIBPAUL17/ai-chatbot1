'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button, type ButtonProps } from '@/components/ui/button'
import { IconArrowDown } from '@/components/ui/icons'

interface ButtonScrollToBottomProps extends ButtonProps {
  isAtBottom: boolean
  scrollToBottom: () => void
}

export function ButtonScrollToBottom({
  className,
  isAtBottom,
  scrollToBottom,
  ...props
}: ButtonScrollToBottomProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        'absolute right-4 top-1 z-10 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg transition-opacity duration-300 transform-gpu hover:scale-105 active:scale-95 hover:shadow-2xl sm:right-8 md:top-2',
        isAtBottom ? 'opacity-0' : 'opacity-100',
        className
      )}
      onClick={() => scrollToBottom()}
      {...props}
    >
      <IconArrowDown className="text-white" />
      <span className="sr-only">Scroll to bottom</span>
    </Button>
  )
}
