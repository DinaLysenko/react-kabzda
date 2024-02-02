import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css'

type ItemsType = {
    id: any
    title: string
}
type SelectType = {
    value?: any
    onChange: (value: any) => void
    items: ItemsType[]
}
export const Select = (props: SelectType) => {
    const [selectFocus, setSelectFocus] = useState(false)
    const [hoveredItemValue, setHoveredItemValue] = useState(props.value)
    const selectedItem = props.items.find(i => i.id === props.value)
    const hoveredItem = props.items.find(i => i.id === hoveredItemValue)
    useEffect(() => {
        setHoveredItemValue(props.value)
    }, [props.value])
    const toggleItems = () => {
        setSelectFocus(!selectFocus)
    }
    const onClickItem = (id: any) => {
        props.onChange(id)
        toggleItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (hoveredItemValue === props.items[i].id) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement)
                        props.onChange(pretendentElement.id)
                    return
                }
            }
        }
        if (!selectedItem) {
            props.onChange(props.items[0].id)
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setSelectFocus(false)
        }

    }
    return (
        <div>
            <div className={s.select + ' ' + (selectFocus ? s.selectFocus : '')} onClick={toggleItems} onKeyUp={onKeyUp}
                 tabIndex={0}>
                <span className={s.selectValue}>{selectedItem && selectedItem.title}</span>
                <button className={s.button}>{!selectFocus ? 'V' : "^"}</button>
            </div>
            {selectFocus && <div className={s.list}> {props.items.map(i => {
                return <div
                    onMouseEnter={() => setHoveredItemValue(i.id)}
                    className={s.listItem + ' ' + (hoveredItem === i ? s.selected : '')}
                    onClick={() => onClickItem(i.id)} key={i.id}>{i.title}</div>
            })}
            </div>}
        </div>
    );
};

