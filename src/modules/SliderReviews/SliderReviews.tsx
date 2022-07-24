import { Review } from "components";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./SliderReviews.module.scss";

interface ISlides {
  slides: {
    name: string;
    rating: number;
    from: string;
    avatar: string;
    review: string;
  }[];
  perView?: number;
}

const SliderReviews = ({ slides, perView = 1 }: ISlides) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      className={classes.slider}
      grabCursor={true}
      slidesPerView={perView}
      pagination={{ clickable: true }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className={classes.slide}>
          <Review
            name={slide.name}
            rating={slide.rating}
            avatar={slide.avatar}
            from={slide.from}
            review={slide.review}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderReviews;
