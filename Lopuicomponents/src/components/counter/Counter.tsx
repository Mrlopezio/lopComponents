import React, { useEffect } from "react";
import styles from "./Counter.module.scss";
import NumberSlider from "./NumberSlider";

const Counter = (props: { number: number }) => {
  const { number } = props;
  const digits: string[] = number.toString().split("");

  return (
    <span className={styles["counter"]}>
      {digits.map((digit: string, numberIndex) => (
        <React.Fragment key={"counter" + numberIndex}>
          <span className={styles["counter-digit"]}>
            <span style={{ visibility: "hidden" }}>9</span>
            <NumberSlider digitToDisplay={digit} sliderIndex={numberIndex} />
          </span>
        </React.Fragment>
      ))}
    </span>
  );
};

export default Counter;
