import { Link } from "react-router-dom";
import "./auth.css";

export default function Login() {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return(
        <div className="login">
            <div className="container">
                <form className="form" onSubmit={handleSubmit}>
                    <h3>Login</h3>
                    <input type="email" name="email" placeholder="Your Email" />
                    <input type="password" name="password" placeholder="Your Password" />
                    <button type="submit" className="btn">Login</button>
                    <div className="text">Dont have an account <Link to="/register">Register</Link></div>
                </form>
            </div>
        </div>
    );
}