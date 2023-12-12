import {Accordion} from './Accordion';
import {useState} from "react";
import {action} from '@storybook/addon-actions';

export default {
    component: Accordion,
};

const onClickHandler = action('onClick')
export const CollapsedAccordion = () => {
    return <Accordion titleValue={'Collapsed Accordion'} collapsed={true}
                      onClick={onClickHandler}/>
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={'Opened Accordion'} collapsed={false}
                      onClick={onClickHandler}/>
}
export const DemoAccordion = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={'Accordion'} collapsed={collapsed}
                      onClick={() => {
                          setCollapsed(!collapsed)
                      }}/>
}