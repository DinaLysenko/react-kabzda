import React, {useState} from "react";

export default {
    title: 'React.memo.demo'
}

 const SecretCounter = (props: { count: number }) => {
    return <div>{props.count}
    </div>
}
 const SecretUsers = (props: { users: string[] }) => {
    return <div>
        {props.users.map((u,index) => {
                return (
                    <div key={index}> {u}</div>
                )
            }
        )}
    </div>
}
const Users=React.memo(SecretUsers)
const Counter=React.memo(SecretCounter)

export const ReactMemoDemo = () => {
    const[count, setCount]=useState(0)
    const[users, setUsers]=useState(['Mary', 'Ken', 'Sally'])
    const addUser=()=>{
        setUsers([...users, 'Sveta' + new Date().getTime()])
    }
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={addUser}>add user</button>
            <Counter count={count}/>
            <Users users={users}/>
        </div>
    )
}