import { useEffect, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import skeleton from "../../icons/skeleton.svg";

export function GridSwiper(props) {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: "#" + props.galleryID,
			children: "a",
			pswpModule: () => import("photoswipe"),
		});
		lightbox.init();

		return () => {
			lightbox.destroy();
			lightbox = null;
		};
	}, []);

	useEffect(() => {
		setIsLoading(false);
	}, [isLoading]);

	return (
		<div
			className="pswp-gallery w-full h-full grid grid-cols-2 md:grid-cols-4 gap-4 "
			id={props.galleryID}>
			{props.images.map((image, index) =>
				isLoading ? (
					<img
						src={skeleton.src}
						className="w-full aspect-square h-full object-cover opacity-10 "
					/>
				) : (
					<a
						href={image.largeURL}
						data-pswp-width={image.width}
						data-pswp-height={image.height}
						data-cropped="true"
						key={props.galleryID + "-" + index}
						target="_blank"
						rel="noreferrer"
						className="object-cover aspect-square hover:scale-105 transition-transform duration-300 ease-in-out">
						<img
							src={image.thumbnailURL}
							alt=""
							className=" w-full h-full max-h-[500px] object-cover object-center transition-transform duration-300 ease-in-out"
						/>
					</a>
				)
			)}
		</div>
	);
}
