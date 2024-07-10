"use client";

import { useEffect, useState } from "react";
import classes from "./ImageSlider.module.scss";
import logo from "@/assets/logo.png";
import curry from "@/assets/curry.jpg";
import dumplings from "@/assets/dumplings.jpg";
import Image from "next/image";

export default function ImageSlider() {
  const [curPage, setCurPage] = useState<number>(0);

  const slideContents = [
    { src: curry, alt: "curry" },
    { src: logo, alt: "img" },
    { src: dumplings, alt: "img" },
  ];

  useEffect(() => {
    const slider = setInterval(() => {
      setCurPage((prev) => (slideContents.length - 1 <= prev ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(slider);
  }, [slideContents.length]);

  return (
    <div className={classes.slideshow}>
      {slideContents.map((slide, idx) => (
        <Image
          src={slide.src}
          alt={slide.alt}
          priority
          key={idx}
          className={idx === curPage ? classes.active : ""}
        />
      ))}
    </div>
  );
}
