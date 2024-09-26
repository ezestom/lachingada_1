import { useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import img from "../../img/logorosa.png";
import "./MySwal.css";

const MySwal = withReactContent(Swal);

const MySweetAlert = () => {
	useEffect(() => {
		// Verificamos si el popup ya fue mostrado en esta sesión
		const hasSeenPopup = sessionStorage.getItem("popupShown");

		if (!hasSeenPopup) {
			// Si no se ha mostrado, mostramos el popup
			MySwal.fire({
				title: "Deseas hacer un pedido?",
				text: "Modal with a custom image.",
				imageUrl: `${img.src}`,
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: "Custom image",
				html: (
					<div className=" flex justify-evenly w-full">
						<a
							className="bg-[--secondary] hover:scale-105 transition rounded-md text-[--principal] p-4"
							href="https://github.com/ezestom">
							Delivery
						</a>
						<a
							className="bg-[--secondary] hover:scale-105 transition rounded-md text-[--principal] p-4"
							href="https://github.com/ezestom">
							Reservas
						</a>
					</div>
				),
				showCloseButton: true,
				showCancelButton: false,
				showConfirmButton: false,
				showDenyButton: false,
			});

			// Marcamos en sessionStorage que el popup ya fue mostrado en esta sesión
			sessionStorage.setItem("popupShown", "true");
		}
	}, []);

	return <button className="fixed -z-20 right-0">Show Alert</button>;
};

export default MySweetAlert;
