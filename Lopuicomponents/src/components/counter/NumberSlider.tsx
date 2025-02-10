import React, { useEffect } from "react";
import styles from "./Counter.module.scss";
import gsap from "gsap";

const NumberSlider = (props: {
  digitToDisplay: string;
  sliderIndex: number;
}) => {
  const sliderRef = React.createRef<HTMLSpanElement>();
  const characterRef = React.createRef<HTMLSpanElement>();
  const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    const characterHeight = characterRef.current?.clientHeight || 0;
    const parentElement = sliderRef.current?.closest(`.${styles.counter}`);
    const totalDigits = parentElement?.children.length || 1;
    const invertedIndex = totalDigits - props.sliderIndex - 1;

    gsap.fromTo(
      sliderRef.current,
      {
        y: 0,
      },
      {
        y: -parseInt(props.digitToDisplay) * characterHeight,
        duration: 2,
        delay: invertedIndex * 0.4,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <span className={styles["counter-digit-slider"]} ref={sliderRef}>
      {numArray.map((num, index) => {
        return (
          <span
            className={styles["number-column"]}
            key={"digit" + index}
            ref={characterRef}
          >
            {num}
          </span>
        );
      })}
    </span>
  );
};

export default NumberSlider;
