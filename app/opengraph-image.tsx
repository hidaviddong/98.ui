import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const alt = "98.ui - Windows 98 Style UI Components";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default async function OGImage() {
	const msSansSerif = await readFile(
		join(process.cwd(), "font/ms_sans_serif.ttf"),
	);

	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				background: "#008080",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div
				style={{
					background: "#c0c0c0",
					borderTop: "8px solid #fff",
					borderLeft: "8px solid #fff",
					borderRight: "8px solid #808080",
					borderBottom: "8px solid #808080",
					boxShadow: "12px 12px 0 #000",
					padding: "56px 96px",
					textAlign: "center",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<span
					style={{
						fontFamily: "ms_sans_serif",
						fontSize: 96,
						color: "#000",
						fontWeight: "bold",
						textShadow: "2px 2px 0 #fff, 4px 4px 0 #808080",
						letterSpacing: "-4px",
					}}
				>
					98.ui
				</span>
				<span
					style={{
						fontFamily: "ms_sans_serif",
						fontSize: 40,
						color: "#222",
						marginTop: 40,
						textShadow: "1px 1px 0 #fff",
					}}
				>
					Windows 98 Style UI Components
				</span>
			</div>
		</div>,
		{
			...size,
			fonts: [
				{
					name: "ms_sans_serif",
					data: msSansSerif,
					style: "normal",
					weight: 400,
				},
			],
		},
	);
}
