import Link from "next/link";

import classes from "./page.module.scss";
import MealGrid from "@/app/meals/_component/meal-grid";
import { getMeal } from "@/lib/meals";

export default async function MealsPage() {
  const meals = await getMeal();
  console.log(meals);
  return (
    <>
      <header className={classes.header}></header>{" "}
      <main>
        <MealGrid meals={meals} />
      </main>
    </>
  );
}
