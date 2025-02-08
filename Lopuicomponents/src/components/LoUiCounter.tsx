import React, { useEffect, useRef, useState } from "react";
import styles from "./LoUiCounter.module.scss";
import gsap from "gsap";

type Props = {
  children: React.ReactNode;
  //   direction: "up" | "down";
};

const LoUiCounter = (props: Props) => {
  const { children } = props;
  const direction = "up"; // default direction
  const [digitHeight, setDigitHeight] = useState<number>(0);

  const digitsRef = useRef<(HTMLDivElement | null)[]>([]);
  const number = children as string;

  // Measure the original height of a digit (assuming each digit has a <span>)

  useEffect(() => {
    const digits = digitsRef.current;

    console.log("digits >>", digits[0]?.children);
    let digitHeight = 0;
    if (digits[0]) {
      const spanElement = digits[0].querySelector("span");
      if (spanElement) {
        digitHeight = spanElement.getBoundingClientRect().height;
        console.log("Original digit height:", digitHeight);
        setDigitHeight(digitHeight);
      }
    }

    // digits.forEach((digit, index) => {
    //   if (!digit) return;
    //   const currentDigit = parseInt(digit.textContent!, 10);
    //   const targetDigit = parseInt(number[index], 10);
    //   console.log(
    //     "currentDigit >>",
    //     currentDigit,
    //     "targetDigit >>",
    //     targetDigit
    //   );
    //   if (currentDigit !== targetDigit) {
    //     const diff = (targetDigit - currentDigit + 10) % 10;
    //     const offset = direction === "up" ? -diff * 10 : diff * 10;

    //     gsap.fromTo(
    //       digit,
    //       { y: 0 },
    //       {
    //         y: `${offset}%`,
    //         duration: 0.5,
    //         ease: "power2.out",
    //         onComplete: () => {
    //           digit.textContent = targetDigit.toString();
    //           gsap.set(digit, { y: 0 });
    //         },
    //       }
    //     );
    //   }
    // });
  }, [number, direction]);

  return (
    <div
      className="flex flex-row  border border-black overflow-hidden"
      style={{ height: digitHeight || "auto" }}
    >
      {number?.split("").map((digit, index) => (
        <div
          key={index}
          ref={(el) => {
            digitsRef.current[index] = el;
          }}
          className="flex flex-col"
        >
          <NumberInColumn>{digit}</NumberInColumn>
        </div>
      ))}
    </div>
  );
};

export default LoUiCounter;

const NumberInColumn = (props: Props) => {
  // const { children } = props;

  return (
    <>
      {Array?.from({ length: 10 }, (_, i) => i).map((i) => (
        <span className="flex flex-col">{i.toString()}</span>
      ))}
    </>
  );
};
