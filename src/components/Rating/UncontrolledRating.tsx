// type RatingPropsType = {
//     value: 0 | 1 | 2 | 3 | 4 | 5
// }
import {useState} from "react";

export const UncontrolledRating = () => {
    const [value, setValue] = useState(0)
    const onClickHandler = (value:number) => {
        setValue(value)
    }
    return (
        <div>
            <Star selected={value > 0} onClick={() => onClickHandler(1)} />
            <Star selected={value > 1} onClick={() => onClickHandler(2)} />
            <Star selected={value > 2} onClick={() => onClickHandler(3)} />
            <Star selected={value > 3} onClick={() => onClickHandler(4)} />
            <Star selected={value > 4} onClick={() => onClickHandler(5)} />
        </div>
    )
}
type StarPropsType = {
    selected: boolean
    onClick: ()=>void

}
const Star = (props: StarPropsType) => {
    return  <span onClick={props.onClick}>
        {props.selected ?<b>star </b>  : 'star '}
    </span>
}