import { ReactNode } from "react";

export default function MealLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1>Meal Layout</h1>
      {children}
    </>
  );
}
