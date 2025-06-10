import { useRef, useEffect, useState } from "react";

import Img from "./Img";

import { Autoplay, A11y, Controller, Lazy, EffectCoverflow, EffectFade } from "swiper";
import { heroList } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/controller";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade"

const Hero = () => {
	const swiper1Ref = useRef(null);
	const swiper2Ref = useRef(null);

	// Offset the images array for the navigation slider
	let offsetHeroList = [...heroList];
	const firstItem = offsetHeroList.shift();
	offsetHeroList.push(firstItem);

	const swiperParams = {
		modules: [Autoplay, A11y, Controller, Lazy, EffectCoverflow, EffectFade],
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

	useEffect(() => {
		swiper1Ref.current.controller.control = swiper2Ref.current;
		swiper2Ref.current.controller.control = swiper1Ref.current;

		window.addEventListener("resize", () => {
			swiper1Ref.current.update();
			swiper2Ref.current.update();
		});
	}, []);

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
							>
								<span className="inline-block transition-[transform,opacity] opacity-0 translate-y-full -translate-x-[0.5em] rotate-45 scale-50 origin-top-left is-loaded:opacity-100 is-loaded:transform-none duration-[800ms] delay-1000">M</span>
								<span className="inline-block transition-[transform,opacity] opacity-0 translate-y-full -translate-x-[0.5em] rotate-45 scale-50 origin-top-left is-loaded:opacity-100 is-loaded:transform-none duration-[800ms] delay-[1020ms]">a</span>
								<span className="inline-block transition-[transform,opacity] opacity-0 translate-y-full -translate-x-[0.5em] rotate-45 scale-50 origin-top-left is-loaded:opacity-100 is-loaded:transform-none duration-[800ms] delay-[1040ms]">x</span>
								<span className="inline-block transition-[transform,opacity] opacity-0 translate-y-full -translate-x-[0.5em] rotate-45 scale-50 origin-top-left is-loaded:opacity-100 is-loaded:transform-none duration-[800ms] delay-[1060ms]">i</span>
								<span className="inline-block transition-[transform,opacity] opacity-0 translate-y-full -translate-x-[0.5em] rotate-45 scale-50 origin-top-left is-loaded:opacity-100 is-loaded:transform-none duration-[800ms] delay-[1080ms]">m</span>
								<span className="inline-block transition-[transform,opacity] opacity-0 translate-y-full -translate-x-[0.5em] rotate-45 scale-50 origin-top-left is-loaded:opacity-100 is-loaded:transform-none duration-[800ms] delay-[1100ms]">e</span>
							</span>{" "}
							<span
								className="text-primary inline-block -mx-1 px-1 pt-[0.1em] overflow-hidden"
							>
								<span className="inline-block transition-[transform,opacity] opacity-0 translate-y-full -translate-x-[0.5em] rotate-45 scale-50 origin-top-left is-loaded:opacity-100 is-loaded:transform-none duration-[800ms] delay-[1120ms]">D</span>
								<span className="inline-block transition-[transform,opacity] opacity-0 translate-y-full -translate-x-[0.5em] rotate-45 scale-50 origin-top-left is-loaded:opacity-100 is-loaded:transform-none duration-[800ms] delay-[1140ms]">o</span>
								<span className="inline-block transition-[transform,opacity] opacity-0 translate-y-full -translate-x-[0.5em] rotate-45 scale-50 origin-top-left is-loaded:opacity-100 is-loaded:transform-none duration-[800ms] delay-[1160ms]">r</span>
								<span className="inline-block transition-[transform,opacity] opacity-0 translate-y-full -translate-x-[0.5em] rotate-45 scale-50 origin-top-left is-loaded:opacity-100 is-loaded:transform-none duration-[800ms] delay-[1180ms]">é</span>
							</span>
						</div>
						<div className="inline-block subtitle pt-3 pl-1 overflow-hidden">
							<span className="inline-block transition-[transform,opacity] opacity-0 translate-y-full -translate-x-[0.5em] rotate-45 scale-50 origin-top-left is-loaded:opacity-100 is-loaded:transform-none duration-[800ms] delay-[1200ms]">Développeur Web</span>{" "}
							<span className="inline-block transition-[transform,opacity] opacity-0 translate-y-full -translate-x-[0.5em] rotate-45 scale-50 origin-top-left is-loaded:opacity-100 is-loaded:transform-none duration-[800ms] delay-[1220ms]"> - </span>{" "}
							<span className="inline-block text-primary transition-[transform,opacity] opacity-0 translate-y-full -translate-x-[0.5em] rotate-45 scale-50 origin-top-left is-loaded:opacity-100 is-loaded:transform-none duration-[800ms] delay-[1240ms]">Photographe</span>
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
						effect="fade"
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
				{/* Thumbnail navigation */}
				<div
					className="slider__nav z-[1] cursor-pointer transition translate-x-1/2 opacity-0 is-loaded:transform-none is-loaded:opacity-100 delay-[1500ms]"
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
