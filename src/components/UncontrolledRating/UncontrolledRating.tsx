// type RatingPropsType = {
//     value: 0 | 1 | 2 | 3 | 4 | 5
// }
import {useState} from "react";
import {RatingValueType} from "../Rating/Rating";

type PropsType = {
    defaultValue?: RatingValueType
    onChange: (defaultValue: RatingValueType)=>void
}
export const UncontrolledRating = (props: PropsType) => {
    const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)
    return (
        <div>
            <Star selected={value > 0} onClick={() => {setValue(1); props.onChange(1)}}/>
            <Star selected={value > 1} onClick={() => {setValue(1); props.onChange(2)}}/>
            <Star selected={value > 2} onClick={() => {setValue(1); props.onChange(3)}}/>
            <Star selected={value > 3} onClick={() => {setValue(1); props.onChange(4)}}/>
            <Star selected={value > 4} onClick={() => {setValue(1); props.onChange(5)}}/>
        </div>
    )
}
type StarPropsType = {
    selected: boolean
    onClick: () => void

}
const Star = (props: StarPropsType) => {
    return <span onClick={props.onClick}>
        {props.selected ? <b>star </b> : 'star '}
    </span>
}