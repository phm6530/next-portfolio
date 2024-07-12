import { getMealalone } from "@/lib/meals";
import classes from "./page.module.scss";
import Image from "next/image";
import { notFound } from "next/navigation";
//다이나믹 라우팅
interface Param {
  mealSlug: string;
}

export async function generateMetadata({ params }: { params: Param }) {
  const meal = getMealalone(params.mealSlug);

  if (!meal) {
    notFound();
  }
  return {
    title: meal.title,
  };
}

export default function MealDetailsPage({ params }: { params: Param }) {
  const meal = getMealalone(params.mealSlug);

  if (!meal) notFound();

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      {params.mealSlug}
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${"Email"}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
