import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profilUser } from "../../redux/Profilslide";
import { callAPI } from "../../api";

function Modal() {
    const [modal, setModal] = useState(false);
    const [isButtonHidden, setIsButtonHidden] = useState(false);
    let token = useSelector((state) => state.user.token);
    const userProfile = useSelector((state) => state.profil);
    const [useName, setUseName] = useState(userProfile.userName);
    const dispatch = useDispatch();

    if (!token) {
        token = sessionStorage.getItem("token", token);
      }

    const toggleModalOpen = () => {
        setModal(!modal);
        setIsButtonHidden(true);
    }

    const toggleModalClose = () => {
        setModal(!modal);
        setIsButtonHidden(false);
    }

    const userNameChange = async (e) => {
        e.preventDefault();
        try {
            const data = await callAPI ("profilePut", token, {userName: useName});
            dispatch(profilUser({data}));
            setUseName(useName);
            toggleModalClose();
        } catch (error) {
            console.log (error, "Erreur à l'appel d'API pour le changement d'Username");
        }
    }

    return (
        <>
        {!isButtonHidden && ( 
        <>
        <h2 className="section-user_title">Welcome back</h2>
        <p className="section-user_user">{userProfile.firstName} {userProfile.lastName} !</p>
        <button className="button--green" onClick={toggleModalOpen}>Edit Name</button>
        </>
        )}
        {modal && (
            <div className="modal">
                    <h3 className="modal_title">Edit user info</h3>
                    <form className="modal_form" onSubmit={userNameChange}>
                        <div className="modal_input-wrapper">
                            <label htmlFor="username">User name :</label>
                            <input 
                            type="text" 
                            id="username" 
                            value={useName}
                            onChange={(e) => setUseName(e.target.value)}
                            />
                         </div>
                         <div className="modal_input-wrapper">
                         <label htmlFor="firstname">First name :</label>
                            <input 
                            type="text" 
                            id="firstname" 
                            value={userProfile.firstName}
                            disabled="disabled"
                            />
                         </div>
                         <div className="modal_input-wrapper">
                         <label htmlFor="lastname">Last name :</label>
                            <input 
                            type="text" 
                            id="lastname" 
                            value={userProfile.lastName}
                            disabled="disabled"
                            />
                         </div>
                         <div className="modal_buttons">
                            <button className="button--green modal_button" id="connect" type="submit">Save</button>
                            <button className="button--green modal_button" onClick={toggleModalClose}> Cancel </button>
                         </div>
                        
                    </form>
                </div>
        )}
        </>
    );
}

export default Modal;