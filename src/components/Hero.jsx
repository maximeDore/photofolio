import { useRef, useEffect, useState } from "react";

import Img from "./Img";

import { Autoplay, A11y, Controller, Lazy, EffectCoverflow } from "swiper";
import { heroList, lightmode, darkmode } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";

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

	// Offset the images array for the navigation slider
	let offsetHeroList = [...heroList];
	const firstItem = offsetHeroList.shift();
	offsetHeroList.push(firstItem);

	const swiperParams = {
		modules: [Autoplay, A11y, Controller, Lazy, EffectCoverflow],
		slidesPerView: 1,
		// onSwiper: (swiper) => console.log(swiper),
		// onSlideChange: () => {

		// },
		speed: 1000,
		loop: true,
		longSwipesRatio: 0.01,
		lazy: {
			loadPrevNext: true,
		},
		watchSlidesProgress: true,
	};

	const nextSlide = () => {
		swiper1Ref.current.slideNext();
	};

	const toggleLightMode = () => {
		setLightMode((current) => !current);
	};

	useEffect(() => {
		swiper1Ref.current.controller.control = swiper2Ref.current;
		swiper2Ref.current.controller.control = swiper1Ref.current;

		window.addEventListener("resize", () => {
			swiper1Ref.current.update();
			swiper2Ref.current.update();
		});
	}, []);

	useEffect(() => {
		const body = document.getElementsByTagName("BODY")[0];
		if (lightMode) {
			body.classList.add("light-mode");
		} else {
			body.classList.remove("light-mode");
		}
	}, [lightMode]);

	return (
		<header id="accueil" className="hero flex overflow-hidden">
			{/* Left content */}
			<div className="hero__content bg-black w-full">
				{/* Title */}
				<div className="wrap padd absolute bottom-0 left-0 right-mobile-sidebar sm:right-sidebar z-[2] pointer-events-none">
					<div className="wrapper">
						<h1 className="sr-only">Maxime Doré | Développeur Web - Photographe</h1>
						<div className="h1 block pointer-events-auto drop-shadow-md shadow-black mr-10">
							<span
								className="inline-block -mx-1 px-1 pt-[0.1em] overflow-hidden"
								data-aos
							>
								<span className="inline-block transition-[transform,opacity] opacity-0 translate-y-full -translate-x-2 rotate-45 scale-50 origin-top-left parent-aos:opacity-100 parent-aos:transform-none duration-[800ms] delay-1000">M</span>
								<span className="inline-block transition-[transform,opacity] opacity-0 translate-y-full -translate-x-2 rotate-45 scale-50 origin-top-left parent-aos:opacity-100 parent-aos:transform-none duration-[800ms] delay-[1020ms]">a</span>
								<span className="inline-block transition-[transform,opacity] opacity-0 translate-y-full -translate-x-2 rotate-45 scale-50 origin-top-left parent-aos:opacity-100 parent-aos:transform-none duration-[800ms] delay-[1040ms]">x</span>
								<span className="inline-block transition-[transform,opacity] opacity-0 translate-y-full -translate-x-2 rotate-45 scale-50 origin-top-left parent-aos:opacity-100 parent-aos:transform-none duration-[800ms] delay-[1060ms]">i</span>
								<span className="inline-block transition-[transform,opacity] opacity-0 translate-y-full -translate-x-2 rotate-45 scale-50 origin-top-left parent-aos:opacity-100 parent-aos:transform-none duration-[800ms] delay-[1080ms]">m</span>
								<span className="inline-block transition-[transform,opacity] opacity-0 translate-y-full -translate-x-2 rotate-45 scale-50 origin-top-left parent-aos:opacity-100 parent-aos:transform-none duration-[800ms] delay-[1100ms]">e</span>
							</span>{" "}
							<span
								className="text-primary inline-block -mx-1 px-1 pt-[0.1em] overflow-hidden"
								data-aos
							>
								<span className="inline-block transition-[transform,opacity] opacity-0 translate-y-full -translate-x-2 rotate-45 scale-50 origin-top-left parent-aos:opacity-100 parent-aos:transform-none duration-[800ms] delay-[1120ms]">D</span>
								<span className="inline-block transition-[transform,opacity] opacity-0 translate-y-full -translate-x-2 rotate-45 scale-50 origin-top-left parent-aos:opacity-100 parent-aos:transform-none duration-[800ms] delay-[1140ms]">o</span>
								<span className="inline-block transition-[transform,opacity] opacity-0 translate-y-full -translate-x-2 rotate-45 scale-50 origin-top-left parent-aos:opacity-100 parent-aos:transform-none duration-[800ms] delay-[1160ms]">r</span>
								<span className="inline-block transition-[transform,opacity] opacity-0 translate-y-full -translate-x-2 rotate-45 scale-50 origin-top-left parent-aos:opacity-100 parent-aos:transform-none duration-[800ms] delay-[1180ms]">é</span>
							</span>
						</div>
						<div className="inline-block subtitle pt-3 pl-1" data-aos="fade" data-aos-delay="1500" data-aos-easing="ease">
							Développeur Web - <span className="text-primary">Photographe</span>
						</div>
					</div>
				</div>
				{/* Slider */}
				<div className="slider slider--home fixed inset-0 right-mobile-sidebar md:right-sidebar">
					<Swiper
						{...swiperParams}
						onSwiper={(swiper) => {
							swiper1Ref.current = swiper;
						}}
						autoplay={true}
						className="h-full"
					>
						{heroList.map((image, index) => (
							<SwiperSlide key={index}>
								<Img src={image} className="w-full h-full object-cover grayscale-[85%]" alt="" loading="eager" />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
			{/* Right sidebar */}
			<div className="hero__sidebar bg-white sm:w-sidebar w-mobile-sidebar text-black shrink-0 relative z-10">
				{/* Lightmode button */}
				{/* <button
					className="absolute bottom-[30px] xl:bottom-0 xl:top-[20px] right-[50%] translate-x-[50%] w-[40px] h-[40px] shadow-md transition-all hover:shadow-lg hover:scale-125 rounded-full"
					onClick={toggleLightMode}
				>
					<img
						src={darkmode}
						className={`transition-opacity w-[28px] h-[28px] absolute bottom-[50%] right-[50%] translate-[50%] translate-x-1/2 translate-y-1/2 ${
							!lightMode ? "opacity-0" : "invert"
						}`}
						alt="toggle-light-mode"
					/>
					<img
						src={lightmode}
						className={`transition-opacity w-[28px] h-[28px] absolute bottom-[50%] right-[50%] translate-x-1/2 translate-y-1/2 ${
							lightMode ? "opacity-0 invert" : ""
						}`}
						alt="toggle-dark-mode"
					/>
				</button> */}
				{/* Thumbnail navigation */}
				<div
					className="slider__nav z-[1] cursor-pointer"
					data-aos="fade-left"
					data-aos-delay="1500"
					data-aos-duration="750"
					onClick={nextSlide}
					title="Image suivante"
				>
					<Swiper
						{...swiperParams}
						onSwiper={(swiper) => {
							swiper2Ref.current = swiper;
						}}
						simulateTouch={false}
						effect="coverflow"
						className="h-full"
					>
						{offsetHeroList.map((image, index) => (
							<SwiperSlide key={index}>
								<Img
									src={image}
									className="w-full h-full object-cover transition-all grayscale-[50%] hover:grayscale-0"
									loading="eager"
									alt=""
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</header>
	);
};

export default Hero;
