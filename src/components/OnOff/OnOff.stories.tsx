import {OnOff} from "./OnOff";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    component: OnOff
}
const onClickHandler=action('on change')
export const OnMode=()=>{
    return <OnOff on={true} setOn={onClickHandler}/>
}
export const OffMode=()=>{
    return <OnOff on={false} setOn={onClickHandler}/>
}
export const ChangedMode=()=>{
    const[value, setValue]=useState(false)
    return <OnOff on={value} setOn={()=>setValue(!value)}/>
}