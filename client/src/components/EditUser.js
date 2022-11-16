import DeleteButton from './DeleteButton'
import {useState} from 'react'

function EditUser({ user, setUser }) {

    const [cUsername, setCUsername] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/users/${user.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            "username": cUsername
        }),
        headers: {
            'Content-type': 'application/json',
        },
        })
        .then((response) => response.json())
        .then(response => {
            setUser(response)
            }
        )
    }

    return (
    <div>
        <form onSubmit={(e)=> handleSubmit(e)}>
            <input onChange={(e) => setCUsername(e.target.value)} value={cUsername} type="text" placeholder="Username"></input>
            <button>Change Username</button>
        </form>
        <DeleteButton user={user} setUser={setUser}/>
    </div>
    )
}

export default EditUser