import DeleteButton from './DeleteButton'
import { useState } from 'react'

function EditUser({ user, setUser }) {

    const [cUsername, setCUsername] = useState("")
    const [interest, setInterest] = useState("")

    function handleSubmit(e) {
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
    function handleInterestSubmit(e) {
        e.preventDefault()

        fetch("/interests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: interest,
                user_id: user.id
            }),
        })
            .then((r) => r.json())
            .then(data => setInterest(data))
    }
    console.log(interest)
    return (
        <div>
            <form onSubmit={(e) => handleInterestSubmit(e)}>
                <input onChange={(e) => setInterest(e.target.value)} value={interest} type="text" placeholder="You can only add one interest!"></input>
                <button>Add Interest</button>
            </form>

            <form onSubmit={(e) => handleSubmit(e)}>
                <input onChange={(e) => setCUsername(e.target.value)} value={cUsername} type="text" placeholder="Username"></input>
                <button>Change Username</button>
            </form>

            <DeleteButton user={user} setUser={setUser} />
        </div>
    )
}

export default EditUser