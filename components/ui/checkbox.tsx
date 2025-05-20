"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

import { cn } from "@/lib/utils"


function CheckIcon({className}:{className:string}){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none" className={className}>
      <g clipPath="url(#clip0_3_1891)">
        <path fillRule="evenodd" clipRule="evenodd" d="M7 0H6V1H5V2H4V3H3V4H2V3H1V2H0V5H1V6H2V7H3V6H4V5H5V4H6V3H7V0Z" fill="black"/>
      </g>
      <defs>
        <clipPath id="clip0_3_1891">
          <rect width="7" height="7" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive size-4 shrink-0 shadow-checkbox transition-shadow outline-none disabled:cursor-not-allowed disabled:bg-primary",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-2" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
