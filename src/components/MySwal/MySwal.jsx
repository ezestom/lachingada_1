import React, { useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import img from "../../img/0056.png";
import "./MySwal.css";

const MySwal = withReactContent(Swal);

const MySweetAlert = () => {
	useEffect(() => {
		MySwal.fire({
			title: "Deseas hacer un pedido?",
			text: "Modal with a custom image.",
			imageUrl: `${img.src}`,
			imageWidth: 400,
			imageHeight: 200,
			imageAlt: "Custom image",
			html: (
				<div className="gap-2 flex justify-evenly w-full">
					<a
						className="bg-[--secondary] hover:scale-105 transition rounded-md text-[--principal] py-2 px-4"
						href="https://github.com/ezestom">
						Delivery
					</a>
					<a
						className="bg-[--secondary] hover:scale-105 transition rounded-md text-[--principal] py-2 px-4"
						href="https://github.com/ezestom">
						Reservas
					</a>
					{/* <button
						className="bg-[--secondary] hover:scale-105 transition rounded-md text-[--principal] py-2 px-4"
						onClick={() => MySwal.close()}>
						Cerrar
					</button> */}
				</div>
			),
			showCloseButton: true,
			showCancelButton: false,
			showConfirmButton: false,
			showDenyButton: false,
		});
	}, []);

	return <button className="fixed -z-20 right-0">Show Alert</button>;
};

export default MySweetAlert;
