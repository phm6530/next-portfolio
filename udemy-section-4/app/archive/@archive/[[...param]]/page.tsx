import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/app/lib/news";
import NewsList from "@/component/newslist/news-list";
import Link from "next/link";

export default function YearFilter({
  params,
}: {
  params: { param: number[] };
}) {
  const filter = params.param;
  const year: number = filter && filter[0];
  const month: number = filter && filter[1];

  let news = getNewsForYear(2024);
  let link = getAvailableNewsYears(); //년

  if (year) {
    link = getAvailableNewsMonths(year);
    news = getNewsForYear(year);
  }

  if (year && month) {
    news = getNewsForYearAndMonth(year, month);
  }

  let newsContents = <NewsList news={news} />;

  if (news && news.length > 0) {
    newsContents = <NewsList news={news} />;
  }

  if (year && month && !getAvailableNewsMonths(year).includes(+month)) {
    throw new Error("No Found Data");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {link.map((link) => {
              const herf = year
                ? `/archive/${year}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={herf}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContents}
    </>
  );
}
