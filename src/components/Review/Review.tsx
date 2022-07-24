import { Rating } from "@mui/material";
import Image from "next/image";
import { IReviews } from "./interfaces";
import classes from "./Reviews.module.scss";

const Review = ({ name, rating, from, avatar, review }: IReviews) => (
  <div className={classes.wrapper}>
    <div className={classes.header}>
      <Image
        alt={`Отзыв на AutoNewArt от ${name}`}
        src={avatar}
        className={classes.avatar}
        layout="fixed"
        width={40}
        height={40}
        placeholder="blur"
      />
      <div className={classes.overall}>
        <span className={classes.name}>{name}</span>
        <Rating name="read-only" value={rating} readOnly size="small" />
        <span className={classes.from}>{`Отзыв на ${from}`}</span>
      </div>
    </div>
    <div className={classes.review}>{review}</div>
  </div>
);
export default Review;
