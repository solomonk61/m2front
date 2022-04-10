import React, { useState } from "react";
import { Header, Footer, AuthModal } from "@components";

type ContainerProps = {
  auth?: boolean;
  onAuthCancel?: () => void;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  auth = false,
  onAuthCancel,
}) => {
  // const [authModalVisible, setauthModalVisible] = useState(false);
  return (
    <>
      {auth && onAuthCancel && <AuthModal onCancel={onAuthCancel} />}
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto max-w-6xl">{children}</div>
        <Footer />
      </div>
    </>
  );
};
