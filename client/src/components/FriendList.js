import {useState, useEffect} from 'react'

function FriendList(){ 

const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("/users")
          .then((r) => r.json())
          .then((data) => setUsers(data));
    }, []);

    const user = users.map((u) => {return <div key={u.id}>{u.username} <button>x</button></div>})

    return (
    <>{user}</>
    )
}

export default FriendList