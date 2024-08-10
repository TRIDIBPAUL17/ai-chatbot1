import { type Session } from '@/lib/types'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { signOut } from '@/auth'

export interface UserMenuProps {
  user: Session['user']
}

function getUserInitials(name: string) {
  const names = name.split(' ')
  const firstName = names[0]
  const lastName = names[1] || ''
  return `${firstName[0]}${lastName[0] || ''}`.toUpperCase()
}

export function UserMenu({ user }: UserMenuProps) {
  return (
    <div className="flex items-center justify-between">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="pl-0 flex items-center">
            <div className="flex size-7 shrink-0 select-none items-center justify-center rounded-full bg-muted/50 text-xs font-medium uppercase text-muted-foreground">
              {getUserInitials(user.email)}
            </div>
            <span className="ml-2 hidden md:block">{user.email}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={8} align="start" className="w-fit">
          <DropdownMenuItem className="flex-col items-start">
            <div className="text-xs text-zinc-500">{user.email}</div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <form
            action={async () => {
              'use server'
              await signOut()
            }}
          >
            <Button
              type="submit"
              variant="destructive"
              className="w-full text-xs"
            >
              Sign Out
            </Button>
          </form>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
