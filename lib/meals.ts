import { MealsItemProps } from "@/app/meals/MealsType";
import sql from "better-sqlite3";

const db = sql("meals.db");
export async function getMeal(): Promise<MealsItemProps[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  throw new Error("error Message - ");

  return db.prepare("SELECT * FROM meals").all() as MealsItemProps[];
}
