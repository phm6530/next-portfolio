"use client";

import ImagePicker from "@/app/meals/_component/image-picker/imagePicker";
import classes from "./page.module.scss";
import shareMeal from "@/lib/action";
import { FormEvent } from "react";
import { PostMealProps } from "@/app/meals/MealsType";

export default function ShareMealPage() {
  /** use server는 서버에서만 실행되게 보장하는 기법
   * FormEventHadnelr - form 객체를 컨트롤하는 타입 - 즉 핸들러, 함수를 말함
   * FormEvent - form 객체 타입을 이야기함 - 매개변수
   *
   */

  const CheckType = (formData: FormData) => {
    return {
      chk<T extends string | File>(name: string): T {
        const type = formData.get(name);
        if (typeof type === "string" && name !== "image") {
          return type as T;
        } else if (name === "image" && type instanceof File) {
          return type as T;
        } else {
          throw new Error(`${name} 맞지 않는 타입`) as never;
        }
      },
    };
  };

  const submitTypeCheckHandler: React.FormEventHandler<
    HTMLFormElement
  > = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formDataTypeCheck = CheckType(formData);
    try {
      const meal: PostMealProps = {
        title: formDataTypeCheck.chk<string>("title"),
        summary: formDataTypeCheck.chk<string>("summary"),
        instructions: formDataTypeCheck.chk<string>("instructions"),
        image: formDataTypeCheck.chk<File>("image"),
        creator: formDataTypeCheck.chk<string>("name"),
        creator_email: formDataTypeCheck.chk<string>("email"),
      };

      await shareMeal(meal);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} onSubmit={submitTypeCheckHandler}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker label="img" name="upload-img" />
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}
