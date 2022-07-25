import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between">
        <Header>{children}</Header>
        <Footer />
      </div>
    </>
  );
}
