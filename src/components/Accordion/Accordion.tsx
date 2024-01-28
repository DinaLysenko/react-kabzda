type ItemsType={
    id: any
    title: string
}
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: ()=>void
    items: ItemsType[]
    onClickItem: (id: any)=>void
}
export const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTittle title={props.titleValue} onClick={props.onChange} collapsed={props.collapsed} />
            { !props.collapsed && <AccordionBody items={props.items} onClick={props.onClickItem}/>}
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

type AccordionBodyType={
    items: ItemsType[]
    onClick: (id: any)=>void
}

const AccordionBody = (props: AccordionBodyType) => {
    return (
        <div>
            <ul>
                {props.items.map((i, index)=>{
                    return <li key={index} onClick={(value)=>props.onClick(i.id)}>{i.title}</li>
                })}
            </ul>
        </div>
    )
}

