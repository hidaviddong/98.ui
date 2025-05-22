import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogFooter,
} from "@/components/ui/dialog";

import {
	Menubar,
	MenubarCheckboxItem,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
} from "@/components/ui/menubar";

export default function Home() {
	return (
		<div className="flex flex-col gap-4 items-center justify-center">
			<div className="flex w-72 flex-col gap-2">
				<p>Button</p>
				<div className="flex gap-2">
					<Button>Click me</Button>
					<Button disabled>Click me</Button>
				</div>
			</div>

			<div className="flex w-72 flex-col gap-2">
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

			<div className="flex w-72 flex-col gap-2">
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

			<div className="flex w-72 flex-col gap-2">
				<p>Input</p>
				<div className="flex flex-col gap-2">
					<Input type="email" placeholder="test@test.com" />
					<Input disabled type="email" placeholder="test@test.com" />
					<Input type="password" />
				</div>
			</div>

			<div className="flex w-72 flex-col gap-2">
				<p>Select</p>
				<Select>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Theme" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="light">Light</SelectItem>
						<SelectItem value="dark">Dark</SelectItem>
						<SelectItem value="system">System</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div className="flex w-72 flex-col gap-2">
				<p>Slider</p>
				<Slider defaultValue={[33]} max={100} step={1} />
				<Slider defaultValue={[33]} max={100} step={1} orientation="vertical" />
			</div>

			<div className="flex w-72 flex-col gap-2">
				<p>Dialog</p>
				<Dialog>
					<DialogTrigger asChild>
						<Button>Edit Profile</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Edit profile</DialogTitle>
						</DialogHeader>
						<div className="grid gap-4 py-4 px-2">
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="name" className="text-right">
									Name
								</Label>
								<Input
									id="name"
									defaultValue="David Dong"
									className="col-span-3"
								/>
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="username" className="text-right">
									Username
								</Label>
								<Input
									id="username"
									defaultValue="@hidaviddong"
									className="col-span-3"
								/>
							</div>
						</div>
						<DialogFooter className="p-2">
							<Button type="submit">Save changes</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>

			<div className="flex w-72 flex-col gap-2">
				<p>Menu Bar</p>
				<Menubar>
					<MenubarMenu>
						<MenubarTrigger>File</MenubarTrigger>
						<MenubarContent>
							<MenubarItem>
								New Tab <MenubarShortcut>⌘T</MenubarShortcut>
							</MenubarItem>
							<MenubarItem>
								New Window <MenubarShortcut>⌘N</MenubarShortcut>
							</MenubarItem>
							<MenubarItem disabled>New Incognito Window</MenubarItem>
							<MenubarSeparator />
							<MenubarSub>
								<MenubarSubTrigger>Share</MenubarSubTrigger>
								<MenubarSubContent>
									<MenubarItem>Email link</MenubarItem>
									<MenubarItem>Messages</MenubarItem>
									<MenubarItem>Notes</MenubarItem>
								</MenubarSubContent>
							</MenubarSub>
							<MenubarSeparator />
							<MenubarItem>
								Print... <MenubarShortcut>⌘P</MenubarShortcut>
							</MenubarItem>
						</MenubarContent>
					</MenubarMenu>
					<MenubarMenu>
						<MenubarTrigger>Edit</MenubarTrigger>
						<MenubarContent>
							<MenubarItem>
								Undo <MenubarShortcut>⌘Z</MenubarShortcut>
							</MenubarItem>
							<MenubarItem>
								Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
							</MenubarItem>
							<MenubarSeparator />
							<MenubarSub>
								<MenubarSubTrigger>Find</MenubarSubTrigger>
								<MenubarSubContent>
									<MenubarItem>Search the web</MenubarItem>
									<MenubarSeparator />
									<MenubarItem>Find...</MenubarItem>
									<MenubarItem>Find Next</MenubarItem>
									<MenubarItem>Find Previous</MenubarItem>
								</MenubarSubContent>
							</MenubarSub>
							<MenubarSeparator />
							<MenubarItem>Cut</MenubarItem>
							<MenubarItem>Copy</MenubarItem>
							<MenubarItem>Paste</MenubarItem>
						</MenubarContent>
					</MenubarMenu>
					<MenubarMenu>
						<MenubarTrigger>View</MenubarTrigger>
						<MenubarContent>
							<MenubarCheckboxItem>
								Always Show Bookmarks Bar
							</MenubarCheckboxItem>
							<MenubarCheckboxItem checked>
								Always Show Full URLs
							</MenubarCheckboxItem>
							<MenubarSeparator />
							<MenubarItem inset>
								Reload <MenubarShortcut>⌘R</MenubarShortcut>
							</MenubarItem>
							<MenubarItem disabled inset>
								Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
							</MenubarItem>
							<MenubarSeparator />
							<MenubarItem inset>Toggle Fullscreen</MenubarItem>
							<MenubarSeparator />
							<MenubarItem inset>Hide Sidebar</MenubarItem>
						</MenubarContent>
					</MenubarMenu>
					<MenubarMenu>
						<MenubarTrigger>Profiles</MenubarTrigger>
						<MenubarContent>
							<MenubarRadioGroup value="benoit">
								<MenubarRadioItem value="andy">Andy</MenubarRadioItem>
								<MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
								<MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
							</MenubarRadioGroup>
							<MenubarSeparator />
							<MenubarItem inset>Edit...</MenubarItem>
							<MenubarSeparator />
							<MenubarItem inset>Add Profile...</MenubarItem>
						</MenubarContent>
					</MenubarMenu>
				</Menubar>
			</div>
		</div>
	);
}
