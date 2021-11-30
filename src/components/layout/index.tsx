import Footer from "@footer/index";
import { Header } from "@header/index";
import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
