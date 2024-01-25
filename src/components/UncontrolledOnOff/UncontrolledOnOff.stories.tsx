import {UncontrolledOnOff} from "./UncontrolledOnOff";


export default {
    component: UncontrolledOnOff
}
export const UncontrolledOn=()=>{
    return <UncontrolledOnOff  defaultOn={true} onChange={()=>{}}/>
}
export const UncontrolledOff=()=>{
    return <UncontrolledOnOff  defaultOn={false} onChange={()=>{}}/>
}