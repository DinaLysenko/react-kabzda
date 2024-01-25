import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";
import {Rating, RatingValueType} from "../Rating/Rating";
import {useState} from "react";

export default {
    component: UncontrolledRating
}

const onClickHandler=action('on click')
export const RatingEmpty=()=>{
    return <UncontrolledRating defaultValue={0} onChange={onClickHandler}/>
}
export const Rating1=()=>{
    return <UncontrolledRating defaultValue={1} onChange={onClickHandler}/>
}
export const Rating2=()=>{
    return <UncontrolledRating defaultValue={2} onChange={onClickHandler}/>
}
export const Rating3=()=>{
    return <UncontrolledRating defaultValue={3} onChange={onClickHandler}/>
}
export const Rating4=()=>{
    return <UncontrolledRating defaultValue={4} onChange={onClickHandler}/>
}
export const Rating5=()=>{
    return <UncontrolledRating defaultValue={5} onChange={onClickHandler}/>
}
export const ChangedRating=()=>{
    const[value, setValue]=useState<RatingValueType>(3)
    return <Rating value={value} setRatingValue={setValue}/>
}