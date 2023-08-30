//REACT
import { Link } from "react-router-dom";

//IMG
import Logo from "../../assets/img/argentBankLogo.webp"

//LAYOUT
import Navbar from "../Navbar"

//FCT
export default function Header() {
	return (
		<header className="header-section">
			<Link className="header-section__logo" to="/">
    		<img
          	className="header-section__logo-image"
          	src={Logo}
          	alt="Argent Bank Logo"
        	/>
        	<h1 className="nav-section__title">Argent Bank</h1>
      		</Link>
			<Navbar />
		</header>
	)
}