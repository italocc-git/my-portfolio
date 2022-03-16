import {MyProjectsListProps} from './types'
import dashGifImage from '../../assets/gif/gif-admin-dashboard.gif'
export const data : MyProjectsListProps[] = [
    
    {
        title:'Projeto My Activities',
        about: 'Projeto criado para organizar suas atividades diárias . Aplicativo criado em ReactJS tem funcionalidades semelhantes ao Trello .',
        technologies: ['Typescript','React','React Hooks','Axios','React Modal','Date-fns','Immer','@Unform','React-Toastify','json server','Yup',
        'Node','Express','Cors','Postgres','Bcrypt','JSON WEB Token','Multer','Typeorm'],
        demonstration:'https://user-images.githubusercontent.com/50462308/124628309-b7f87800-de56-11eb-9946-be3e78bb515a.gif',
        linkGithub: 'https://github.com/italocc-git/project-activities',
        
    },
    {
        title:'Projeto Admin Dashboard',
        about : 'Projeto simples de listagem e CRUD de usuários , onde utilizei o contexto de estado Redux para prática',
        technologies: ['Typescript','React', 'AntdDesign','Axios','React Redux','Redux-Saga','Styled Components','React-dom'],
        linkGithub:'https://github.com/italocc-git/admin-dashboard',
        demonstration:dashGifImage,
        linkPublicate: 'https://sharp-sinoussi-775e59.netlify.app/'
        
    },
    {
        title : 'Projeto GoBarber',
        about : ' GoBarber é uma aplicação voltada aos prestadores de serviço em barbearia.Desenvolvida em React e React Native, a aplicação oferece aos clientes agendamentos de horários.',
        technologies : ['Typescript','React','React Hooks','Axios','Unform','Date-fns','Polished','React-icons','React-router-dom','styled-components','Yup','uuidv4','React-spring',
        'Node','Express','Cors','Postgres','MongoDB','Redis','Bcrypt','JSON WEB Token','Multer','Typeorm'],
        linkGithub:'https://github.com/italocc-git/gobarber-web',
        /* ver a questão do link do backend */
        
    },
]