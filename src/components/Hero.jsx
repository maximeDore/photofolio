import { useRef, useEffect, useState } from "react";

import { Autoplay, A11y, Controller, Lazy, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { hero1, lightmode, darkmode } from "../assets";

// Import Swiper styles
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/controller";
import "swiper/css/effect-coverflow";

const Hero = () => {
	const swiper1Ref = useRef(null);
	const swiper2Ref = useRef(null);

	const [lightMode, setLightMode] = useState(false);

	const swiperParams = {
		modules: [Autoplay, A11y, Controller, Lazy, EffectCoverflow],
		slidesPerView: 1,
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

	const toggleLightMode = () => {
		setLightMode((current) => !current);
	};

	useEffect(() => {
		swiper1Ref.current.controller.control = swiper2Ref.current;
		swiper2Ref.current.controller.control = swiper1Ref.current;
	}, []);

	useEffect(() => {
		if (lightMode) {
			document.getElementsByTagName("BODY")[0].classList.add("light-mode");
		} else {
			document.getElementsByTagName("BODY")[0].classList.remove("light-mode");
		}
	}, [lightMode]);

	return (
		<section id="hero" className="hero flex">
			{/* Left content */}
			<div className="hero__content bg-black w-full relative overflow-hidden">
				{/* Title */}
				<div className="wrap padd absolute bottom-0 left-0 right-0 z-[2] pointer-events-none">
					<div className="wrapper">
						<h1 className="h1 inline-block pointer-events-auto drop-shadow-md shadow-black">
							<span className="inline-block" data-aos="fade-left" data-aos-duration="750" data-aos-easing="ease">
								Maxime
							</span>{" "}
							{/* <br className="sm:block hidden" /> */}
							<span
								className="text-primary inline-block"
								data-aos="fade-right"
								data-aos-duration="750"
								data-aos-delay="500"
								data-aos-easing="ease"
							>
								Doré
							</span>
						</h1>
						<p
							className="subtitle pt-3 pl-1"
							data-aos="fade"
							data-aos-delay="1250"
							data-aos-duration="1000"
							data-aos-easing="ease"
						>
							Développeur Web - <span className="text-primary">Photographe</span>
						</p>
					</div>
				</div>
				{/* Slider */}
				<div className="slider slider--home absolute left-0 top-0 bottom-0 w-[100%]">
					<Swiper
						{...swiperParams}
						onSwiper={(swiper) => {
							swiper1Ref.current = swiper;
						}}
						autoplay={true}
						className="h-[100%]"
					>
						<SwiperSlide>
							<img src={hero1} className="w-[100%] h-[100%] object-cover grayscale-[85%]" alt="" />
						</SwiperSlide>
						<SwiperSlide>
							<img
								src="https://picsum.photos/1720/945"
								className="w-[100%] h-[100%] object-cover grayscale-[85%]"
								alt=""
							/>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>

			{/* Right sidebar */}
			<div className="hero__sidebar bg-white text-black shrink-0 relative ">
				{/* Lightmode button */}
				<button
					className="absolute top-[20px] right-[50%] translate-x-[50%] w-[40px] h-[40px] shadow-md transition-all hover:shadow-lg hover:scale-125 rounded-full"
					onClick={toggleLightMode}
				>
					<img
						src={darkmode}
						className={`transition-opacity w-[28px] h-[28px] absolute bottom-[50%] right-[50%] translate-[50%] translate-x-1/2 translate-y-1/2 ${
							!lightMode ? "opacity-0" : ""
						}`}
						alt="toggle-light-mode"
					/>
					<img
						src={lightmode}
						className={`transition-opacity w-[28px] h-[28px] absolute bottom-[50%] right-[50%] translate-x-1/2 translate-y-1/2 ${
							lightMode ? "opacity-0" : ""
						}`}
						alt="toggle-dark-mode"
					/>
				</button>

				{/* Thumbnail navigation */}
				<div className="slider__nav">
					{/* TODO: Au clic nextSlide */}
					<Swiper
						{...swiperParams}
						onSwiper={(swiper) => {
							swiper2Ref.current = swiper;
						}}
						effect="coverflow"
						className="h-[100%]"
					>
						{/* TODO: Offset d'une slide pour créer un thumbnail de la next slide */}
						<SwiperSlide>
							<img
								src="https://picsum.photos/150/300"
								className="w-[100%] h-[100%] object-cover transition-all grayscale-[50%] hover:grayscale-0"
								alt=""
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src={hero1}
								className="w-[100%] h-[100%] object-cover transition-all grayscale-[50%] hover:grayscale-0"
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
