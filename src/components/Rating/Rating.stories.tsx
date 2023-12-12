import {Rating, RatingValueType} from "./Rating";
import {action} from "@storybook/addon-actions";
import {useState} from "react";

export default {
    component: Rating
}
const onClickHandler=action('on click')
export const RatingEmpty=()=>{
    return <Rating value={0} setRatingValue={onClickHandler}/>
}
export const Rating1=()=>{
    return <Rating value={1} setRatingValue={onClickHandler}/>
}
export const Rating2=()=>{
    return <Rating value={2} setRatingValue={onClickHandler}/>
}
export const Rating3=()=>{
    return <Rating value={3} setRatingValue={onClickHandler}/>
}
export const Rating4=()=>{
    return <Rating value={4} setRatingValue={onClickHandler}/>
}
export const Rating5=()=>{
    return <Rating value={5} setRatingValue={onClickHandler}/>
}
export const ChangedRating=()=>{
    const[value, setValue]=useState<RatingValueType>(3)
    return <Rating value={value} setRatingValue={setValue}/>
}