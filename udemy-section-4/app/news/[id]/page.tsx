import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "../../dummy-js";
import { useRouter } from "next/router";

interface NewsProps {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
}

//동적 메타데이타
export function generateMetadata({ params }: { params: NewsProps }) {
  const decodedId = decodeURIComponent(params.id); // URL 디코딩

  const news: NewsProps = DUMMY_NEWS.find((news) => news.slug === decodedId)!;

  if (!news) {
    notFound();
  }

  return {
    title: news.title,
    openGraph: {
      title: news.title,
      description: news.content.substring(0, 100),
      images: [
        {
          url: `/images/news/${news.image}`,
          alt: news.title,
        },
      ],
      type: "article",
      article: {
        publishedTime: news.date,
      },
    },
  };
}

export default function newDetail({ params }: { params: { id: string } }) {
  const decodedId = decodeURIComponent(params.id); // URL 디코딩

  const news: NewsProps = DUMMY_NEWS.find((news) => news.slug === decodedId)!;
  if (!news) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${news.image}`} alt={news.title} />
        <h1>News Detail Page</h1>
        <time>{news.date}</time>
      </header>
      <p>News Id : {news.id}</p>
      <p>News Id : {news.content}</p>
    </article>
  );
}
