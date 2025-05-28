"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/lib/utils";

function CheckIcon({ className }: { className: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="7"
			height="7"
			viewBox="0 0 7 7"
			fill="none"
			className={className}
		>
			<g clipPath="url(#clip0_3_1891)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M7 0H6V1H5V2H4V3H3V4H2V3H1V2H0V5H1V6H2V7H3V6H4V5H5V4H6V3H7V0Z"
					fill="black"
				/>
			</g>
			<defs>
				<clipPath id="clip0_3_1891">
					<rect width="7" height="7" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}

function Checkbox({
	className,
	...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
	return (
		<CheckboxPrimitive.Root
			data-slot="checkbox"
			className={cn(
				"peer border-input bg-white data-[state=checked]:text-[#808080] data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive size-4 shrink-0 shadow-[inset_-1px_-1px_0px_0px_#fff,inset_1px_1px_0px_0px_#808080,inset_-2px_-2px_0px_0px_#dfdfdf,inset_2px_2px_0px_0px_#0a0a0a] transition-shadow outline-none disabled:cursor-not-allowed disabled:bg-[#C0C0C0]",
				className,
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
	);
}

export { Checkbox };
