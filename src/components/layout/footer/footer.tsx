import Link from "next/link";
import style from "./footer.module.scss";
import { GrGithub, GrLinkedinOption, GrInstagram } from "react-icons/gr";
import {RiTwitterXLine} from "react-icons/ri"

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p className={style.disclaimer}>Todos os direitos Reservados</p>
      <div className={style.corner}>
        <div className={style.content}>
          <div className={style.social}>
            <Link href="github.com" className={style.link}>
              <GrInstagram className={style.icon} />
              <span>Instagram</span>
            </Link>
            <Link href="github.com" className={style.link}>
              <RiTwitterXLine className={style.icon} />
              <span>X</span>
            </Link>
            <Link href="github.com" className={style.link}>
              <GrGithub className={style.icon} />
              <span>Github</span>
            </Link>
            <Link href="github.com" className={style.link}>
              <GrLinkedinOption className={style.icon} />
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
