import {
  MyProjectsContainer,
  MyProjectsSectionTitle,
  CarroselAntd,
  CarrouselArrow,
  MyProjectItem,
  MyProjectTitle,
  MyProjectContent,
  MyProjectContentLayout,
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
import {Grid} from 'antd'
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
  const {useBreakpoint} = Grid
  const {lg} = useBreakpoint()
  const isDesktop = lg
  const isMobile = !lg
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
      <CarrouselArrow left="1rem">
        <LeftCircleOutlined onClick={onClick} />
      </CarrouselArrow>
    );
  };
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <CarrouselArrow right="1rem">
        <RightCircleOutlined onClick={onClick} />
      </CarrouselArrow>
    );
  };

  return (
    <MyProjectsContainer id={id}>
      <MyProjectsSectionTitle >
        <FormattedMessage id="my_projects" />
        
      </MyProjectsSectionTitle>
      <CarroselAntd
        arrows={isDesktop}
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
        speed={1000}
        autoplay={isMobile}
        dots={isDesktop}
      >
        {projects?.myProjectsSections.map((projectItem) => (
          <MyProjectItem key={projectItem.projectName}>
            <MyProjectTitle>
                <FormattedMessage id='project_title' /> {projectItem.projectName}
            </MyProjectTitle>
            <MyProjectContent>
              <MyProjectContentDescription>
                <FormattedMessage id={projectItem.aboutProject} />
              </MyProjectContentDescription>
              <MyProjectContentLayout>
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
              </MyProjectContentLayout>
            </MyProjectContent>

            <MyProjectContentLayout>
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
             
            </MyProjectContentLayout>
            <div className="errorMessage" >
                    {projectItem.info && <FormattedMessage id="attention_info" />} 
              </div>
          </MyProjectItem>
        ))}
      </CarroselAntd>
    </MyProjectsContainer>
  );
}
