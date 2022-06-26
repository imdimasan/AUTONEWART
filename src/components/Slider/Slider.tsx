import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import classes from "./Slider.module.scss";
import React from "react";

interface ISlides {
  slides: {
    image: string;
    title?: string;
    link: string;
    color: string;
    alt: string;
  }[];
  perView: number;
}

const Slider = ({ slides, perView = 1 }: ISlides) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      className={classes.slider}
      grabCursor={true}
      slidesPerView={perView}
      navigation
      pagination={{ clickable: true }}
    >
      {slides.map(({ image, color, title, link, alt }, index) => (
        <SwiperSlide key={index}>
          <div className={classes.image} style={{ color: color }}>
            <Link href={link}>
              <a>
                <Image
                  src={image}
                  width={30}
                  height={30}
                  layout="responsive"
                  quality={80}
                  alt={alt}
                />
              </a>
            </Link>
          </div>
          {title && (
            <div className={classes.title}>
              <span>{title}</span>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
