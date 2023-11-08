import {
  MyProjectsContainer,
  MyProjectsTitle,
  CarroselAntd,
  CarrouselArrow,
  MyProjectItem,
  MyProjectTitle,
  MyProjectContent,
  MyProjectContentDescription,
  MyProjectExternalButton,
  MyProjectTechnologies,
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
type MyProjectsProps = {
  id: string;
}
export function MyProjects({id} : MyProjectsProps) {
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
    <MyProjectsContainer id={id}>
      <MyProjectsTitle >
        <FormattedMessage id="my_projects" />
      </MyProjectsTitle>
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
              <FormattedMessage id={item.title} />
            </MyProjectTitle>
            <h1>
              <FormattedMessage id="about" />
            </h1>
            <MyProjectContent>
              <MyProjectContentDescription>
                <FormattedMessage id={item.about} />
              </MyProjectContentDescription>
              <div className="contentLayout">
                <MyProjectExternalButton target='_blank'  href={item.linkGithub}>
                  <FormattedMessage id="access_repository" />
                  <GithubOutlined />
                </MyProjectExternalButton>
                {item.linkPublicate && (
                  <MyProjectExternalButton target='_blank' href={item.linkPublicate}>
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
              <MyProjectTechnologies>
                <h1>
                  <FormattedMessage id="libraries_used" />{" "}
                </h1>
                
                {item.technologies.map((techItem, index) => (
                  <Tag
                    style={{ margin: "5px 10px" }}
                    color={index % 2 ? "green" : "cyan"}
                  >
                    {techItem}
                  </Tag>
                ))}
                
                <div className="errorMessage" >
                 {item.info && <FormattedMessage id="attention_info" />} 
                </div>
              </MyProjectTechnologies>
            </div>
          </MyProjectItem>
        ))}
      </CarroselAntd>
    </MyProjectsContainer>
  );
}
