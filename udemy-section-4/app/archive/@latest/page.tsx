import { getLatestNews } from "@/app/lib/news";
import NewsList from "@/component/newslist/news-list";

export default function page() {
  const news = getLatestNews();

  return (
    <>
      <h1>Latest News Page</h1>
      <NewsList news={news} />
    </>
  );
}
