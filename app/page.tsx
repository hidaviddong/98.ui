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
} from "@/components/ui/dialog";
import Link from "next/link";

import {
	Menubar,
	MenubarCheckboxItem,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
} from "@/components/ui/menubar";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ComponentSection = ({
	title,
	children,
	sourceCode,
	link,
}: {
	title: string;
	children: React.ReactNode;
	sourceCode: string;
	link: string;
}) => {
	return (
		<div className="flex flex-col gap-4 p-4 bg-[#c0c0c0] border-2 border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080] shadow-[2px_2px_0px_0px_#000000]">
			<div className="flex items-center justify-between">
				<h2 className="text-lg font-bold text-black">{title}</h2>
				<Dialog>
					<DialogTrigger asChild>
						<Button>View Source</Button>
					</DialogTrigger>

					<DialogContent className="sm:max-w-[800px]  bg-[#c0c0c0] border-2 border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080] shadow-[2px_2px_0px_0px_#000000]">
						<DialogHeader>
							<DialogTitle>Source Code - {title}</DialogTitle>
						</DialogHeader>
						<div className="space-y-6 p-2">
							<div>
								<h3 className="text-lg font-bold mb-2">Install</h3>
								<div className="flex items-center gap-2">
									<code className="text-sm bg-[#ffffff] border-2 border-t-[#808080] border-l-[#808080] border-r-[#ffffff] border-b-[#ffffff] p-2 flex-1 overflow-x-auto">
										npx shadcn@latest add {link}
									</code>
								</div>
							</div>
							<div>
								<h3 className="text-lg font-bold mb-2">Code</h3>
								<pre className="p-4 bg-[#ffffff] border-2 border-t-[#808080] border-l-[#808080] border-r-[#ffffff] border-b-[#ffffff] rounded-none overflow-auto max-h-[60vh]">
									<code className="text-black whitespace-pre-wrap break-words">
										{sourceCode}
									</code>
								</pre>
							</div>
						</div>
					</DialogContent>
				</Dialog>
			</div>
			<div className="flex flex-col gap-4">{children}</div>
		</div>
	);
};

const SocialLink = ({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) => {
	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="text-black hover:underline"
		>
			{children}
		</Link>
	);
};

export default function Home() {
	return (
		<div className="min-h-screen bg-[#008080] p-8">
			<div className="max-w-6xl mx-auto space-y-8">
				<div className="bg-[#c0c0c0] p-6 border-2 border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080] shadow-[2px_2px_0px_0px_#000000]">
					<h1 className="text-2xl font-bold mb-2 text-black">98.ui</h1>
					<p className="text-black mb-4">
						A collection of copy-and-paste components for building Windows 98
						style UIs. Powered by Tailwind CSS and React.
					</p>
					<div className="flex gap-4">
						<SocialLink href="https://x.com/hidaviddong">
							<Button>Twitter</Button>
						</SocialLink>
						<SocialLink href="https://github.com/hidaviddong/98.ui">
							<Button>GitHub</Button>
						</SocialLink>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<ComponentSection
						title="Button"
						link="https://98-ui.vercel.app/r/button.json"
						sourceCode={`<Button>Click me</Button>
<Button disabled>Click me</Button>`}
					>
						<div className="flex gap-2">
							<Button>Click me</Button>
							<Button disabled>Click me</Button>
						</div>
					</ComponentSection>

					<ComponentSection
						title="Checkbox"
						link="https://98-ui.vercel.app/r/checkbox.json"
						sourceCode={`<Checkbox id="terms" />
<label htmlFor="terms">This is a checkbox</label>`}
					>
						<div className="flex flex-col gap-2">
							<div className="flex gap-2">
								<Checkbox id="terms" />
								<label htmlFor="terms">This is a checkbox</label>
							</div>
							<div className="flex gap-2">
								<Checkbox id="terms-disabled" disabled />
								<label className="text-[#808080]" htmlFor="terms-disabled">
									Disabled checkbox
								</label>
							</div>
						</div>
					</ComponentSection>

					<ComponentSection
						title="Radio Group"
						link="https://98-ui.vercel.app/r/radio-group.json"
						sourceCode={`<RadioGroup defaultValue="default">
	<RadioGroupItem value="default" id="r1" />
	<Label htmlFor="r1">Default</Label>
</RadioGroup>`}
					>
						<RadioGroup defaultValue="default">
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="default" id="r1" />
								<Label htmlFor="r1">Default</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="comfortable" id="r2" disabled />
								<Label htmlFor="r2">Disabled</Label>
							</div>
						</RadioGroup>
					</ComponentSection>

					<ComponentSection
						title="Input"
						link="https://98-ui.vercel.app/r/input.json"
						sourceCode={`<Input type="email" placeholder="test@test.com" />
<Input disabled type="email" placeholder="test@test.com" />`}
					>
						<div className="flex flex-col gap-2">
							<Input type="email" placeholder="test@test.com" />
							<Input disabled type="email" placeholder="test@test.com" />
						</div>
					</ComponentSection>

					<ComponentSection
						title="Select"
						link="https://98-ui.vercel.app/r/select.json"
						sourceCode={`<Select>
	<SelectTrigger>
		<SelectValue placeholder="Theme" />
	</SelectTrigger>
	<SelectContent>
		<SelectItem value="light">Light</SelectItem>
		<SelectItem value="dark">Dark</SelectItem>
	</SelectContent>
</Select>`}
					>
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
					</ComponentSection>

					<ComponentSection
						title="Slider"
						link="https://98-ui.vercel.app/r/slider.json"
						sourceCode={`<Slider defaultValue={[20]} />
<Slider defaultValue={[33]} max={100} step={1} />`}
					>
						<div className="flex flex-col gap-4">
							<Slider orientation="vertical" defaultValue={[20]} />
							<Slider defaultValue={[33]} max={100} step={1} />
						</div>
					</ComponentSection>

					<ComponentSection
						title="Progress"
						link="https://98-ui.vercel.app/r/progress.json"
						sourceCode={`<Progress value={33} />`}
					>
						<Progress value={33} />
					</ComponentSection>

					<ComponentSection
						title="Textarea"
						link="https://98-ui.vercel.app/r/textarea.json"
						sourceCode={`<Textarea placeholder="Type your message here." />`}
					>
						<Textarea placeholder="Type your message here." />
					</ComponentSection>

					<ComponentSection
						title="Table"
						link="https://98-ui.vercel.app/r/table.json"
						sourceCode={`<Table>
	<TableHeader>
		<TableRow>
			<TableHead>Name</TableHead>
			<TableHead>Status</TableHead>
		</TableRow>
	</TableHeader>
	<TableBody>
		<TableRow>
			<TableCell>John Doe</TableCell>
			<TableCell>Active</TableCell>
		</TableRow>
	</TableBody>
</Table>`}
					>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Name</TableHead>
									<TableHead>Status</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell>John Doe</TableCell>
									<TableCell>Active</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Jane Smith</TableCell>
									<TableCell>Inactive</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</ComponentSection>

					<ComponentSection
						title="Tabs"
						link="https://98-ui.vercel.app/r/tabs.json"
						sourceCode={`<Tabs defaultValue="account">
	<TabsList>
		<TabsTrigger value="account">Account</TabsTrigger>
		<TabsTrigger value="password">Password</TabsTrigger>
	</TabsList>
	<TabsContent value="account">Account content</TabsContent>
	<TabsContent value="password">Password content</TabsContent>
</Tabs>`}
					>
						<Tabs defaultValue="account">
							<TabsList>
								<TabsTrigger value="account">Account</TabsTrigger>
								<TabsTrigger value="password">Password</TabsTrigger>
							</TabsList>
							<TabsContent value="account">Account content</TabsContent>
							<TabsContent value="password">Password content</TabsContent>
						</Tabs>
					</ComponentSection>

					<ComponentSection
						title="Menubar"
						link="https://98-ui.vercel.app/r/menubar.json"
						sourceCode={`<Menubar className="border-none rounded-none">
	<MenubarMenu>
		<MenubarTrigger>File</MenubarTrigger>
		<MenubarContent>
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
		</MenubarContent>
	</MenubarMenu>
	<MenubarMenu>
		<MenubarTrigger>Help</MenubarTrigger>
		<MenubarContent>
			<MenubarItem>About 98.ui</MenubarItem>
		</MenubarContent>
	</MenubarMenu>
</Menubar>`}
					>
						<div className="bg-[#c0c0c0] border-2 border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080]">
							<Menubar className="border-none rounded-none">
								<MenubarMenu>
									<MenubarTrigger>File</MenubarTrigger>
									<MenubarContent>
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
									</MenubarContent>
								</MenubarMenu>
								<MenubarMenu>
									<MenubarTrigger>Help</MenubarTrigger>
									<MenubarContent>
										<MenubarItem>About 98.ui</MenubarItem>
									</MenubarContent>
								</MenubarMenu>
							</Menubar>
						</div>
					</ComponentSection>

					<ComponentSection
						title="Dialog"
						link="https://98-ui.vercel.app/r/dialog.json"
						sourceCode={`<Dialog>
	<DialogTrigger asChild>
		<Button>Open Dialog</Button>
	</DialogTrigger>
	<DialogContent className="sm:max-w-[425px] bg-[#c0c0c0] border-2 border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080] shadow-[2px_2px_0px_0px_#000000]">
		<DialogHeader>
			<DialogTitle>Dialog Title</DialogTitle>
		</DialogHeader>
		<div className="grid gap-4 py-4">
			<div className="grid grid-cols-4 items-center gap-4">
				<Label htmlFor="name" className="text-right">
					Name
				</Label>
				<Input
					id="name"
					defaultValue="John Doe"
					className="col-span-3"
				/>
			</div>
			<div className="grid grid-cols-4 items-center gap-4">
				<Label htmlFor="username" className="text-right">
					Username
				</Label>
				<Input
					id="username"
					defaultValue="@johndoe"
					className="col-span-3"
				/>
			</div>
		</div>
		<div className="flex justify-end gap-2">
			<Button>Save changes</Button>
			<DialogTrigger asChild>
				<Button>Cancel</Button>
			</DialogTrigger>
		</div>
	</DialogContent>
</Dialog>`}
					>
						<Dialog>
							<DialogTrigger asChild>
								<Button>Open Dialog</Button>
							</DialogTrigger>
							<DialogContent className="sm:max-w-[425px] bg-[#c0c0c0] border-2 border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-[#808080] shadow-[2px_2px_0px_0px_#000000]">
								<DialogHeader>
									<DialogTitle>Dialog Title</DialogTitle>
								</DialogHeader>
								<div className="grid gap-4 py-4">
									<div className="grid grid-cols-4 items-center gap-4">
										<Label htmlFor="name" className="text-right">
											Name
										</Label>
										<Input
											id="name"
											defaultValue="John Doe"
											className="col-span-3"
										/>
									</div>
									<div className="grid grid-cols-4 items-center gap-4">
										<Label htmlFor="username" className="text-right">
											Username
										</Label>
										<Input
											id="username"
											defaultValue="@johndoe"
											className="col-span-3"
										/>
									</div>
								</div>
								<div className="flex justify-end gap-2">
									<Button>Save changes</Button>
									<DialogTrigger asChild>
										<Button>Cancel</Button>
									</DialogTrigger>
								</div>
							</DialogContent>
						</Dialog>
					</ComponentSection>
				</div>
			</div>
		</div>
	);
}
