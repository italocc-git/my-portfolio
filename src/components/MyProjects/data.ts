
import { MyProjectsListProps } from './types'
import taskManagerGif from '../../assets/gif/taskManager-dash.gif'
import feedbackDemonstrationGif from '../../assets/gif/gif-feedbacks-app-demo.gif'
import designSystemDemonstrationGif from '../../assets/gif/design-system-apresentation.gif'
import nlwsetupDemonstrationGif from '../../assets/gif/nlw-setup-demonstration.gif'
import gifCoffeeDelivery from '../../assets/gif/gif-coffee-delivery.gif'
import rickAndMortyDemonstrationGif from '../../assets/gif/rick-and-morty-presentation-gif.gif'
import rentxAppDemonstrationGif from '../../assets/gif/rentx-gif.gif'

export const data: MyProjectsListProps[] = [
    {
        title: 'rentx_title',
        about: 'rentx_about',
        technologies: ['Typescript', 'React', 'React Hooks', 'TailwindCSS', 'Phosphor Icons', 'Nookies', 'RadixUI', 'Headless React', 'controlled/uncontrolled states', 'responsive', 'Zod','DayJS', 'React-Calendar','React-Responsive-Carousel'],
        demonstration: rentxAppDemonstrationGif,
        linkGithub: 'https://github.com/italocc-git/rentx-web',
        linkPublicate: 'https://rentx-web.vercel.app/'

    },
    {
        title: 'ricky_and_morty_title',
        about: 'ricky_and_morty_about',
        technologies: ['Typescript', 'React', 'React Hooks', 'Next', 'Styled Components', 'Redux', 'Ant Design', 'localStorage', 'controlled/uncontrolled states', 'responsive', 'Form Validation'],
        demonstration: rickAndMortyDemonstrationGif,
        linkGithub: 'https://github.com/italocc-git/rick-and-morty-app',
        linkPublicate: 'https://rick-and-morty-hqqts6ib7-italocc-git.vercel.app/'

    },
    {
        title: 'coffee_delivery_title',
        about: 'coffee_delivery_about',
        technologies: ['Typescript', 'React', 'React Hooks', 'Headlessui/react', 'tailwind', 'react-router-dom', 'react-hook-form', 'localStorage', 'controlled/uncontrolled states', 'responsive', 'jest'],
        demonstration: gifCoffeeDelivery,
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
        title: 'nlw_habits_title',
        about: 'nlw_habits_about',
        technologies: ['Typescript', 'React', 'React Hooks', 'Axios', 'Tailwind', 'Radix-ui', 'Auth0', 'phosphor-react', 'CLSX', 'React-Toast-Notifications', 'Jotai',
            'Node', 'Fastify', 'Dayjs', 'Jotai', 'Prisma', 'zod'],
        demonstration: nlwsetupDemonstrationGif,
        linkGithub: 'https://github.com/italocc-git/nlw-setup-2023',

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
        title: 'task_manager_title',
        about: 'task_manager_about',
        technologies: ['Typescript', 'React', 'AntdDesign', 'React Redux', 'Redux Persist', 'Context API', 'Local Storage', 'Styled Components', 'React Modal', 'eslint', 'Git Flow Structure'],
        linkGithub: 'https://github.com/italocc-git/teste-dashboard-react',
        demonstration: taskManagerGif,
        linkPublicate: 'https://lovely-selkie-1a873d.netlify.app/'

    },
]
