import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/Userslide"

const Navbar = () => {

  const dispatch = useDispatch();
  let token = useSelector((state) => state.user.token);
  const userProfile = useSelector((state) => state.profil);
  const navigate = useNavigate();

  if (!token) {
    token = sessionStorage.getItem("token", token);
  }

  const handleLogout = () => {
      // Supprimer le token
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      // Dispatch de l"action "logout" pour supprimer le token
      dispatch(logout());
      // Retourner à l'acceuil
      navigate("/");
  };

  return (
    <nav className="nav-section">
        <div>
                {token ? (
                    // Afficher "Sign Out" si l"utilisateur est connecté
                    <>
                    <Link to="/user" className="nav-section__link">
                        <i className="fa fa-user-circle nav-section__icone"></i>
                        {userProfile.userName}
                    </Link>
                    <Link to="/" onClick={handleLogout} className="nav-section__link">
                        <i className="fa fa-sign-out nav-section__icone"></i>
                        Sign Out
                    </Link>
                    </>
                ) : (
                    // Sinon, afficher "Sign In" si l"utilisateur n"est pas connecté
                    <Link to="/sign-in" className="nav-section__link">
                        <i className="fa fa-user-circle nav-section__icone"></i>
                        Sign In
                    </Link>                
                )}
                </div>
    </nav>
  );
};

export default Navbar;
