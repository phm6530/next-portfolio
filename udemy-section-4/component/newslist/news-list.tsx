import Link from "next/link";

interface NewsProps {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
}

export default function NewsList({ news }: { news: NewsProps[] }) {
  return (
    <>
      <ul className="news-list">
        {news.map((news) => {
          return (
            <li key={news.id}>
              <Link href={`news/${news.slug}`}>
                <img src={`/images/news/${news.image}`} alt={news.title} />
                {news.slug}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
