"use server";
import { PostMealProps } from "@/app/meals/MealsType";
import { saveMeal } from "@/lib/meals";
import { redirect } from "next/navigation";

const shareMeal = async (formData: FormData) => {
  const meal: PostMealProps = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
    image: formData.get("upload-img") as File,
  };

  await saveMeal(meal);
  redirect("/meals");
};

export default shareMeal;
