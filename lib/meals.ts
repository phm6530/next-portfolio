import { MealsItemProps } from "@/app/meals/MealsType";
import sql from "better-sqlite3";

const db = sql("meals.db");
export async function getMeal(): Promise<MealsItemProps[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error("error Message - ");

  return db.prepare("SELECT * FROM meals").all() as MealsItemProps[];
}

export function getMealalone(slug: string): MealsItemProps {
  return db
    .prepare("SELECT * from meals WHERE slug = ?")
    .get(slug) as MealsItemProps;
}
