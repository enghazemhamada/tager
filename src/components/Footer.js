import "./footer.css";

export default function Footer() {
    return(
        <div className="footer">
            <div className="container">
                <div className="box">
                    <h4>About</h4>
                    <ul>
                        <li>Who We Are</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="box">
                    <h4>Help</h4>
                    <ul>
                        <li>Support</li>
                        <li>Help Center</li>
                    </ul>
                </div>
                <div className="box">
                    <h4>Contact</h4>
                    <ul>
                        <li>Terms & Condition</li>
                        <li>Return & Exchange Policy</li>
                    </ul>
                </div>
                <div className="box">
                    <h4>Follow Us</h4>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
            <div className="capyRight">
                <p>©2024 <span>Tager</span> All Right Reserved</p>
                <span>Hazem Hamada</span>
            </div>
        </div>
    );
}