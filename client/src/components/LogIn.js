import {useState} from "react"

function LogIn({user, onLogin}){
    
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
        .then((r) => { 
            if (r.ok) {
                r.json()
                .then((user) => onLogin(user))
                alert(!user.username ? user.username : "Already logged in.")
            }})
      }
    
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="usernameLogIn"
                value={username || ""}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="passwordLogIn"
                value={password || ""}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    )
}

export default LogIn