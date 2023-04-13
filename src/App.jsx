import SignUp from "./SignUp";
import LogIn from "./Login";
import ForgotPassword from "./forgotpassword";
import { Route, Routes } from "react-router-dom";
import Start from "./AfterLogin";
import Request from "./Request";
import Quiz from "./Quiz";
import Shop from "./Shop";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/start" element={<Start />} />
        <Route path="/request" element={<Request />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}
export default App;
