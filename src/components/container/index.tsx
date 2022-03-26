import React from "react";
import { Header, Footer } from "@components";

export const Container: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto max-w-6xl">{children}</div>
      <Footer />
    </div>
  );
};
