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
				"bg-primary shadow-tabs text-foreground inline-flex h-[calc(100%-1px)] rounded-tl-sm rounded-tr-sm flex-1 items-center justify-center px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow,transform] disabled:pointer-events-none translate-y-[3px] data-[state=active]:translate-y-[1px] disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
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
				"flex-1 px-2 shadow-tabs-content outline-none bg-primary",
				className,
			)}
			{...props}
		/>
	);
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
