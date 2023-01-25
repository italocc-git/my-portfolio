import { FormattedMessage } from "react-intl"
import { BarComponent } from "./BarComponent"
import { Tooltip } from 'antd';
import {MyExperiencesContent} from './styles'
import { Info } from "phosphor-react";
type MyExperiencesProps = {
    id : string
}
export function MyExperiences({id} : MyExperiencesProps){

    return(
        <MyExperiencesContent id={id}>
            <h1>
                <FormattedMessage id="my_xp" />
                <Tooltip  title="Quantidade de projetos desenvolvidos por tecnologia específica">
                    <Info size={32} weight="light" cursor="pointer" />
                </Tooltip>
            </h1>
          <BarComponent/>  
        </MyExperiencesContent>
    )
}