import { Mail } from "lucide-react"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-top">
          <div className="logo">
            <h2>PILPROGRAM</h2>
          </div>
          <nav className="navigation">
            <ul>
              <li>
                <a href="/" className="nav-link active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link">
                  About us
                </a>
              </li>
              <li>
                <a href="#products"  className="nav-link">
                  Products
                </a>
              </li>
              <li>
                <a  href="#contact" className="nav-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <div className="copyright">
            <p>© 2024 — Copyright</p>
          </div>
          <div className="contact-email">
            <Mail className="mail-icon" size={18} />
            <a href="mailto:pilprogramcorp@gmail.com">pilprogramcorp@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

