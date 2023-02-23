import { Bar } from '@ant-design/plots';

   export const BarComponent = () => {
        const data = [
          {
            language: 'Typescript',
            projectsAmount: 57,
          },
          {
            language: 'React',
            projectsAmount: 50,
          },
          {
            language: 'React Native',
            projectsAmount: 16,
          },
          {
            language: 'NextJS',
            projectsAmount: 11,
          },
          {
            language: 'Node',
            projectsAmount: 11,
          },
          {
            language: 'Jest',
            projectsAmount: 4,
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

   