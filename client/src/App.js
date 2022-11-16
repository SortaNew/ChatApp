import { useState, useEffect, createContext } from "react";
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Navbar from './components/Navbar'
import ChatRoom from './components/ChatRoom'
import FriendList from './components/FriendList'
import UserList from './components/UserList'
import EditUser from './components/EditUser'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const UserContext = createContext([]);

function App() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((data) => setUsers(data));
  }, []);

  
  
  return (
    <UserContext.Provider value={users}>
    <BrowserRouter>
      <Navbar user={user} onLogout={setUser}/>
      {/* <LogIn user={user} onLogin={setUser}/> */}
      <Routes>
      <Route path="/" element={<LogIn user={user} onLogin={setUser} />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/ChatRoom" element={<ChatRoom user={user} />} />
      <Route path="/FriendList" element={<FriendList user={user}/>} />
      <Route path="/UserList" element={<UserList user={user}/>} />
      <Route path="/EditUser" element={<EditUser user={user} setUser={setUser}/>} />
    </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

