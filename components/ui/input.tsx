import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				"file:text-foreground shadow-[inset_-1px_-1px_0px_0px_#fff,inset_1px_1px_0px_0px_#808080,inset_-2px_-2px_0px_0px_#dfdfdf,inset_2px_2px_0px_0px_#0a0a0a] placeholder:text-muted-foreground selection:bg-[#C0C0C0] selection:text-[#808080] border-input flex h-7 w-full min-w-0 bg-white px-1 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-[#C0C0C0] disabled:text-[#808080] md:text-sm",
				"aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
				className,
			)}
			{...props}
		/>
	);
}

export { Input };
