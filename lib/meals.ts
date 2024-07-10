import { GetMealProps } from "@/app/meals/MealsType";
import sql from "better-sqlite3";

const db = sql("meals.db");
export async function getMeal(): Promise<GetMealProps[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error("error Message - ");

  return db.prepare("SELECT * FROM meals").all() as GetMealProps[];
}

export function getMealalone(slug: string): GetMealProps {
  return db
    .prepare("SELECT * from meals WHERE slug = ?")
    .get(slug) as GetMealProps;
}
