import { AboutMeContent } from "./styles";
import { FormattedMessage } from "react-intl";
type AboutMeTypes = {
  id: string;
};

export function AboutMe({ id }: AboutMeTypes) {
  return (
    <AboutMeContent id={id}>
      <h1>
        <FormattedMessage id="about_me" />
      </h1>
      <p>
        <FormattedMessage id="about_me_description" />
      </p>
    </AboutMeContent>
  );
}
