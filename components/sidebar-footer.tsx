import { cn } from '@/lib/utils'

interface SidebarFooterProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

export function SidebarFooter({
  children,
  className,
  ...props
}: SidebarFooterProps) {
  return (
    <div
      className={cn('flex items-center justify-between p-4', className)}
      {...props}
    >
      {children}
    </div>
  )
}
