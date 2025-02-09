import Header from "./partials/Header.tsx";
import Footer from "./partials/Footer.tsx";
import { FC, ReactElement } from "react";

type LayoutProps = {
  children: ReactElement;
};

const DefaultLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
