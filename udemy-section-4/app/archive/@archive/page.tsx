import { getAvailableNewsYears } from "@/app/lib/news";
import Link from "next/link";

export default function page() {
  const link = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {link.map((link) => {
            return (
              <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
