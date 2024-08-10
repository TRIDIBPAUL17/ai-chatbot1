import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-[#444] bg-[#1e1e1e] px-3 py-2 text-sm text-[#e0e0e0] shadow-sm placeholder:text-[#888] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#666] disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-300 ease-in-out",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
