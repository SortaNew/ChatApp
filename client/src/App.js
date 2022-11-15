import { useState, useEffect } from "react";
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Navbar from './components/Navbar'
import ChatRoom from './components/ChatRoom'
import FriendList from './components/FriendList'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user} onLogout={setUser}/>
      {/* <LogIn user={user} onLogin={setUser}/> */}
      <Routes>
      <Route path="/" element={<LogIn user={user} onLogin={setUser} />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/ChatRoom" element={<ChatRoom user={user} />} />
      <Route path="/FriendList" element={<FriendList />} />
        {/* <Route exact path="/">
          <LogIn/>
        </Route>
        <Route exact path="/SignUp">
          <SignUp/>
        </Route>
        <Route exact path="/LogIn">
          <LogIn user={user} onLogin={setUser}/>
        </Route>
        <Route exact path="/ChatRoom">
          <ChatRoom user={user}/>
        </Route>
        <Route exact path="/FriendList">    
          <FriendList/>
        </Route>     */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
