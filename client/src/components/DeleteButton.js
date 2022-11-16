function DeleteButton({user, setUser}){

    function handleDelete(){
        fetch(`/users/${user.id}`, 
        { method: 'DELETE' })
        setUser("")
    }

    return(
        <button onClick={() => handleDelete()}>Delete Account</button>
    )
}

export default DeleteButton