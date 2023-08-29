//REACT
import { Link } from "react-router-dom";

//FCT
export default function Navbar() {
	return (
		<nav className="nav-section">
			<Link to="/" className="nav-section__link">Accueil</Link>
			<Link to="/about" className="nav-section__link">A Propos</Link>
		</nav>
	);
}