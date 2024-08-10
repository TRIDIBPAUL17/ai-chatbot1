'use client'

import { Chat } from '@/lib/types'
import { AnimatePresence, motion } from 'framer-motion'
import { removeChat, shareChat } from '@/app/actions'
import { SidebarActions } from '@/components/sidebar-actions'
import { SidebarItem } from '@/components/sidebar-item'

interface SidebarItemsProps {
  chats?: Chat[]
}

export function SidebarItems({ chats }: SidebarItemsProps) {
  if (!chats?.length) {
    return <div className="p-4 text-center text-zinc-500">No chats available</div>
  }

  return (
    <AnimatePresence>
      {chats.map((chat, index) =>
        chat ? (
          <motion.div
            key={chat.id}
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <SidebarItem index={index} chat={chat}>
              <SidebarActions
                chat={chat}
                removeChat={removeChat}
                shareChat={shareChat}
              />
            </SidebarItem>
          </motion.div>
        ) : null
      )}
    </AnimatePresence>
  )
}
