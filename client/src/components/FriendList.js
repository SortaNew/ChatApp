import {useState, useEffect} from 'react'

function FriendList(){ 

const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("/users")
          .then((r) => r.json())
          .then((data) => setUsers(data));
    }, []);

    const user = users.map((u, i) => {return <div key={i}>{u.username}</div>})

    return (
    <>{user}</>
    )
}

export default FriendList