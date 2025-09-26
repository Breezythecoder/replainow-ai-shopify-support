import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 will-change-transform relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-card hover:bg-primary/90 hover:scale-[1.02] hover:shadow-card-hover active:scale-95",
        destructive: "bg-destructive text-destructive-foreground shadow-card hover:bg-destructive/90 hover:scale-[1.02] hover:shadow-card-hover active:scale-95",
        outline: "border border-input bg-background shadow-card hover:bg-accent hover:text-accent-foreground hover:border-brand-primary/50 hover:scale-[1.02] hover:shadow-card-hover active:scale-95",
        secondary: "bg-secondary text-secondary-foreground shadow-card hover:bg-secondary/80 hover:scale-[1.02] hover:shadow-card-hover active:scale-95",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] active:scale-95",
        link: "text-brand-primary underline-offset-4 hover:underline hover:text-brand-primary-dark transition-colors",
        hero: "bg-gradient-primary text-white shadow-glass hover:shadow-hero hover:scale-[1.02] active:scale-95 font-bold",
        premium: "bg-gradient-hero text-white shadow-glass-lg hover:shadow-brand-mega hover:scale-[1.02] active:scale-95 font-bold border border-white/20",
        glass: "glass-world-class hover:bg-white/95 hover:shadow-float hover:scale-[1.02] active:scale-95 font-semibold",
        cta: "bg-gradient-button text-white font-bold shadow-button hover:shadow-button-hover hover:scale-[1.02] active:scale-95 transform transition-premium",
        success: "bg-brand-success text-white shadow-card hover:bg-brand-success/90 hover:scale-[1.02] hover:shadow-card-hover active:scale-95",
        warning: "bg-brand-warning text-white shadow-card hover:bg-brand-warning/90 hover:scale-[1.02] hover:shadow-card-hover active:scale-95"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
