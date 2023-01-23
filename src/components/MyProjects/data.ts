
import { MyProjectsListProps } from './types'
import dashGifImage from '../../assets/gif/admin-dash.gif'
import taskManagerGif from '../../assets/gif/taskManager-dash.gif'
import feedbackDemonstrationGif from '../../assets/gif/gif-feedbacks-app-demo.gif'
import designSystemDemonstrationGif from '../../assets/gif/design-system-apresentation.gif'
export const data: MyProjectsListProps[] = [
    {
        title: 'coffee_delivery_title',
        about: 'coffee_delivery_about',
        technologies: ['Typescript', 'React', 'React Hooks', 'Headlessui/react', 'tailwind', 'react-router-dom', 'react-hook-form', 'localStorage', 'controlled/uncontrolled states', 'responsive', 'jest'],
        /* demonstration: feedbackDemonstrationGif, */
        linkGithub: 'https://github.com/italocc-git/coffee-delivery',
        linkPublicate: 'https://coffee-delivery-sable.vercel.app/'

    },
    {
        title: 'design_system_title',
        about: 'design_system_about',
        technologies: ['Typescript', 'React', 'Radix-ui', 'react-dom', 'polished', 'phosphor-react', '@stitches/react', '@storybook', 'vite', 'tsup', 'turbo'],
        demonstration: designSystemDemonstrationGif,
        linkGithub: 'https://github.com/italocc-git/05-design-system',
        linkPublicate: 'https://italocc-git.github.io/05-design-system/?path=/story/home--page'

    },
    {
        title: 'feedback_widget_title',
        about: 'feedback_widget_about',
        technologies: ['Typescript', 'React', 'React Hooks', 'Axios', 'Headlessui/react', 'classNames', 'firebase', 'phosphor-react', 'html2canvas', 'tailwind', 'react-router-dom',
            'Node', 'Express', 'Cors', 'Postgres', 'Prisma',],
        demonstration: feedbackDemonstrationGif,
        linkGithub: 'https://github.com/italocc-git/nlw-return-impulse',
        linkPublicate: 'https://nlw-return-impulse-lake-six.vercel.app/',
        info: "attention_info"

    },
    {
        title: 'my_activities_title',
        about: 'my_activities_about',
        technologies: ['Typescript', 'React', 'React Hooks', 'Axios', 'React Modal', 'Date-fns', 'Immer', '@Unform', 'React-Toastify', 'json server', 'Yup',
            'Node', 'Express', 'Cors', 'Postgres', 'Bcrypt', 'JSON WEB Token', 'Multer', 'Typeorm'],
        demonstration: 'https://user-images.githubusercontent.com/50462308/124628309-b7f87800-de56-11eb-9946-be3e78bb515a.gif',
        linkGithub: 'https://github.com/italocc-git/project-activities',

    },
    {
        title: 'admin_dashboard_title',
        about: 'admin_dashboard_about',
        technologies: ['Typescript', 'React', 'AntdDesign', 'Axios', 'React Redux', 'Redux-Saga', 'Styled Components', 'React-dom'],
        linkGithub: 'https://github.com/italocc-git/admin-dashboard',
        demonstration: dashGifImage,
        linkPublicate: 'https://sharp-sinoussi-775e59.netlify.app/'

    },
    {
        title: 'task_manager_title',
        about: 'task_manager_about',
        technologies: ['Typescript', 'React', 'AntdDesign', 'React Redux', 'Redux Persist', 'Context API', 'Local Storage', 'Styled Components', 'React Modal', 'eslint', 'Git Flow Structure'],
        linkGithub: 'https://github.com/italocc-git/teste-dashboard-react',
        demonstration: taskManagerGif,
        linkPublicate: 'https://lovely-selkie-1a873d.netlify.app/'

    },
    {
        title: 'go_barber_title',
        about: 'go_barber_about',
        technologies: ['Typescript', 'React', 'React Hooks', 'Axios', 'Unform', 'Date-fns', 'Polished', 'React-icons', 'React-router-dom', 'styled-components', 'Yup', 'uuidv4', 'React-spring',
            'Node', 'Express', 'Cors', 'Postgres', 'MongoDB', 'Redis', 'Bcrypt', 'JSON WEB Token', 'Multer', 'Typeorm'],
        linkGithub: 'https://github.com/italocc-git/gobarber-web',
        /* ver a questão do link do backend */

    },
]
