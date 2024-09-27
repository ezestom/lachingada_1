import useEmblaCarousel from "embla-carousel-react";
import "./EmblaCarousel.css";
import Autoplay from "embla-carousel-autoplay";
import img1 from "../../img/0060.jpg";
import img2 from "../../img/0061.jpg";
import img3 from "../../img/0062.jpg";
import img4 from "../../img/0064.jpg";
import img5 from "../../img/0065.jpg";
import img6 from "../../img/0066.jpg";
import img7 from "../../img/0072.jpg";
import img8 from "../../img/0073.jpg";
import img9 from "../../img/0075.jpg";
import img10 from "../../img/0077.jpg";
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export function EmblaCarousel() {
	const autoplayOptions = Autoplay(
		{ delay: 1500, stopOnInteraction: false } // No se detiene al interactuar
	);

	const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplayOptions]);

	return (
		<div className="embla" ref={emblaRef}>
			<div className="embla__container max-h-[500px] flex items-center ">
				{images.map((img, index) => (
					<div
						className="embla__slide hover:cursor-grab w-full"
						key={index}>
						<img
							className="embla__slide__img"
							src={img.src}
							alt=""
						/>
					</div>
				))}
			</div>
		</div>
	);
}
