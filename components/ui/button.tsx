import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex bg-[#C0C0C0] w-24 h-8 px-12 py-4 has-[>svg]:px-3 text-black items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:text-[#808080] [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 focus:outline-dashed focus:outline focus:outline-1 focus:outline-offset-[-4px] focus:outline-black shadow-[inset_-1px_-1px_0px_0px_#0A0A0A,inset_1px_1px_0px_0px_#FFF,inset_-2px_-2px_0px_0px_#808080,inset_2px_2px_0px_0px_#DFDFDF] active:shadow-[-1px_-1px_0px_0px_#FFF_inset,_1px_1px_0px_0px_#0A0A0A_inset,_-2px_-2px_0px_0px_#DFDFDF_inset,_2px_2px_0px_0px_#808080_inset]",
);

function Button({
	className,
	asChild = false,
	...props
}: React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
