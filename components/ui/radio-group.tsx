"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "@/lib/utils";

function RadioIcon({ className }: { className: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="12"
			height="13"
			viewBox="0 0 12 13"
			fill="none"
			className={className}
		>
			<g clipPath="url(#clip0_3_1936)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M8 0.5H4V1.5H2V2.5H1V4.5H0V8.5H1V10.5H2V8.5H1V4.5H2V2.5H4V1.5H8V2.5H10V1.5H8V0.5Z"
					fill="#808080"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M8 1.5H4V2.5H2V4.5H1V8.5H2V9.5H3V8.5H2V4.5H3V3.5H4V2.5H8V3.5H10V2.5H8V1.5Z"
					fill="black"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M9 3.5H10V4.5H9V3.5ZM10 8.5V4.5H11V8.5H10ZM8 10.5V9.5H9V8.5H10V10.5H8ZM4 10.5V11.5H8V10.5H4ZM4 10.5V9.5H2V10.5H4Z"
					fill="#DFDFDF"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M11 2.5H10V4.5H11V8.5H10V10.5H8V11.5H4V10.5H2V11.5H4V12.5H8V11.5H10V10.5H11V8.5H12V4.5H11V2.5Z"
					fill="white"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M4 2.5H8V3.5H9V4.5H10V8.5H9V9.5H8V10.5H4V9.5H3V8.5H2V4.5H3V3.5H4V2.5Z"
					className="group-disabled:fill-[#C0C0C0] fill-white"
				/>
			</g>
			<defs>
				<clipPath id="clip0_3_1936">
					<rect
						width="12"
						height="12"
						fill="white"
						transform="translate(0 0.5)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
}

function CircleIcon({ className }: { className: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="4"
			height="5"
			viewBox="0 0 4 5"
			fill="none"
			className={className}
		>
			<g clipPath="url(#clip0_4_63)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M3 0.5H1V1.5H0V3.5H1V4.5H3V3.5H4V1.5H3V0.5Z"
					fill="black"
				/>
			</g>
			<defs>
				<clipPath id="clip0_4_63">
					<rect
						width="4"
						height="4"
						fill="white"
						transform="translate(0 0.5)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
}

function RadioGroup({
	className,
	...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
	return (
		<RadioGroupPrimitive.Root
			data-slot="radio-group"
			className={cn("grid gap-3", className)}
			{...props}
		/>
	);
}

function RadioGroupItem({
	className,
	...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
	return (
		<RadioGroupPrimitive.Item
			data-slot="radio-group-item"
			className={cn(
				"group",
				"text-primary outline-none disabled:cursor-not-allowed flex items-center justify-center relative",
				className,
			)}
			{...props}
		>
			<RadioIcon className="size-4" />
			<RadioGroupPrimitive.Indicator
				data-slot="radio-group-indicator"
				className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
			>
				<CircleIcon className="fill-primary size-1.5" />
			</RadioGroupPrimitive.Indicator>
		</RadioGroupPrimitive.Item>
	);
}

export { RadioGroup, RadioGroupItem };
