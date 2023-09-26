import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { profilUser } from "../../redux/Profilslide";
import { callAPI } from "../../api";
import Bankaccount from "../../components/Bankaccount";
import Modal from "../../components/Modal";
import Button from "../../components/Button";

function User() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);
    const userProfile = useSelector((state) => state.profil);
    const navigate = useNavigate();

    useEffect(() => {
      if (!token) {
        // Redirige vers la page d"accueil si pas de token
        return navigate("/");
        ;
      }
    });

    useEffect(() => {
        // récupérer les données de l"utilisateur
        const dataUser = async () => {
            try {
                const data = await callAPI ("profilePost", token, {});
                dispatch(profilUser({data}));
            } catch (error) {
                console.log (error, "Erreur à l'appel d'API");
            }
        };
        dataUser(); 
    });
    
    return (
      <div className="pages">
        <main className="main bg-dark2">
          {userProfile ? (
              <div className="header">
              <h2>Welcome back<br />{userProfile.firstName} {userProfile.lastName} !</h2>
              <Modal />
              </div>
          ) : (
              <div className="header">
              <h1>Welcome back!</h1>
              <Button text="Edit name" />
              </div>
          )}
          <h3 className="sr-only">Accounts</h3>
          <Bankaccount />
          </main>
        </div>
    );
  }

export default User;