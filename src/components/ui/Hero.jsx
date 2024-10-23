import { Header } from "./Header.jsx";
import MySwal from "../MySwal/MySwal.jsx";
import { useEffect, useState } from "react";
import "./Hero.css";
import bg from "../../img/logorosa.png";
export function Hero() {
	const [isloading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	return (
		<section class="h-[100vh] max-w-[100vw]">
			<Header client:load />
			<MySwal client:visible />
			{isloading ? (
				<img
					src={bg.src}
					className="w-full h-full object-cover opacity-10 animate-pulse"
				/>
			) : (
				<div class="parent pt-16 top-0 -z-10 max-w-[100dvw] overflow-hidden">
					{[1, 2, 3, 4, 5, 6].map((item) => (
						<div className={`div${item}`} />
					))}
				</div>
			)}
		</section>
	);
}
