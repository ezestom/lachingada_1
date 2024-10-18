import useEmblaCarousel from "embla-carousel-react";
import "./EmblaCarousel.css";
import Autoplay from "embla-carousel-autoplay";
import img1 from "../../img/slider/1.jpg";
import img2 from "../../img/slider/2.jpg";
import img3 from "../../img/slider/3.jpg";
import img4 from "../../img/slider/4.jpg";
import img5 from "../../img/slider/5.jpg";
import img6 from "../../img/slider/6.jpg";
import img7 from "../../img/slider/7.jpg";
import img8 from "../../img/slider/8.jpg";
import img9 from "../../img/slider/9.jpg";
import img10 from "../../img/slider/10.jpg";
import img11 from "../../img/slider/11.jpg";
import img12 from "../../img/slider/12.jpg";
import img13 from "../../img/slider/13.jpg";
import img14 from "../../img/slider/14.jpg";
import img15 from "../../img/slider/15.jpg";
import img16 from "../../img/slider/16.jpg";
import img17 from "../../img/slider/17.jpg";
import img18 from "../../img/slider/18.jpg";
import img19 from "../../img/slider/19.jpg";
import img20 from "../../img/slider/20.jpg";
import img21 from "../../img/slider/21.jpg";
import img22 from "../../img/slider/22.jpg";
import img23 from "../../img/slider/23.jpg";
import img24 from "../../img/slider/24.jpg";
import img25 from "../../img/slider/25.jpg";
import img26 from "../../img/slider/26.jpg";
import img27 from "../../img/slider/27.jpg";
import img28 from "../../img/slider/28.jpg";
import img29 from "../../img/slider/29.jpg";
import img30 from "../../img/slider/30.jpg";
import img31 from "../../img/slider/31.jpg";
import img32 from "../../img/slider/32.jpg";
import img33 from "../../img/slider/33.jpg";
import img34 from "../../img/slider/34.jpg";

const images = [
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8,
	img9,
	img10,
	img11,
	img12,
	img13,
	img14,
	img15,
	img16,
	img17,
	img18,
	img19,
	img20,
	img21,
	img22,
	img23,
	img24,
	img25,
	img26,
	img27,
	img28,
	img29,
	img30,
	img31,
	img32,
	img33,
	img34,
];

export function EmblaCarousel() {
	const autoplayOptions = Autoplay(
		{ delay: 1750, stopOnInteraction: false } // No se detiene al interactuar
	);

	const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplayOptions]);

	return (
		<div className="embla" ref={emblaRef}>
			<div className="embla__container  flex items-center ">
				{images.map((img, index) => (
					<div
						className="embla__slide hover:cursor-grab  "
						key={index}>
						<img
							className="embla__slide__img max-h-[500px] w-full object-cover object-center"
							src={img.src}
							alt=""
						/>
					</div>
				))}
			</div>
		</div>
	);
}
