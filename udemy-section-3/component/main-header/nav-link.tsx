"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MainHeader.module.scss";

type paths = { [key: string]: string }[];

export default function Nav({ paths }: { paths: paths }) {
  const path = usePathname();
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          {paths.map((link) => {
            return (
              <li key={`link-${link.pathName}`}>
                <Link
                  href={link.path}
                  className={
                    path.startsWith(link.path) ? styles.active : undefined
                  }
                >
                  {link.pathName}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
