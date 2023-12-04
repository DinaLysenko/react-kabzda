import React, {useState} from 'react';

type UncontrolledOnOffType = {
    onChange: (switchOn: boolean) => void
}
export const UncontrolledOnOff = (props: UncontrolledOnOffType) => {
    const [onOff, setonOff] = useState(false)
    const onStyle = {
        width: '50px',
        height: '25px',
        padding: '5px',
        display: 'inline-block',
        border: "1px solid black",
        backgroundColor: !onOff ? "white" : "green"
    }
    const offStyle = {
        width: '50px',
        height: '25px',
        padding: '5px',
        display: 'inline-block',
        border: "1px solid black",
        marginLeft: '5px',
        backgroundColor: onOff ? "white" : "red"
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        display: 'inline-block',
        border: "1px solid black",
        borderRadius: '10px',
        marginLeft: '5px',
        backgroundColor: onOff ? "green" : "red"
    }
    const onClicked = () => {
        setonOff(true)
        props.onChange(true)
    }
    const onClickedOff = () => {
        setonOff(false)
        props.onChange(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={onClickedOff}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

