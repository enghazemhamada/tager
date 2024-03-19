import { faFacebookF, faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactSection() {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return(
        <div className="contactSection">
            <div className="container">
                <div className="info">
                    <h3>Get In Touch</h3>
                    <p>We are always waiting for your order and prepare it as quickly as possible.</p>
                    <h5>Phone</h5>
                    <span>0123456789</span>
                    <span>0123456789</span>
                    <h5>Email</h5>
                    <span>tager@gmail.com</span>
                    <h5>Social Media</h5>
                    <ul>
                        <li><FontAwesomeIcon icon={faFacebookF} /></li>
                        <li><FontAwesomeIcon icon={faXTwitter} /></li>
                        <li><FontAwesomeIcon icon={faInstagram} /></li>
                        <li><FontAwesomeIcon icon={faYoutube} /></li>
                    </ul>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <input className="input" type="text" name="name" placeholder="Your Name" />
                    <input className="input" type="email" name="email" placeholder="Your Email" />
                    <input className="input" type="text" name="phone" placeholder="Your Phone" />
                    <textarea className="input" name="message" placeholder="Your Message"></textarea>
                    <input className="submit" type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
}