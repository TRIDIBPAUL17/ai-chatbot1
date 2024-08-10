'use client'

import * as React from 'react'

import { useSidebar } from '@/lib/hooks/use-sidebar'
import { Button } from '@/components/ui/button'
import { IconSidebar } from '@/components/ui/icons'

export function SidebarToggle() {
  const { toggleSidebar } = useSidebar()

  const handleClick = () => {
    if (toggleSidebar) {
      toggleSidebar()
    } else {
      console.error('toggleSidebar function is not available')
    }
  }

  return (
    <Button
      variant="ghost"
      className="-ml-2 hidden size-9 p-0 lg:flex"
      onClick={handleClick}
    >
      <IconSidebar className="size-6" />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}
