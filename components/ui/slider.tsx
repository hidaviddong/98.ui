"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

function SliderIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="11"
			height="21"
			viewBox="0 0 11 21"
			fill="none"
		>
			<g filter="url(#filter0_iiii_4_20)">
				<path
					d="M11 0H0V16H1V17H2V18H3V19H4V20H5V21H6V20H7V19H8V18H9V17H10V16H11V0Z"
					fill="#B8C0C1"
				/>
			</g>
			<defs>
				<filter
					id="filter0_iiii_4_20"
					x="0"
					y="0"
					width="11"
					height="21"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="1" />
					<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
					/>
					<feBlend
						mode="normal"
						in2="shape"
						result="effect1_innerShadow_4_20"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dx="1" dy="-1" />
					<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
					/>
					<feBlend
						mode="normal"
						in2="effect1_innerShadow_4_20"
						result="effect2_innerShadow_4_20"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dx="-1" dy="-1" />
					<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0.482353 0 0 0 0 0.490196 0 0 0 0 0.513726 0 0 0 1 0"
					/>
					<feBlend
						mode="normal"
						in2="effect2_innerShadow_4_20"
						result="effect3_innerShadow_4_20"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dx="-1" dy="-1" />
					<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
					/>
					<feBlend
						mode="normal"
						in2="effect3_innerShadow_4_20"
						result="effect4_innerShadow_4_20"
					/>
				</filter>
			</defs>
		</svg>
	);
}

function SliderVerticalIcon() {
	return (
		<div
			className={cn(
				"w-[21px] h-[13.5px] bg-[#C0C0C0] shadow-[inset_-1px_-1px_0px_0px_#0A0A0A,inset_1px_1px_0px_0px_#FFF,inset_-2px_-2px_0px_0px_#808080,inset_2px_2px_0px_0px_#DFDFDF]",
			)}
		></div>
	);
}

function Slider({
	className,
	defaultValue,
	value,
	min = 0,
	max = 100,
	...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
	return (
		<SliderPrimitive.Root
			data-slot="slider"
			defaultValue={defaultValue}
			value={value}
			min={min}
			max={max}
			className={cn(
				"relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
				className,
			)}
			{...props}
		>
			<SliderPrimitive.Track
				data-slot="slider-track"
				className={cn(
					"bg-black shadow-[inset_1px_1px_0px_0px_#b8b8b8,0px_1px_0px_0px_#fff,inset_-1px_-1px_0px_0px_#757575,0px_1px_0px_0px_#9f9f9f] relative grow overflow-hidden data-[orientation=horizontal]:h-[3px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[3px]",
				)}
			></SliderPrimitive.Track>
			<SliderPrimitive.Thumb
				data-slot="slider-thumb"
				className="flex justify-center items-center focus:outline-none size-4 shrink-0 transition-[color,box-shadow] disabled:pointer-events-none"
			>
				{props.orientation === "vertical" ? (
					<SliderVerticalIcon />
				) : (
					<SliderIcon />
				)}
			</SliderPrimitive.Thumb>
		</SliderPrimitive.Root>
	);
}

export { Slider };
