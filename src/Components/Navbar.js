import { Link } from "react-router-dom";
import "./Navbar.sass"

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar__flex">
                <li>
                    <Link to="/" className="navbar__item">Home</Link>
                </li>
                <li>
                    <Link to="/add-link" className="navbar__item">Add Link</Link>
                </li>
            </ul>
        </nav>
    )
}