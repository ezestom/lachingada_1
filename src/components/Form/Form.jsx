export function Form() {
	return (
		<section className="bg-[--secondary]">
			<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
					<div className="lg:col-span-2 lg:py-12">
						<h1>Section 4</h1>
						<h2>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quisquam quibusdam, voluptates, quod, quia
							quae quos quas quidem quae quibusdam, voluptates,
							quod, quia quae quos quas quidem quae
						</h2>
						<div className="mt-8">
							<a
								href="#"
								className="text-2xl font-bold text-pink-600">
								{" "}
								0151 475 4450{" "}
							</a>

							<address className="mt-2 not-italic">
								Uruguay Road, Montevideo, 12134
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

							<div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
								<div>
									<label
										htmlFor="Option1"
										className="block w-full cursor-pointer  border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
										tabindex="0">
										<input
											className="sr-only"
											id="Option1"
											type="radio"
											tabindex="-1"
											name="option"
										/>

										<span className="text-sm">
											{" "}
											Opción 1{" "}
										</span>
									</label>
								</div>

								<div>
									<label
										htmlFor="Option2"
										className="block w-full cursor-pointer  border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
										tabindex="0">
										<input
											className="sr-only"
											id="Option2"
											type="radio"
											tabindex="-1"
											name="option"
										/>

										<span className="text-sm">
											{" "}
											Opción 2{" "}
										</span>
									</label>
								</div>

								<div>
									<label
										htmlFor="Option3"
										className="block w-full cursor-pointer  border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
										tabindex="0">
										<input
											className="sr-only"
											id="Option3"
											type="radio"
											tabindex="-1"
											name="option"
										/>

										<span className="text-sm">
											{" "}
											Opción 3{" "}
										</span>
									</label>
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
									className="inline-block w-full  bg-black px-5 py-3 font-medium text-white sm:w-auto">
									Enviar mensaje
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
