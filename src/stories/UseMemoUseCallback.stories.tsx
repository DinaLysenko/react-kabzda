import React, {ChangeEvent, useCallback, useMemo, useState} from 'react';

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let result1 = 1
    let result2 = 1
    result1 = useMemo(() => {
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            result1 = result1 * i
        }
        return result1
    }, [a])

    for (let i = 1; i <= b; i++) {
        result2 = result2 * i
    }

    return (
        <div>
            <input value={a} onChange={(e: ChangeEvent<HTMLInputElement>) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e: ChangeEvent<HTMLInputElement>) => setB(Number(e.currentTarget.value))}/>
            <hr/>
            <div>Result for a: {result1} </div>
            <div>Result for b: {result2}</div>
        </div>
    )
}

const SecretUsers = (props: { users: string[] }) => {
    console.log('users')
    return <div>
        {props.users.map((u, index) => {
                return (
                    <div key={index}> {u}</div>
                )
            }
        )}
    </div>
}
const Users = React.memo(SecretUsers)

export const HelpsToReactMemo = () => {
    console.log('memo')
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Mary', 'Ken', 'Sally'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])
    const addUser = () => {
        setUsers([...users, 'Sveta' + new Date().getTime()])
    }

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            {count}
            <Users users={newArray}/>
        </div>
    )
}
const SecretBooks = (props: { books: string[], addBooks: () => void }) => {
    console.log('books')
    return <div>
        <button onClick={props.addBooks}>add user</button>
        {props.books.map((b, index) => {
                return (
                    <div key={index}> {b}</div>
                )
            }
        )}
    </div>
}
const Books = React.memo(SecretBooks)

export const LikeUseCallback = () => {
    console.log('call')
    const [count, setCount] = useState(0)
    const [books, setBooks] = useState(['JS', 'CSS', 'HTML'])

    const newArray = useMemo(() => {
        return books.filter(b => b.toLowerCase().indexOf('s') > -1)
    }, [books])
    // const addBooks=()=>{
    //     setBooks([...books, 'NextJs' + new Date().getTime()])
    // }
    const addBooks = useCallback(() => {
        setBooks([...books, 'NextJs' + new Date().getTime()])
    }, [books])
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            {count}
            <Books books={newArray} addBooks={addBooks}/>
        </div>
    )
}