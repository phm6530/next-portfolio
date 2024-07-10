import { ReactNode } from "react";
import Link from "next/link";

export default function MealLayout({ children }: { children: ReactNode }) {
  // 현재 페이지의 경로 가져오기

  return (
    <>
      <h1>Meal Layout</h1>
      <Link href={`/meals/share`}>Go to Share Page</Link>
      {children}
    </>
  );
}
