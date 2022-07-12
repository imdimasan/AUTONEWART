import Image from "next/image";
import Link from "next/link";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./Slider.module.scss";

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
