export function Form() {
	return (
		<section className="bg-[--secondary]">
			<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
					<div className="lg:col-span-2 lg:py-12">
						<h1>Contacto</h1>
						<h2>
							Te esperamos en nuestros locales, siempre felices de
							recibirte
						</h2>
						<div className="mt-16 gap-8 ">
							<address className="flex flex-col">
								<a
									href="https://maps.app.goo.gl/UfdP48yNGoGyUZSE9"
									target="_blank">
									Coronel Mora 549, Punta Carretas
								</a>
								<a
									href="#"
									className="text-2xl font-bold text-pink-600">
									{" "}
									097 477 434{" "}
								</a>
							</address>

							<address className="flex flex-col">
								<a
									href="https://maps.app.goo.gl/J4F9P4DUE1U9GSTX9"
									target="_blank">
									Cubo del Norte 3847, Prado
								</a>
								<a
									href="#"
									className="text-2xl font-bold text-pink-600">
									{" "}
									092 257 730{" "}
								</a>
							</address>
						</div>
					</div>

					<div className=" bg-red-50 p-8 shadow-lg lg:col-span-3 lg:p-12">
						<form action="#" className="space-y-4">
							<div>
								<label className="sr-only" htmlFor="name">
									Nombre
								</label>
								<input
									className="w-full  border-gray-200 p-3 text-sm"
									placeholder="Nombre"
									type="text"
									id="name"
								/>
							</div>

							<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
								<div>
									<label className="sr-only" htmlFor="email">
										Email
									</label>
									<input
										className="w-full  border-gray-200 p-3 text-sm"
										placeholder="Email"
										type="email"
										id="email"
									/>
								</div>

								<div>
									<label className="sr-only" htmlFor="phone">
										Teléfono
									</label>
									<input
										className="w-full  border-gray-200 p-3 text-sm"
										placeholder="Teléfono"
										type="tel"
										id="phone"
									/>
								</div>
							</div>

							<div>
								<label className="sr-only" htmlFor="message">
									Mensaje
								</label>

								<textarea
									className="w-full  border-gray-200 p-3 text-sm"
									placeholder="Mensaje"
									rows="8"
									id="message"></textarea>
							</div>

							<div className="mt-4">
								<button
									type="submit"
									className="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-[--secondary]">
									<span className="font-semibold text-white text-sm relative z-10 group-hover:text-[--secondary] duration-500">
										Enviar
									</span>
									<span className="absolute top-0 left-0 w-full bg-[--secondary] duration-500 group-hover:-translate-x-full h-full"></span>
									<span className="absolute"></span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
