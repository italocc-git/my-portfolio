import { Bar } from '@ant-design/plots';

   export const BarComponent = () => {
        const data = [
          {
            language: 'Typescript',
            projectsAmount: 29,
          },
          {
            language: 'React',
            projectsAmount: 23,
          },
          {
            language: 'Node',
            projectsAmount: 14,
          },
          
          {
            language: 'React Native',
            projectsAmount: 5,
          },
          {
            language: 'NextJS',
            projectsAmount: 5,
          },
          {
            language: 'Javascript',
            projectsAmount: 4,
          },
          {
            language: 'Jest',
            projectsAmount: 2,
          },
          
        ]
        

        const config  = {
          data,
          xField: 'projectsAmount',
          yField: 'language',
          seriesField: 'language',
          legend: {
            itemName: {
              style: {
                fill:'white',
                fontWeight: 500
              }
            }
          },
          yAxis: {
            label: {
              style: {
                fill: 'white',
                
              }
            }
          }
          
        }
        return <Bar {...config}   />;
    }

   