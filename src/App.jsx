import SignUp from "./SignUp";
import LogIn from "./Login";
import ForgotPassword from "./forgotpassword";
import { Route, Routes } from "react-router-dom";
import Start from "./AfterLogin";
import Request from "./Request";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/start" element={<Start />} />
        <Route path="/request" element={<Request />} />
      </Routes>
    </div>
  );
}
export default App;
