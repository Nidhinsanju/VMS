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

function App() {
  return (
    <>
      <div>
        <RecoilRoot>
          <Router>
            <Routes>
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
