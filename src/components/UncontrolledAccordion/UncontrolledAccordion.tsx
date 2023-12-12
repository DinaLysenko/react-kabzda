import {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}
export const UncontrolledAccordion = (props: AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTittle title={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed}/>
            {collapsed && <AccordionBody/>}
        </div>
    )
}
type AccordionTittlePropsType = {
    title: string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}
const AccordionTittle = (props: AccordionTittlePropsType) => {
    return (
        <div>
            <h1 onClick={() => props.setCollapsed(!props.collapsed)}>{props.title}</h1>
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

