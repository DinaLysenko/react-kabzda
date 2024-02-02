import {action} from "@storybook/addon-actions";
import {Select} from "./Select";
import {useState} from "react";


export default {
    component: Select,
};

const onChangeHandler = action('onClick')

export const SelectWithValue = () => {
    const [value, setValue] = useState('2')
    return <Select items={[{id: '1', title: 'Moscow'}, {id: '2', title: 'Minsk'}, {id: '3', title: 'Ufa'}]} value={value} onChange={setValue}/>
}
export const SelectWithoutValue = () => {
    const [value, setValue] = useState(null)
    return <Select items={[{id: '1', title: 'Moscow'}, {id: '2', title: 'Minsk'}, {id: '3', title: 'Ufa'}]}  value={value} onChange={setValue}/>
}