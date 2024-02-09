import {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
}

export const SimpleExample=()=>{
    const[fake, setFake]=useState(1)
    const[count, setCount]=useState(1)
    useEffect(()=>{
        console.log('useEffect every render')
        document.title=count.toString()
    })
    useEffect(()=>{
        console.log('useEffect render first time')
        document.title=count.toString()
    }, [])
    useEffect(()=>{
        console.log('useEffect render with changed count')
        document.title=count.toString()
    }, [count])
    return <div>
        {fake}
        <button onClick={()=>setFake(fake+1)}>fake +</button>
        {count}
        <button onClick={()=>setCount(count+1)}>count +</button>
    </div>
}