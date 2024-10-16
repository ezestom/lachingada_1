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

					<div className="hidden md:flex items-center justify-center w-full pl-0 md:pl-[274px]">
						<nav
							aria-label="Global"
							className="w-full flex justify-center">
							<ul className="flex items-center gap-6 text-sm">
								<li>
									<a
										className="text-[--primary] hover:text-[--secondary] font-semibold transition hover:scale-105"
										href="#gallery">
										Galería
									</a>
								</li>

								<li>
									<a
										className="text-[--primary] hover:text-[--secondary] font-semibold transition hover:scale-105"
										href="#events">
										Eventos
									</a>
								</li>
								{/* 
								<li>
									<a
										className="text-[--primary] hover:text-[--secondary] font-semibold transition hover:scale-105"
										href="#history">
										Historia
									</a>
								</li> */}

								<li>
									<a
										className="text-[--primary] hover:text-[--secondary] font-semibold transition hover:scale-105"
										href="#store">
										Tienda
									</a>
								</li>

								<li>
									<a
										className="text-[--primary] hover:text-[--secondary] font-semibold transition hover:scale-105"
										href="#contact">
										Contacto
									</a>
								</li>
							</ul>
						</nav>
						<div className="flex items-center gap-2">
							<div className="flex gap-4">
								<a
									href="#"
									target="_self"
									className="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-[--secondary]">
									<span className="font-semibold text-white text-sm relative z-10 group-hover:text-[--secondary] duration-500">
										Delivery
									</span>
									<span className="absolute top-0 left-0 w-full bg-[--secondary] duration-500 group-hover:-translate-x-full h-full"></span>
									<span className="absolute top-0 left-0 w-full bg-[--secondary] duration-500 group-hover:translate-x-full h-full"></span>

									<span className="absolute top-0 left-0 w-full bg-[--secondary] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
									<span className="absolute delay-300 top-0 left-0 w-full bg-[--secondary] duration-500 group-hover:translate-y-full h-full"></span>
								</a>

								<a
									href="#"
									target="_self"
									className="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-[--secondary]">
									<span className="font-semibold text-white text-sm relative z-10 group-hover:text-[--secondary] duration-500">
										Reserva
									</span>
									<span className="absolute top-0 left-0 w-full bg-[--secondary] duration-500 group-hover:-translate-x-full h-full"></span>
									<span className="absolute top-0 left-0 w-full bg-[--secondary] duration-500 group-hover:translate-x-full h-full"></span>

									<span className="absolute top-0 left-0 w-full bg-[--secondary] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
									<span className="absolute delay-300 top-0 left-0 w-full bg-[--secondary] duration-500 group-hover:translate-y-full h-full"></span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="block md:hidden z-50 fixed top-3 right-3">
				<MyDrawer />
			</div>
		</header>
	);
}
