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
export const SimpleExampleSetTimeout=()=>{
    console.log('SimpleExampleSetTimeout')
    const[fake, setFake]=useState(1)
    const[count, setCount]=useState(1)
    useEffect(()=>{
        setInterval(()=>{
           setCount((state)=>state+1)
        }, 1000)
    },[])
    return <div>
        Count-{count} ---Fake-{fake}
        {/*<button onClick={()=>setFake(fake+1)}>fake +</button>*/}
        {/*<button onClick={()=>setCount(count+1)}>count +</button>*/}
    </div>
}
export const SimpleExampleClock=()=>{
    let[seconds, setSeconds]=useState(0)
    let data=new Date()
   seconds=data.getSeconds()
    let minutes=data.getMinutes()
    let hours=data.getHours()
    useEffect(()=>{
        setInterval(()=>{
           setSeconds(state=>state+1)
        }, 1000)
    },[])

    return <div>
        {hours}:{minutes<10? '0' + minutes:minutes}:{seconds<10? '0' + seconds: seconds}
    </div>
}