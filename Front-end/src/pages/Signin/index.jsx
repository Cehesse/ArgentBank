import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { callAPI } from "../../api"
import { setToken, setError } from "../../redux/Userslide";

function Signin() {

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector((state) => state.user.error);
  const navigate = useNavigate();
  let token = useSelector((state) => state.user.token);

  if (!token) {
    token = sessionStorage.getItem("token", token);
  }

  useEffect(() => {
    if (token) {
      // Redirige vers la page User si token
      return navigate("/user");
      ;
    }
  });

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
        const response = await callAPI("login", null, {
          email: email,
          password: password,
        });        
        const token = response.body.token; // Extrait le token de la réponse API
        // Dispatch l'action setToken avec le token récupéré pour mettre à jour le state si Remenber me est cocher
        if (document.getElementById("remember-me").checked) {
          dispatch(setToken(token));
        } else {
          sessionStorage.setItem("token", token);
        }
        // Effectuer la redirection manuelle vers la page User après la connexion réussie
        navigate("/user");
      } catch (error) {
        dispatch(setError("Email ou mot de passe incorrect."));
      }
 ;}

    return (
      <div className="pages">
        <main className="bg-dark">
          <section className="section-sign-in">
            <i className="fa fa-user-circle section-sign-in_icon"></i>
            <h2 className="section-sign-in_title">Sign In</h2>
            <form onSubmit={handleSignIn}>
              <div className="section-sign-in_input-wrapper">
                <label htmlFor="email">Username</label>
                <input 
                  type="text" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="section-sign-in_input-wrapper">
                <label htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              <div className="section-sign-in_input-remember">
              <input
                type="checkbox"
                id="remember-me"
                />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <button className="section-sign-in_button" id="connect" type="submit" >
                <span>Sign In</span>
              </button>
            </form>
            <div className="section-sign-in_input-error">
              {error && <p>{error}</p>}
            </div>
          </section>
        </main>
      </div>
    )
  }

  export default Signin