import { HeaderContainer, HeaderContent } from "./styles";
import BRflag from "../../assets/flags/br.png";
import USflag from "../../assets/flags/usa.png";
import { useIntl as useReactIntl } from "react-intl";
import { useIntl } from "../../hooks/intl";
import { FormattedMessage } from "react-intl";
export function Header() {
  const intl = {
    ...useIntl(),
    ...useReactIntl(),
  };

  const handleLanguage = (locale: "pt-BR" | "en-US") => {
    intl.setLocale(locale);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <ul>
          <li onClick={() => handleLanguage("pt-BR")}>
            <img src={BRflag} alt="br-flag" />
          </li>
          <li onClick={() => handleLanguage("en-US")}>
            <img src={USflag} alt="us-flag" />
          </li>
        </ul>
        <span>
          <a href="#me">Italo Costa</a>
        </span>
        <ul>
          <li>
            <a href="#aboutMe">
              <FormattedMessage id="about_me" />
            </a>
          </li>
          <li>
            <a href="#myProjects">
              <FormattedMessage id="my_projects" />
            </a>
          </li>
          <li>
            <a href="#myGoals">
              <FormattedMessage id="my_goals" />{" "}
            </a>
          </li>
        </ul>
      </HeaderContent>
    </HeaderContainer>
  );
}
