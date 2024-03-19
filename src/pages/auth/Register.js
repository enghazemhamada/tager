import { Link } from "react-router-dom";
import "./auth.css";

export default function Register() {
    
    function handleSubmit(e) {
        e.preventDefault();
    }

    return(
        <div className="register">
            <div className="container">
                <form className="form" onSubmit={handleSubmit}>
                    <h3>Register</h3>
                    <input type="text" name="name" placeholder="Your Name" />
                    <input type="email" name="email" placeholder="Your Email" />
                    <input type="password" name="password" placeholder="Your Password" />
                    <button type="submit" className="btn">Register</button>
                    <div className="text">I have an account <Link to="/login">Login</Link></div>
                </form>
            </div>
        </div>
    );
}