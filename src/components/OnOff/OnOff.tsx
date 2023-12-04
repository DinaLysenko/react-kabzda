import React, {useState} from 'react';

type OnOffType={
    on: boolean
    setOn: (on: boolean)=>void
}
export const OnOff = (props: OnOffType) => {

    const onStyle = {
        width: '50px',
        height: '25px',
        padding: '5px',
        display: 'inline-block',
        border: "1px solid black",
        backgroundColor: !props.on ? "white": "green"
    }
    const offStyle = {
        width: '50px',
        height: '25px',
        padding: '5px',
        display: 'inline-block',
        border: "1px solid black",
        marginLeft: '5px',
        backgroundColor: props.on ? "white": "red"
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        display: 'inline-block',
        border: "1px solid black",
        borderRadius: '10px',
        marginLeft: '5px',
        backgroundColor: props.on ? "green": "red"
    }
    return (
        <div>
            <div style={onStyle} onClick={()=>props.setOn(true)}>On</div>
            <div style={offStyle} onClick={()=>props.setOn(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

