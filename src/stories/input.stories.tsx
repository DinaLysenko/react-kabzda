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
        if (inputValue.current) {
            setValue(inputValue.current.value)
        }
    }
    return <><input ref={inputValue}/>
        <button onClick={onClickHandler}>save</button>
        -{value}</>
}
export const ControlledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <input value={value} onChange={onChangeHandler}/>
}
export const ControlledCheckbox = () => {
    const [checkedValue, setCheckedValue] = useState(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckedValue(e.currentTarget.checked)
    }
    return <input type={'checkbox'} checked={checkedValue} onChange={onChangeHandler}/>
}
export const ControlledSelect = () => {
const[valueSelect, setValueSelect]=useState<string|undefined>('2')
    const onChangeHandler=(e:ChangeEvent<HTMLSelectElement>)=>{
    setValueSelect(e.currentTarget.value)
    }
    return <select value={valueSelect} onChange={onChangeHandler}>
        <option >none</option>
        <option value="1">Moscow</option>
        <option value="2">Minsk</option>
        <option value="3">Ufa</option>
    </select>
}
export const ControlledInputWthFixedValue = () => {
    return <input value={'it-incubator'}/>
}