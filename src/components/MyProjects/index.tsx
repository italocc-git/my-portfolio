import {
  MyProjectsContainer,
  CarroselAntd,
  CarrouselArrow,
  MyProjectItem,
  MyProjectTitle,
  MyProjectSubtitle,
  MyProjectContent,
  MyProjectExternalButton,
} from "./styles";
import { data } from "./data";
import {
  GithubOutlined,
  IeOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";
import { FormattedMessage } from "react-intl";

export function MyProjects() {
  const PrevArrow = (props: any) => {
    const { onClick } = props;

    return (
      <CarrouselArrow left="20px">
        <LeftCircleOutlined onClick={onClick} />
      </CarrouselArrow>
    );
  };
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <CarrouselArrow right="20px">
        <RightCircleOutlined onClick={onClick} />
      </CarrouselArrow>
    );
  };

  return (
    <MyProjectsContainer>
      <h1 id="myProjects">
        <FormattedMessage id="my_projects" />
      </h1>
      <CarroselAntd
        arrows={true}
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
        infinite
        speed={1000}
      >
        {data.map((item) => (
          <MyProjectItem>
            <MyProjectTitle>
              {" "}
              <FormattedMessage id={item.title} />
            </MyProjectTitle>
            <MyProjectSubtitle>
              <FormattedMessage id="about" />
            </MyProjectSubtitle>
            <MyProjectContent>
              <FormattedMessage id={item.about} />
              <div className="contentLayout">
                <MyProjectExternalButton href={item.linkGithub}>
                  <FormattedMessage id="access_repository" />
                  <GithubOutlined />
                </MyProjectExternalButton>
                {item.linkPublicate && (
                  <MyProjectExternalButton href={item.linkPublicate}>
                    <FormattedMessage id="access_website" />
                    <IeOutlined />
                  </MyProjectExternalButton>
                )}
              </div>
            </MyProjectContent>

            <div className="contentLayout">
              <div>
                {item.demonstration && (
                  <img src={item.demonstration} alt={item.title} />
                )}
              </div>
              <div>
                <MyProjectSubtitle>
                  <FormattedMessage id="libraries_used" />{" "}
                </MyProjectSubtitle>
                {item.technologies.map((techItem, index) => (
                  <Tag
                    style={{ margin: "5px 10px" }}
                    color={index % 2 ? "green" : "cyan"}
                  >
                    {techItem}
                  </Tag>
                ))}
              </div>
            </div>
          </MyProjectItem>
        ))}
      </CarroselAntd>
    </MyProjectsContainer>
  );
}
