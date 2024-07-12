"use client";

import { ChangeEvent, useRef, useState } from "react";
import classes from "./ImagePicker.module.scss";
import Image from "next/image";

interface ImagePickerProps {
  label: string;
  name: string;
}
export default function ImagePicker({ label, name }: ImagePickerProps) {
  const [pickImg, setPickImg] = useState<string | null>(null);
  const ref = useRef<HTMLInputElement>(null);

  //Img Handelr
  const imgHandler = () => {
    if (ref.current) ref.current.click();
  };

  //미리보기
  const handleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    if (target.files) {
      const imgFile = target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(imgFile);

      reader.onload = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setPickImg(result);
        }
      };
    }
  };

  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!!pickImg ? (
            <Image src={pickImg} alt="selected Image" fill />
          ) : (
            <p>No Image pikced</p>
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name={name}
          ref={ref}
          onChange={handleChangeHandler}
          required //필수
        />
        <button className={classes.button} type="button" onClick={imgHandler}>
          pick an image
        </button>
      </div>
    </div>
  );
}
