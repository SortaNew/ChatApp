import { useState, useEffect } from 'react'

function FriendList({ user }) {
    
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("/users")
            .then((r) => r.json())
            .then((data) => setUsers(data));
    }, []);
    
    if(!user){return "loading..."}

    const friends = users.filter((u) => {
        return (
            user.friendships.map(fr => fr.friend_id).includes(u.id)
        )
    })
    const userFriends = friends.map((u) => { return <div key={u.id}> {u.username} </div> })

    return (
        <>{userFriends}</>
    )
}

export default FriendList