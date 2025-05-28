"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

function Tabs({
	className,
	...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
	return (
		<TabsPrimitive.Root
			data-slot="tabs"
			className={cn("flex flex-col", className)}
			{...props}
		/>
	);
}

function TabsList({
	className,
	...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
	return (
		<TabsPrimitive.List
			data-slot="tabs-list"
			className={cn(
				"text-muted-foreground inline-flex h-9 w-fit items-center justify-center",
				className,
			)}
			{...props}
		/>
	);
}

function TabsTrigger({
	className,
	...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
	return (
		<TabsPrimitive.Trigger
			data-slot="tabs-trigger"
			className={cn(
				"bg-[#C0C0C0] shadow-[inset_-2px_0px_0px_0px_rgba(38,38,38,0.5),inset_-1px_0px_0px_0px_#0a0a0a,inset_1px_1px_0px_0px_#fff,inset_2px_2px_0px_0px_#dfdfdf] text-foreground inline-flex h-[calc(100%-1px)] rounded-tl-sm rounded-tr-sm flex-1 items-center justify-center px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow,transform] disabled:pointer-events-none translate-y-[1px] data-[state=active]:translate-y-[3px] disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		/>
	);
}

function TabsContent({
	className,
	...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
	return (
		<TabsPrimitive.Content
			data-slot="tabs-content"
			className={cn(
				"flex-1 px-2 shadow-[inset_-1px_-1px_0px_0px_#0a0a0a,inset_1px_1px_0px_0px_#fff,inset_-2px_-2px_0px_0px_gray,inset_2px_2px_0px_0px_#dfdfdf] outline-none bg-[#C0C0C0]",
				className,
			)}
			{...props}
		/>
	);
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
