import { useTranslations } from "next-intl";

import Link from "next/link";
import styles from "./header.module.scss";
import Button from "../button/button";
import LanguageToggler from "../language-toggler";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

type HeaderType = {
  openContactModal: Function;
};

const Header = ({ openContactModal }: HeaderType) => {
  const [openHeader, setOpenHeader] = useState(false);

  const t = useTranslations("Header");
  const navigationLinks = [
    {
      title: t("about"),
      link: "/about",
    },
    {
      title: t("blog"),
      link: "/blog",
    },
    {
      title: t("projects"),
      link: "/projects",
    },
  ];

  return (
    <header
      className={
        openHeader ? `${styles.header} ${styles.active}` : styles.header
      }
    >
      <div className={styles.mobile}>
        <Link
          href="/"
          style={{ textDecoration: "none" }}
          onClick={() => setOpenHeader(false)}
        >
          <h1>VhSoares</h1>
        </Link>

        <button onClick={() => setOpenHeader(true)}>
          <AiOutlineMenu />
        </button>
      </div>

      <div className={styles.container}>
        <Link
          href="/"
          style={{ textDecoration: "none" }}
          onClick={() => setOpenHeader(false)}
        >
          <h1>VhSoares</h1>
        </Link>
        <nav>
          {navigationLinks.map(({ title, link }) => (
            <Link
              className={styles.link}
              href={link}
              key={styles.link}
              onClick={() => setOpenHeader(false)}
            >
              {title}
            </Link>
          ))}
        </nav>
        <Button
          href="/contato"
          title={t("hire-me")}
          onClick={() => {
            openContactModal(true);
            setOpenHeader(false);
          }}
        />
        <LanguageToggler />
      </div>
      <div
        className={
          openHeader ? `${styles.active} ${styles.close}` : styles.close
        }
        onClick={() => setOpenHeader(false)}
      ></div>
    </header>
  );
};

export default Header;
