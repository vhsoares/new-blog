import { useTranslations } from "next-intl";

import Link from "next/link";
import styles from "./header.module.scss";
import Button from "../button/button";
import LanguageToggler from "../language-toggler";

type HeaderType = {
  openContactModal: Function;
};

const Header = ({ openContactModal }: HeaderType) => {
  
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
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <h1>VhSoares</h1>
        </Link>
        <nav>
          {navigationLinks.map(({ title, link }) => (
            <Link className={styles.link} href={link} key={styles.link}>
              {title}
            </Link>
          ))}
        </nav>
        <Button
          href="/contato"
          title={t("hire-me")}
          onClick={() => openContactModal(true)}
        />
        <LanguageToggler />
      </div>
    </header>
  );
};

export default Header;
