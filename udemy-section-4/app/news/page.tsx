import Link from "next/link";
import { DUMMY_NEWS } from "../dummy-js";
import NewsList from "@/component/newslist/news-list";
export default function page() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
