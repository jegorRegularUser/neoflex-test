import { Link } from "react-router-dom";
import SvgIcon from "../../assets/svg/SvgIcon";
import { useTranslation } from "react-i18next";
import "./footer.css";
import { useEffect, useState } from "react";
import i18n from "../../i18n";
export default function Footer() {
  const { t } = useTranslation();
  const [isFixed, setIsFixed] = useState(false);
  const changeLan = (lan: string) => {
    i18n.changeLanguage(lan);
  };
  useEffect(() => {
    const contentHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    setIsFixed(contentHeight <= windowHeight);
  }, []);

  return (
    <div className={isFixed ? "footer fixed" : "footer"}>
      <Link to="/">
        <SvgIcon icon="logo" width={85} height={30} />
      </Link>
      <div className="links">
        <span>{t("footer.favorite")}</span>
        <span>{t("footer.cart")}</span>
        <span>{t("footer.contacts")}</span>
      </div>
      <div className="lang">
        <span>{t("footer.terms")}</span>
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
            }}>
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
            }}>
            Eng
          </button>
        </div>
      </div>
      <div className="social">
        <SvgIcon icon="vk" width={30} height={30} />
        <SvgIcon icon="telegram" width={30} height={30} />
        <SvgIcon icon="whatsapp" width={30} height={30} />
      </div>
    </div>
  );
}
