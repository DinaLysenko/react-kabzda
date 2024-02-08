import React, {useState} from 'react';

export default {
    title: 'UseState demo'
}

const generateData=()=>{
    console.log('generate')
    return 393938900
}
export const UseState = () => {
    console.log('use')
   // const initValue=useMemo(generateData, [])
    const[count, setCount]=useState(generateData)

    return (
        <div>
            <button onClick={()=>setCount((state)=>state+1)}>+</button>
            {count}
        </div>
    )
}