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
						<div className="grid grid-cols-2 items-center gap-4  justify-center h-full w-full flex-wrap mx-auto">
							<a
								href="https://wa.me/59897477434"
								target="_blank"
								className="cursor-pointer text-center relative group overflow-hidden border-2 px-8 py-2 border-[--secondary]">
								<span className="font-semibold text-white text-sm relative z-10 group-hover:text-[--secondary] duration-500">
									Whatsapp
								</span>
								<span className="absolute top-0 left-0 w-full bg-[--secondary] duration-500 group-hover:-translate-x-full h-full"></span>
								<span className="absolute top-0 left-0 w-full bg-[--secondary] duration-500 group-hover:translate-x-full h-full"></span>

								<span className="absolute top-0 left-0 w-full bg-[--secondary] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
								<span className="absolute delay-300 top-0 left-0 w-full bg-[--secondary] duration-500 group-hover:translate-y-full h-full"></span>
							</a>
							<a
								href="https://www.instagram.com/lachingadamvd"
								target="_blank"
								className="cursor-pointer text-center relative
								group overflow-hidden border-2 px-8 py-2
								border-[--secondary]">
								<span className="font-semibold text-white text-sm relative z-10 group-hover:text-[--secondary] duration-500">
									Instagram
								</span>
								<span className="absolute top-0 left-0 w-full bg-[--secondary] duration-500 group-hover:-translate-x-full h-full"></span>
								<span className="absolute top-0 left-0 w-full bg-[--secondary] duration-500 group-hover:translate-x-full h-full"></span>
								<span className="absolute top-0 left-0 w-full bg-[--secondary] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
								<span className="absolute delay-300 top-0 left-0 w-full bg-[--secondary] duration-500 group-hover:translate-y-full h-full"></span>
							</a>
							<a
								href="#"
								className="cursor-pointer text-center relative group overflow-hidden border-2 px-8 py-2 border-[--secondary]">
								<span className="font-semibold text-white text-sm relative z-10 group-hover:text-[--secondary] duration-500">
									Reservas
								</span>
								<span className="absolute top-0 left-0 w-full bg-[--secondary] duration-500 group-hover:-translate-x-full h-full"></span>
								<span className="absolute top-0 left-0 w-full bg-[--secondary] duration-500 group-hover:translate-x-full h-full"></span>

								<span className="absolute top-0 left-0 w-full bg-[--secondary] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
								<span className="absolute delay-300 top-0 left-0 w-full bg-[--secondary] duration-500 group-hover:translate-y-full h-full"></span>
							</a>
							<a
								href="#"
								className="cursor-pointer text-center relative group overflow-hidden border-2 px-8 py-2 border-[--secondary]">
								<span className="font-semibold text-white text-sm relative z-10 group-hover:text-[--secondary] duration-500">
									Pedir
								</span>
								<span className="absolute top-0 left-0 w-full bg-[--secondary] duration-500 group-hover:-translate-x-full h-full"></span>
								<span className="absolute top-0 left-0 w-full bg-[--secondary] duration-500 group-hover:translate-x-full h-full"></span>

								<span className="absolute top-0 left-0 w-full bg-[--secondary] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
								<span className="absolute delay-300 top-0 left-0 w-full bg-[--secondary] duration-500 group-hover:translate-y-full h-full"></span>
							</a>
						</div>
					</div>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
	);
}
