
import { Route, Routes } from 'react-router-dom';
import Signup from './component/Signup'
import Login from './component/Login';
import Main from './MainPage'
import Hello from "../src/component/form"

function App() {
  return (
      <Routes>
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
        <Route exact path="/" element={<Main/>} />
        <Route path="Hello" element={<Hello/>} />
      </Routes>
  );
}

export default App;
