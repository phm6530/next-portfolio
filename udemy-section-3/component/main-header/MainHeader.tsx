import Link from "next/link";
import logo from "@/assets/logo.png";
import styles from "./MainHeader.module.scss";
import Image from "next/image";
import MainHeaderBackground from "@/component/main-header/MainHeaderBackground";
import Nav from "@/component/main-header/nav-link";

export default function MainHeader() {
  /** 중첩 라우트일 경우 startWith를 이용해서 맨앞 Path를 따오면됨. */

  const pathLink = [
    { path: "/meals", pathName: "Browser Melas" },
    { path: "/community", pathName: "comunity" },
  ];

  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href={"/"}>
          <Image src={logo} alt="logo" priority />
          NextLevel Food
        </Link>

        <Nav paths={pathLink} />
      </header>
    </>
  );
}
