import {useReducer} from "react";
import {CHANGE_COLLAPSED, reducer} from "./reducer";

type AccordionPropsType = {
    titleValue: string
}
export const UncontrolledAccordion = (props: AccordionPropsType) => {
    //const [collapsed, setCollapsed] = useState(false)
    const [state, dispatchState] = useReducer(reducer, {collapsed: false})
    return (
        <div>
            <AccordionTittle title={props.titleValue} onClick={()=>{dispatchState({type: CHANGE_COLLAPSED})}} />
            {state.collapsed && <AccordionBody/>}
        </div>
    )
}
type AccordionTittlePropsType = {
    title: string
    onClick: () => void
}
const AccordionTittle = (props: AccordionTittlePropsType) => {
    return (
        <div>
            <h1 onClick={() => props.onClick()}>{props.title}</h1>
        </div>
    )
}
const AccordionBody = () => {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

