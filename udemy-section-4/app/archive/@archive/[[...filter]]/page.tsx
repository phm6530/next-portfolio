import { DUMMY_NEWS } from "@/app/dummy-js";
import { getNewsForYear } from "@/app/lib/news";
import NewsList from "@/component/newslist/news-list";

export default function YearFilter({ params }: { params: { filter: number } }) {
  const news = getNewsForYear(params.filter);
  return (
    <>
      <NewsList news={news} />
    </>
  );
}
