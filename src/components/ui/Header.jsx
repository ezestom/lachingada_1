import { MyDrawer } from "../MyDrawer/MyDrawer.jsx";

export function Header() {
	return (
		<header className="bg-red-50 backdrop-blur-md fixed top-0 mx-auto w-full left-0 z-50">
			<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="md:flex md:items-center md:gap-12">
						<a className="block text-[--primary]" href="#">
							<span className="sr-only">Home</span>
						</a>
					</div>

					<div className="hidden md:block">
						<nav aria-label="Global">
							<ul className="flex items-center gap-6 text-sm">
								<li>
									<a
										className="text-[--primary] font-semibold transition hover:scale-105"
										href="#sectionOne">
										Section 1
									</a>
								</li>

								<li>
									<a
										className="text-[--primary] font-semibold transition hover:scale-105"
										href="#sectionTwo">
										Section 2
									</a>
								</li>

								<li>
									<a
										className="text-[--primary] font-semibold transition hover:scale-105"
										href="#events">
										Eventos
									</a>
								</li>

								<li>
									<a
										className="text-[--primary] font-semibold transition hover:scale-105"
										href="#sectionFour">
										Section 4
									</a>
								</li>
							</ul>
						</nav>
					</div>

					<div className="flex items-center gap-4">
						<div className="flex gap-4">
							<a
								href="#"
								className="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-[--green]">
								<span className="font-semibold text-white text-sm relative z-10 group-hover:text-[--green] duration-500">
									Whatsapp
								</span>
								<span className="absolute top-0 left-0 w-full bg-[--green] duration-500 group-hover:-translate-x-full h-full"></span>
								<span className="absolute top-0 left-0 w-full bg-[--green] duration-500 group-hover:translate-x-full h-full"></span>

								<span className="absolute top-0 left-0 w-full bg-[--green] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
								<span className="absolute delay-300 top-0 left-0 w-full bg-[--green] duration-500 group-hover:translate-y-full h-full"></span>
							</a>
						</div>

						<div className="block md:hidden z-50">
							<MyDrawer />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
