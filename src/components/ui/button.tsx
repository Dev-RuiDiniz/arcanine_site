/*
Arquivo: src/components/ui/button.tsx
Objetivo: Componente de UI reutilizavel.
Guia rapido: imports, variantes visuais e exportacao do componente.
*/

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "border border-brand-cyan bg-brand-cyan text-slate-950 shadow-[0_24px_60px_-28px_rgba(37,210,238,0.62)] hover:-translate-y-0.5 hover:bg-brand-cyan-strong hover:border-brand-cyan-strong hover:text-white",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-line-subtle bg-white/70 text-slate-900 shadow-[0_18px_44px_-34px_rgba(7,17,31,0.2)] backdrop-blur-md hover:-translate-y-0.5 hover:border-brand-cyan/40 hover:bg-white",
        secondary:
          "border border-white/12 bg-slate-950/84 text-slate-50 shadow-[0_24px_60px_-38px_rgba(7,17,31,0.68)] hover:-translate-y-0.5 hover:border-brand-cyan/60 hover:text-brand-cyan",
        ghost:
          "text-slate-700 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        premium:
          "border border-brand-cyan/70 bg-[linear-gradient(135deg,#67e3f7_0%,#25d2ee_55%,#0d8fab_140%)] text-slate-950 shadow-[0_28px_70px_-30px_rgba(37,210,238,0.7)] hover:-translate-y-0.5 hover:shadow-[0_34px_78px_-28px_rgba(37,210,238,0.82)]",
        "premium-secondary":
          "border border-white/14 bg-white/8 text-white shadow-[0_24px_70px_-44px_rgba(0,0,0,0.62)] backdrop-blur-md hover:-translate-y-0.5 hover:border-brand-cyan/55 hover:bg-white/12 hover:text-brand-ice",
      },
      size: {
        default: "h-11 px-5 py-2 has-[>svg]:px-4",
        sm: "h-9 gap-1.5 px-3.5 has-[>svg]:px-3",
        lg: "h-12 px-7 has-[>svg]:px-5",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

