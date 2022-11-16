import { NavLink } from "react-router-dom";

function Navbar({ user, onLogout }) {
    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      }).then(() => onLogout(""));
      alert("You have been logged out!")
    }
  
    return (
      <header>
        <NavLink to="/">Home</NavLink>&nbsp;
        <NavLink to="/SignUp">Sign Up</NavLink>&nbsp;
        <NavLink to="/Chatroom">Chat Room</NavLink>&nbsp;
        <NavLink to="/Friendlist">Friend List</NavLink>&nbsp;
        <NavLink to="/Userlist">User List</NavLink>&nbsp;
        <NavLink to="/EditUser">Edit/Delete User</NavLink>&nbsp;
        {user ? <a>Welcome, {user.username}!</a> : ""}&nbsp;        
        <button onClick={handleLogout}>Logout</button>
      </header>
    );
  }

  export default Navbar