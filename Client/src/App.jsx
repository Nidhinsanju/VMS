import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import SecurityCheck from "./Components/SecurityChecks";
import Signup from "./Components/Signup";
import { AdminLogin } from "./Components/AdminLogin";
function App() {
  return (
    <>
      <div>
        <RecoilRoot>
          <Router>
            <Routes>
              <Route path="/adminlogin" element={<AdminLogin />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/" element={<Login />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/secuirtycheck" element={<SecurityCheck />}></Route>
            </Routes>
          </Router>
        </RecoilRoot>
      </div>
    </>
  );
}

export default App;
