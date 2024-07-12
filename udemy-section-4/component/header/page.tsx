import Link from "next/link";
export default function Header() {
  return (
    <>
      <Link href={"/"}>Home</Link>
      <Link href={"/news"}>news</Link>
      <Link href={"/archive"}>archive</Link>
    </>
  );
}
