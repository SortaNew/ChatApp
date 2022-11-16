import { useContext } from 'react'
import { UserContext } from '../App'

function UserList({ user }) {

    const users = useContext(UserContext)

    function handleAdd(friendId) {
        fetch("/friendships", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: user.id,
                friend_id: friendId,
                status: true
            }),
        })
            .then((r) => r.json())
    }

    const randomUsers = users.map((u) => {
        return (
            <div key={u.id}>
                {u.username}
                <button onClick={() => handleAdd(u.id)}>Add</button>
            </div>
        )
    })
    return (
        <div>{randomUsers}</div>
    )
}

export default UserList