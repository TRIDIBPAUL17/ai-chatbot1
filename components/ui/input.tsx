import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode; // Optional icon prop
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", icon, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        {icon && <span className="absolute left-3 text-gray-500">{icon}</span>}
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-lg border-2 border-gray-300 bg-transparent px-12 py-2 text-lg shadow-md transition-all duration-300 ease-in-out placeholder:text-gray-400 placeholder:font-light focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
