import React from "react";
import { Nav } from "./Nav";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="container mx-auto">{children}</div>
    </>
  );
};
