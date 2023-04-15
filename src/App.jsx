import SignUp from "./SignUp";
import LogIn from "./Login";
import { Route, Routes } from "react-router-dom";
import Start from "./Start";
import Request from "./Request";
import Quiz from "./Quiz";
import Shop from "./Shop";
import ForgotPass from "./ForgotPass";
import ResetPassword from "./ResetPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/forgotpassword" element={<ForgotPass />} />
        <Route path="/start" element={<Start />} />
        <Route path="/request" element={<Request />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}
export default App;
