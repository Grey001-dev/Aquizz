import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  );
}

export default App;