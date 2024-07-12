import classes from "./page.module.scss";
import MealGrid from "@/app/meals/_component/meal-grid";
import { getMeal } from "@/lib/meals";
import LoadingPage from "@/component/loading/LoadingPage";

export const metadata = {
  title: "메타데이터",
};

async function MealList() {
  const meals = await getMeal();
  return <MealGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}></header>{" "}
      <main>
        <LoadingPage page="meal">
          <MealList />
        </LoadingPage>
      </main>
    </>
  );
}
