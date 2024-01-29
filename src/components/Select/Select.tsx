import React, {useState} from 'react';
import s from './Select.module.css'

type ItemsType = {
    id: any
    title: string
}
type SelectType = {
    value: any
    onChange: (value: any) => void
    items: ItemsType[]
}
export const Select = (props: SelectType) => {
    const [selectValue, setSelectValue] = useState(props.value)
    const [selectFocus, setSelectFocus] = useState(false)
    const onBlurHandler=()=>{
        setSelectFocus(selectFocus)
        setSelectValue(selectValue)
    }
    const onClickHandler = () => {
        setSelectFocus(!selectFocus)
    }
    const onClickItem =(id: number)=>{
       const item= props.items.filter(el=>el.id ===id)
        setSelectValue(item[0].title)
        setSelectFocus(!selectFocus)
    }
    return (
        <div>
            <div className={selectFocus? s.selectFocus : s.select} onClick={onClickHandler} onBlur={onBlurHandler} ><span className={s.selectValue}>{selectValue}</span>
                <button className={s.button}>{!selectFocus? 'V' : "^"}</button>
            </div>
            {selectFocus && <div className={s.list}> {props.items.map(i => {
                return <div className={s.listItem} onClick={()=>onClickItem(i.id)} key={i.id}>{i.title}</div>
            })}
        </div>}
        </div>
    );
};

