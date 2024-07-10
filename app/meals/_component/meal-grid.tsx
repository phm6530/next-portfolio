import MealItem from "@/app/meals/_component/meal-item";
import classes from "./meal-grid.module.scss";
import { MealsItemProps } from "@/app/meals/MealsType";

type MealGridProps = {
  meals: MealsItemProps[];
};

export default function MealGrid({ meals }: MealGridProps) {
  return (
    <>
      <ul className={classes.meals}>
        {meals.map((meal, idx) => {
          return (
            <li key={idx}>
              <MealItem {...meal} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
