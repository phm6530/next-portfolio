import { ReactNode } from "react";
import "./globals.css";
import Header from "../component/header/page";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
