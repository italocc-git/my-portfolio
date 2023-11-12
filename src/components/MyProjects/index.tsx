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
  MyProjectTechnologiesItem
} from "./styles";
import {
  GithubOutlined,
  IeOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { FormattedMessage } from "react-intl";
import { useEffect, useState } from "react";
import request from "graphql-request";
import { queryMyProjectsSections } from "./query";
import { ProjectsSection } from "./types";
type MyProjectsProps = {
  id: string;
}
export function MyProjects({id} : MyProjectsProps) {

  const [projects, setProjects] = useState<ProjectsSection>();
  useEffect(() => {
    const fetchProjectsData = async () => {
      const data = await request<ProjectsSection>(
        process.env.REACT_APP_API_GRAPHQL_URL ?? '',
        queryMyProjectsSections
      );
      
      setProjects(data)
    };
    fetchProjectsData();
  }, []);


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
        {projects?.myProjectsSections.map((projectItem) => (
          <MyProjectItem key={projectItem.projectName}>
            <MyProjectTitle>
              <span>
                <FormattedMessage id='project_title' /> {projectItem.projectName}
              </span>
            </MyProjectTitle>
            <h1>
              <FormattedMessage id="about" /> 
            </h1>
            <MyProjectContent>
              <MyProjectContentDescription>
                <FormattedMessage id={projectItem.aboutProject} />
              </MyProjectContentDescription>
              <div className="contentLayout">
                <MyProjectExternalButton target='_blank'  href={projectItem.githubLink}>
                  <FormattedMessage id="access_repository" />
                  <GithubOutlined />
                </MyProjectExternalButton>
                {projectItem.publicateLink && (
                  <MyProjectExternalButton target='_blank' href={projectItem.publicateLink}>
                    <FormattedMessage id="access_website" />
                    <IeOutlined />
                  </MyProjectExternalButton>
                )}
              </div>
            </MyProjectContent>

            <div className="contentLayout">
              <div>
                {projectItem.demonstrationGif && (
                  <img src={projectItem.demonstrationGif } alt={projectItem.projectName} />
                )}
              </div>
              
              <MyProjectTechnologies >
              {projectItem.technologies.map((tech) => (
                  <MyProjectTechnologiesItem  key={tech.name}
                   >
                        <img  src={tech.imageUrl} alt={tech.name} />
                        <span>{tech.name}</span>
                  </MyProjectTechnologiesItem>
                ))}
                
              </MyProjectTechnologies>
             
            </div>
            <div className="errorMessage" >
                    {projectItem.info && <FormattedMessage id="attention_info" />} 
              </div>
          </MyProjectItem>
        ))}
      </CarroselAntd>
    </MyProjectsContainer>
  );
}
