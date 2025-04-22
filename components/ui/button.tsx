"use client";

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../src/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ease-in-out ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-smooth hover:shadow-hover active:shadow-none active:translate-y-0.5 transform-gpu",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-smooth hover:shadow-hover active:shadow-none active:translate-y-0.5 transform-gpu",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-smooth hover:shadow-hover active:shadow-none active:translate-y-0.5 transform-gpu",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-smooth hover:shadow-hover active:shadow-none active:translate-y-0.5 transform-gpu",
        ghost: "hover:bg-accent hover:text-accent-foreground active:bg-accent/80 active:translate-y-0.5 transform-gpu",
        link: "text-primary underline-offset-4 hover:underline transform-gpu",
      },
      size: {
        default: "h-10 px-4 py-2 gap-2",
        sm: "h-9 rounded-md px-3 gap-1.5 text-xs",
        lg: "h-11 rounded-md px-8 gap-2.5 text-base",
        icon: "h-10 w-10 rounded-full p-2",
      },
      hasIcon: {
        true: "gap-x-2",
        false: "",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      hasIcon: false
    },
    compoundVariants: [
      {
        size: "icon",
        hasIcon: true,
        class: "!p-0"
      }
    ]
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, icon, iconPosition = "left", children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const hasIcon = !!icon;
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, hasIcon, className }))}
        ref={ref}
        {...props}
      >
        {!asChild && hasIcon && iconPosition === "left" && icon}
        {children}
        {!asChild && hasIcon && iconPosition === "right" && icon}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
