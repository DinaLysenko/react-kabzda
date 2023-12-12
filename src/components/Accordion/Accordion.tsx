type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: ()=>void
}
export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTittle title={props.titleValue} onClick={props.onClick} collapsed={props.collapsed}/>
            { !props.collapsed && <AccordionBody/>}
        </div>
    )
}
type AccordionTittlePropsType = {
    title: string
    collapsed: boolean
    onClick: ()=>void
}
const AccordionTittle = (props: AccordionTittlePropsType) => {
    return <h1 onClick={(e)=>props.onClick()}>{props.title}</h1>
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

