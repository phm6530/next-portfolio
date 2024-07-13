import NewsList from "@/component/newslist/news-list";
import { getLatestNews } from "@/app/lib/news";
export default function Default() {
  const news = getLatestNews();
  return (
    <>
      <h2>Lastest News</h2> <NewsList news={news} />
    </>
  );
}
