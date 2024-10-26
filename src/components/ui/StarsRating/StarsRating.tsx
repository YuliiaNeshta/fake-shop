import { FC } from "react";
import { Rating } from "../../../types/productTypes.ts";
import Star from "../../../assets/svg/star.svg";
import styles from "./styles.module.css";
import classNames from "classnames";

const starsAmount = [1, 2, 3, 4, 5];

interface StarsRatingProps {
  rating: Rating;
}

const StarsRating: FC<StarsRatingProps> = ({ rating }) => {
  return (
    <div className={styles.stars}>
      {starsAmount.map((star, index) => (
        <div
          key={star}
          className={classNames(styles.star, {
            [styles.orange]: rating.rate > index,
            [styles.grey]: rating.rate <= index,
          })}
        >
          <Star />
        </div>
      ))}
      <p className={styles.ratings}>{rating.count} ratings</p>
    </div>
  );
};

export default StarsRating;
