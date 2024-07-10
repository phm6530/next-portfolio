import { ReactNode, Suspense } from "react";
import classes from "./LoadingPage.module.scss";

type PageProps = string;

interface LoaindgProps {
  page: PageProps;
  children: ReactNode;
}

function LoadingText({ page }: { page: PageProps }) {
  return <p className={classes.loading}>{page} Loading....</p>;
}

export default function LoadingPage({ page, children }: LoaindgProps) {
  return <Suspense fallback={<LoadingText page={page} />}>{children}</Suspense>;
}
