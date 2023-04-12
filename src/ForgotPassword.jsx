// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css'

function ForgotPassword() {
    return (
        <div className="forgot-password">
            <form id="form-forgot">
                <div className="forgot-title-div">
                    <label id="forgot-title">Forgot Your Password??</label>
                    <label id="enter-email-title">Enter your email to continue:</label>
                </div>
                <div className="container-forgot">
                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="Enter your email address." />
                </div>
                <button>Reset</button>
            </form>
        </div>
    )
}

export default ForgotPassword