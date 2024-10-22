import { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";
import "./Form.css";

export function Form() {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (isMessageSuccess()) {
			toast("Gracias por tu mensaje, te responderemos a la brevedad.", {
				type: "success",
			});
		}
	}, []); // Agrega las dependencias aquí

	const isMessageSuccess = () => {
		return (
			new URLSearchParams(window.location.search).get("success") ===
			"true"
		);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);

		// Activar loading antes de la promesa
		setIsLoading(true);

		try {
			const response = await fetch(form.action, {
				method: form.method,
				body: formData,
			});

			if (!response.ok) {
				const errorText = await response.text();
				throw new Error(
					`Server responded with ${response.status}: ${errorText}`
				);
			}

			// Si el mensaje se envía con éxito
			toast.success("Mensaje enviado con éxito!");
			form.reset(); // Resetear el formulario
		} catch (error) {
			console.error("Error submitting form:", error);
			toast.error("Ocurrió un error al enviar el mensaje.");
		} finally {
			// Asegúrate de desactivar el loading al final
			setIsLoading(false);
		}
	};

	return (
		<section className="bg-[--secondary]">
			<Toaster />

			<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
					<div className="lg:col-span-2 lg:py-12">
						<h1>Contacto</h1>
						<h2 className="font-semibold leading-8 text-3xl">
							Te esperamos en nuestros locales, siempre felices de
							recibirte.
						</h2>
						<div className="mt-16 gap-8 ">
							<address className="flex flex-col text-xl font-semibold">
								<a
									href="https://maps.app.goo.gl/UfdP48yNGoGyUZSE9"
									target="_blank">
									Coronel Mora 549, Punta Carretas
								</a>
								<a href="#" className="text-xl text-black">
									{" # "}
									097 477 434{" "}
								</a>
							</address>

							<address className="flex flex-col text-xl font-semibold">
								<a
									href="https://maps.app.goo.gl/J4F9P4DUE1U9GSTX9"
									target="_blank">
									Cubo del Norte 3847, Prado
								</a>
								<a href="#" className="text-xl text-black">
									{" # "}
									092 257 730{" "}
								</a>
							</address>
						</div>
					</div>

					<div className=" bg-red-50 p-8  lg:col-span-3 lg:p-12 relative">
						{isLoading && (
							<div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur-md w-full h-full opacity-75 flex justify-center items-center z-50">
								<span className="loader"></span>
							</div>
						)}
						<form
							className="space-y-4 "
							onSubmit={handleSubmit}
							method="POST"
							action="https://formsubmit.co/ezequielstom@gmail.com">
							<div>
								<input
									type="hidden"
									name="_subject"
									value="🌮 La Chingada Web | 📩 Nuevo Mensaje!"
								/>
								<input
									type="hidden"
									name="_captcha"
									value="false"
								/>

								<label>
									Nombre
									<input
										type="text"
										name="name"
										id="name"
										className="w-full  border-gray-200 p-3 text-sm"
										placeholder="Juan Pérez"
										required
									/>
								</label>
							</div>

							<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
								<div>
									<label>
										Email
										<input
											className="w-full  border-gray-200 p-3 text-sm"
											placeholder="juan_perez@email.com"
											type="email"
											name="email"
											id="email"
											required
										/>
									</label>
								</div>

								<div>
									<label>
										Teléfono
										<input
											className="w-full  border-gray-200 p-3 text-sm"
											placeholder="+598 XXXX XXXX"
											type="tel"
											id="phone"
											name="phone"
										/>
									</label>
								</div>
							</div>

							<div>
								<label>
									Mensaje
									<textarea
										className="w-full max-h-36 border-gray-200 p-3 text-sm"
										placeholder="Escribe tu mensaje aquí..."
										rows="8"
										name="email"
										id="email"
										required></textarea>
								</label>
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
