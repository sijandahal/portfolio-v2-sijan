"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

import "./Slider.css"

export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    // Uncomment the following code if you decide to use Lenis for smooth scrolling.
    // const lenis = new Lenis();

    // function raf(time)    {
    //   lenis.raf(time);
    //   requestAnimationFrame(raf);
    // }

    // requestAnimationFrame(raf);
  }, []);

  return (
    <section className="overflow-hidden max-w-full">
      <div ref={container}>
        <Slide
          direction={"left"}
          left={"0%"}
          progress={scrollYProgress}
          texts={["FrontEnd Developer Software Engineer"]}
        />
        <StaticPhrase text={" Want to Collaborate?"} />
        <Slide
          direction={"left"}
          left={"0%"}
          progress={scrollYProgress}
          texts={["Problem Solver Tech Enthusiast Lifelong Learner"]}
        />
      </div>
    </section>
  );
}

const Slide = ({ direction, left, progress, texts }) => {
  const translateDirection = direction === "left" ? -1 : 1;
  const translateX = useTransform(
    progress,
    [0, 1],
    [150 * translateDirection, -150 * translateDirection]
  );

  return (
    <motion.div
      style={{ x: translateX, left }}
      className="relative flex whitespace-nowrap opacity-80 uppercase font-bold"
    >
      {texts.map((text, index) => (
        <Phrase key={index} text={text} />
      ))}
    </motion.div>
  );
};

const StaticPhrase = ({ text }) => {
  return (
    <div className="flex justify-center items-center my-4">
      <p className="my-16 text-white phrase leading-normal">
        {text.split(/(collaborate)/).map((part, index) =>
          index === 1 ? (
            <span key={index} className={`text-left`}>
              {part}
            </span>
          ) : (
            part
          )
        )}
      </p>
    </div>
  );
};

const Phrase = ({ text }) => {
  // Split the text if it includes "collaborate"
  const parts = text.split(/(collaborate)/);

  return (
    <div className="flex gap-5 items-center">
      <p className="slider__title text-gray-700">
        {parts.map((part, index) =>
          index === 1 ? ( // **Check if it's the "collaborate" part**
            <span key={index}>
              {" " /* **Add a space before "collaborate"** */}
              {part}
            </span>
          ) : (
            part
          )
        )}
      </p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden"></span>
    </div>
  );
};
