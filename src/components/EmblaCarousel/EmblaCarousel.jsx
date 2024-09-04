import useEmblaCarousel from "embla-carousel-react";
import "./EmblaCarousel.css";
import Autoplay from "embla-carousel-autoplay";
import img1 from "../../img/0060.jpg";
import img2 from "../../img/0061.jpg";
import img3 from "../../img/0062.jpg";
import img4 from "../../img/0064.jpg";

const images = [img1, img2, img3, img4];

export function EmblaCarousel() {
	const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

	return (
		<div className="embla" ref={emblaRef}>
			<div className="embla__container max-h-[500px] flex items-center ">
				{images.map((img, index) => (
					<div className="embla__slide hover:cursor-grab" key={index}>
						<img className="embla__slide__img" src={img.src} alt="" />
					</div>
				))}
			</div>
		</div>
	);
}
{/* <div className="embla" ref={emblaRef}>
	<div className="embla__container">
		{[...Array(5)].map((_, index) => (
			<div className="embla__slide hover:cursor-grab" key={index}>
				<img
					className="embla__slide__img"
					src={`https://picsum.photos/800/600?random=${index}`}
					alt=""
				/>
			</div>
		))}
	</div>
</div>; */}