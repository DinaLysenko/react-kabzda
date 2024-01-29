import {action} from "@storybook/addon-actions";
import {Select} from "./Select";


export default {
    component: Select,
};

const onChangeHandler = action('onClick')

export const SelectWithValue = () => {
    return <Select items={[ {id: 0, title: 'none'},{id: 1, title: 'Moscow'}, {id: 2, title: 'Minsk'}, {id: 3, title: 'Ufa'}]} value={2} onChange={onChangeHandler}/>
}