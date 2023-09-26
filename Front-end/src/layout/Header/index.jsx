import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/argentBankLogo.webp"
import Navbar from "../Navbar"

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