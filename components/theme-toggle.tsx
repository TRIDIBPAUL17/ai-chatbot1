'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { IconMoon, IconSun } from '@/components/ui/icons'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [, startTransition] = React.useTransition()

  const handleClick = () => {
    startTransition(() => {
      setTheme(theme === 'light' ? 'dark' : 'light')
    })
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClick}
    >
      {theme === 'dark' ? (
        <IconMoon className="transition-all" />
      ) : (
        <IconSun className="transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
