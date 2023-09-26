import { createSlice } from "@reduxjs/toolkit";

// Créez un slice nommé "profil" pour gérer les données du profil utilisateur
const profilSlice = createSlice({
  name: "profil",
  initialState: {
    email: "",
    firstName: "",
    lastName: "",
    userName: "",
  },
  reducers: {
    // Définissez une action "profilUser" qui met à jour l'état du profil en fonction des données fournies
    profilUser: (state, action) => {
      state.email = action.payload.data.body.email; // Met à jour l'e-mail
      state.firstName = action.payload.data.body.firstName; // Met à jour le prénom
      state.lastName = action.payload.data.body.lastName; // Met à jour le nom de famille
      state.userName = action.payload.data.body.userName; // Met à jour le nom d'utilisateur
    },
  },
});

// Exportez l'action "profilUser" en tant que membre du slice pour l'utiliser ailleurs
export const { profilUser } = profilSlice.actions;

// Exportez également le réducteur du slice pour l'ajouter à votre store Redux
export default profilSlice.reducer;
