import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { profilUser } from "../../redux/Profilslide";
import { callAPI } from "../../api";
import Bankaccount from "../../components/Bankaccount";
import Modal from "../../components/Modal";

function User() {
    const dispatch = useDispatch();
    let token = useSelector((state) => state.user.token);
    const navigate = useNavigate();

    if (!token) {
      token = sessionStorage.getItem("token", token);
      ;
    }

    useEffect(() => {
      if (!token) {
        // Redirige vers la page d'accueil si pas de token
        return navigate("/sign-in");
        ;
      }
    });

    useEffect(() => {
        // récupérer les données de l'utilisateur
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
        <main className="bg-dark">
          <section className="section-user">
            <div className="section-user_profil">
                <Modal />
            </div>
            <div className="section-user_accounts">
              <Bankaccount />
            </div>
          </section>
        </main>
      </div>
    );
  }

export default User;