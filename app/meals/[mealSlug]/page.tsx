//다이나믹 라우팅
type Param = { mealSlug: string };

export default function MealDetailsPage({ params }: { params: Param }) {
  return <h1>{params.mealSlug}</h1>;
}
