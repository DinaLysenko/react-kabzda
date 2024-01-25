import {ChangeEvent, useRef, useState} from "react";


export default {
    title: 'input'
}
export const UncontrolledInput = () => {
    return <input/>
}
export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <><input onChange={onChangeHandler}/>-{value}</>
}
export const GetValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const inputValue = useRef<HTMLInputElement | null>(null)
    const onClickHandler = () => {
        if(inputValue.current){
            setValue(inputValue.current.value)
        }
    }
    return <><input ref={inputValue}/>
        <button onClick={onClickHandler}>save</button>
        -{value}</>
}
export const ControlledInputWthFixedValue = () => {
    return <input value={'it-incubator'}/>
}