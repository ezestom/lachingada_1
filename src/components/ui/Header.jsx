import { MyDrawer } from "../MyDrawer/MyDrawer.jsx";

export function Header() {
	return (
		<header class="bg-red-50 backdrop-blur-md fixed top-0 mx-auto w-full left-0 z-50">
			<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
				<div class="flex h-16 items-center justify-between">
					<div class="md:flex md:items-center md:gap-12">
						<a class="block text-[--primary]" href="#">
							<span class="sr-only">Home</span>
						</a>
					</div>

					<div class="hidden md:block">
						<nav aria-label="Global">
							<ul class="flex items-center gap-6 text-sm">
								<li>
									<a
										class="text-[--primary] font-semibold transition hover:scale-105"
										href="#sectionOne">
										Section 1
									</a>
								</li>

								<li>
									<a
										class="text-[--primary] font-semibold transition hover:scale-105"
										href="#sectionTwo">
										Section 2
									</a>
								</li>

								<li>
									<a
										class="text-[--primary] font-semibold transition hover:scale-105"
										href="#events">
										Eventos
									</a>
								</li>

								<li>
									<a
										class="text-[--primary] font-semibold transition hover:scale-105"
										href="#sectionFour">
										Section 4
									</a>
								</li>
							</ul>
						</nav>
					</div>

					<div class="flex items-center gap-4">
						<div class="sm:flex sm:gap-4">
							<a
								href="#"
								class="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-[--green]">
								<span class="font-semibold text-white text-sm relative z-10 group-hover:text-[--green] duration-500">
									Whatsapp
								</span>
								<span class="absolute top-0 left-0 w-full bg-[--green] duration-500 group-hover:-translate-x-full h-full"></span>
								<span class="absolute top-0 left-0 w-full bg-[--green] duration-500 group-hover:translate-x-full h-full"></span>

								<span class="absolute top-0 left-0 w-full bg-[--green] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
								<span class="absolute delay-300 top-0 left-0 w-full bg-[--green] duration-500 group-hover:translate-y-full h-full"></span>
							</a>
						</div>

						<div class="block md:hidden">
							<MyDrawer />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}