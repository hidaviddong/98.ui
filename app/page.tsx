import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function Home() {
	return (
		<div className="flex flex-col gap-4 items-center justify-center h-screen">
			<div className="flex flex-col gap-2">
				<p>Button</p>
				<div className="flex gap-2">
					<Button>Click me</Button>
					<Button disabled>Click me</Button>
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<p>Checkbox</p>
				<div className="flex flex-col gap-2">
					<div className="flex gap-2">
						<Checkbox id="terms" />
						<label
							htmlFor="terms"
							className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							This is a checkbox
						</label>
					</div>
					<div className="flex gap-2">
						<Checkbox id="terms" disabled />
						<label
							htmlFor="terms"
							className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							This is a checkbox
						</label>
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<p>Radio</p>

				<RadioGroup defaultValue="default">
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="default" id="r1" />
						<Label htmlFor="r1">Default</Label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="comfortable" id="r2" disabled />
						<Label htmlFor="r2">Comfortable</Label>
					</div>
				</RadioGroup>
			</div>
		</div>
	);
}
