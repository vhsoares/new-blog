import ReactNode from "react";

import Header from "@/components/layout/header/header";
import Footer from "./footer/footer";
import Modal from "../contact-form";
import { useModal } from "@/hooks/modal";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { modalVisibility, setModalVisibility } = useModal();
  return (
    <>
      <Header openContactModal={setModalVisibility} />
      {modalVisibility && (
        <Modal closeModal={() => setModalVisibility(false)} />
      )}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
