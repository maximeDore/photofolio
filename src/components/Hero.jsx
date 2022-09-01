import { useRef, useEffect } from "react";

import { Autoplay, A11y, Controller, Lazy, EffectCube } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import { discount, robot } from "../assets";

// Import Swiper styles
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/controller";
import "swiper/css/effect-cube";

const Hero = () => {
	const swiper1Ref = useRef(null);
	const swiper2Ref = useRef(null);

	const swiperParams = {
		modules: [Autoplay, A11y, Controller, Lazy, EffectCube],
		slidesPerView: 1,
		autoplay: true,
		// onSwiper: (swiper) => console.log(swiper),
		// onSlideChange: () => console.log("slide change"),
		speed: 1000,
		loop: true,
		longSwipesRatio: 0.01,
		lazy: {
			loadPrevNext: true,
		},
		watchSlidesProgress: true,
	};

	useEffect(() => {
		swiper1Ref.current.controller.control = swiper2Ref.current;
		swiper2Ref.current.controller.control = swiper1Ref.current;
	}, []);

	return (
		<section id="hero" className="hero flex">
			{/* Left content */}
			<div className="hero__content bg-black w-full relative overflow-hidden">
				{/* Slider */}
				<div className="slider slider--home absolute left-0 top-0 bottom-0 w-[100%]">
					<Swiper
						{...swiperParams}
						onSwiper={(swiper) => {
							swiper1Ref.current = swiper;
						}}
						className="h-[100%]"
					>
						<SwiperSlide>
							<img
								src="https://picsum.photos/1721/945?grayscale"
								className="w-[100%] h-[100%] object-cover"
								alt=""
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src="https://picsum.photos/1720/945?grayscale"
								className="w-[100%] h-[100%] object-cover"
								alt=""
							/>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="wrap padd absolute bottom-0 left-0 right-0 z-[2] pointer-events-none">
					<h1 className="h1 inline-block pointer-events-auto">
						Maxime <br className="sm:block hidden" /> <span className="color-primary">Doré</span>
					</h1>
				</div>
			</div>
			{/* Right sidebar */}
			<div className="hero__sidebar bg-white color-black shrink-0 relative">
				{/* Thumbnail navigation */}
				<div className="slider__nav">
					{/* TODO: Offset d'une slide pour créer un thumbnail de la next slide */}
					<Swiper
						{...swiperParams}
						onSwiper={(swiper) => {
							swiper2Ref.current = swiper;
						}}
						effect="cube"
						spaceBetween={10}
						className="h-[100%]"
					>
						<SwiperSlide>
							<img
								src="https://picsum.photos/151/300?grayscale"
								className="w-[100%] h-[100%] object-cover"
								alt=""
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src="https://picsum.photos/150/300?grayscale"
								className="w-[100%] h-[100%] object-cover"
								alt=""
							/>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Hero;
