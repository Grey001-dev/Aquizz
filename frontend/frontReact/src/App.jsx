import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import TournamentLobby from "./components/TeamLobby.jsx";
import HomePage from "./components/Home.jsx"
import Practice from "./components/Practice.jsx"
import {Routes,Route} from "react-router-dom";
import { useContext } from "react";
import { UsernameProvider } from "./components/UsernameContext.jsx"
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <UsernameProvider>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/teamlobby" element={<TournamentLobby/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/practice" element={<Practice/>}/>
    </Routes>
    </UsernameProvider>
  );
}

export default App;