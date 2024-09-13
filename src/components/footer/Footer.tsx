import { Link } from "react-router-dom";
import SvgIcon from "../../assets/svg/SvgIcon";
import { useTranslation } from "react-i18next";
import "./footer.css";
import i18n from "../../i18n";

export default function Footer() {
  const { t } = useTranslation();
  const changeLan = (lan: string) => {
    i18n.changeLanguage(lan);
  };

  return (
    <div className="footer">
      <Link to="/">
        <SvgIcon icon="logo" width={85} height={30} />
      </Link>
      <div className="links">
        <Link to="/">
          <span className="link">{t("footer.favorite")}</span>
        </Link>
        <Link to="/">
          <span className="link">{t("footer.cart")}</span>
        </Link>
        <Link to="/">
          <span className="link">{t("footer.contacts")}</span>
        </Link>
      </div>
      <div className="lang">
        <Link to="/">
          <span className="link">{t("footer.terms")}</span>
        </Link>
        <div className="lang-swapper">
          <SvgIcon icon="lang" />
          <button
            style={{
              color: `${
                i18n.language === "ru" ? "var(--orange-font)" : "black"
              }`,
            }}
            onClick={() => {
              changeLan("ru");
            }}
          >
            Рус
          </button>
          <button
            style={{
              color: `${
                i18n.language === "en" ? "var(--orange-font)" : "black"
              }`,
            }}
            onClick={() => {
              changeLan("en");
            }}
          >
            Eng
          </button>
        </div>
      </div>
      <div className="social">
        <a href="https://vk.com">
          <SvgIcon icon="vk" width={30} height={30} />
        </a>
        <a href="https://vk.com">
          <SvgIcon icon="telegram" width={30} height={30} />
        </a>
        <a href="https://vk.com">
          <SvgIcon icon="whatsapp" width={30} height={30} />
        </a>
      </div>
    </div>
  );
}
