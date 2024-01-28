import {Accordion} from './Accordion';
import {useState} from "react";
import {action} from '@storybook/addon-actions';

export default {
    component: Accordion,
};

const onChangeHandler = action('onClick')
const onClickItem=action('onClick item')
export const CollapsedAccordion = () => {
    return <Accordion titleValue={'Collapsed Accordion'} collapsed={true}
                      onChange={onChangeHandler} items={[{id: 1, title: 'Tom'}, {id: 2, title: 'Kerry'}, {id: 3, title: 'Marry'}]} onClickItem={onClickItem}/>
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={'Opened Accordion'} collapsed={false}
                      onChange={onChangeHandler} items={[{id: 1, title: 'Tom'}, {id:2, title: 'Kerry'}, {id: 3, title: 'Marry'}]} onClickItem={onClickItem}/>
}
export const DemoAccordion = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={'Accordion'} collapsed={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }} items={[{id: 1, title: 'Tom'}, {id: 2, title: 'Kerry'}, {id: 3, title: 'Marry'}]} onClickItem={onClickItem}/>
}