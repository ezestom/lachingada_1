"use client";

import { Drawer } from "vaul";

export function MyDrawer() {
	return (
		<Drawer.Root>
			<Drawer.Trigger asChild>
				<button className="rounded bg-red-100 p-2 text-gray-600 z-50 hover:scale-105600/75 hover:scale-105 transition">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="size-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
			</Drawer.Trigger>
			<Drawer.Portal>
				<Drawer.Overlay className="fixed inset-0 bg-black/40 z-50" />
				<Drawer.Content className="bg-red-100 flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0 z-50">
					<div className="p-4 bgWhite rounded-t-[10px] flex-1">
						<div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
						<div className=" mx-auto">
							<Drawer.Title className="font-medium mb-4">
								La Chingada Restaurante
							</Drawer.Title>
						</div>
					</div>
					<div className="p-4 bg-zinc-100 border-t border-zinc-200 mt-auto">
						<div className="flex gap-6 justify-center  mx-auto">
							<a
								className="text-xs text-zinc-600 flex items-center gap-0.25"
								href="#"
								target="_blank">
								Teléfono
								<svg
									fill="none"
									height="16"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									width="16"
									ariaHidden="true"
									className="w-3 h-3 ml-1">
									<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
									<path d="M15 3h6v6"></path>
									<path d="M10 14L21 3"></path>
								</svg>
							</a>
							<a
								className="text-xs text-zinc-600 flex items-center gap-0.25"
								href="#"
								target="_blank">
								Whatsapp
								<svg
									fill="none"
									height="16"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									width="16"
									ariaHidden="true"
									className="w-3 h-3 ml-1">
									<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
									<path d="M15 3h6v6"></path>
									<path d="M10 14L21 3"></path>
								</svg>
							</a>
							<a
								className="text-xs text-zinc-600 flex items-center gap-0.25"
								href="#"
								target="_blank">
								Instagram
								<svg
									fill="none"
									height="16"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									width="16"
									ariaHidden="true"
									className="w-3 h-3 ml-1">
									<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
									<path d="M15 3h6v6"></path>
									<path d="M10 14L21 3"></path>
								</svg>
							</a>
							<a
								className="text-xs text-zinc-600 flex items-center gap-0.25"
								href="#"
								target="_blank">
								Delivery
								<svg
									fill="none"
									height="16"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									width="16"
									ariaHidden="true"
									className="w-3 h-3 ml-1">
									<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
									<path d="M15 3h6v6"></path>
									<path d="M10 14L21 3"></path>
								</svg>
							</a>
							<a
								className="text-xs text-zinc-600 flex items-center gap-0.25"
								href="#"
								target="_blank">
								Reservas
								<svg
									fill="none"
									height="16"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									width="16"
									ariaHidden="true"
									className="w-3 h-3 ml-1">
									<path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
									<path d="M15 3h6v6"></path>
									<path d="M10 14L21 3"></path>
								</svg>
							</a>
						</div>
					</div>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
	);
}
