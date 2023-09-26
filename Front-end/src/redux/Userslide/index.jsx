import { createSlice } from "@reduxjs/toolkit";

// État initial du slice
const initialState = {
  token: null, // Le token d'authentification (initialisé à null)
  error: null, // Les erreurs liées à l'authentification (initialisées à null)
};

// Créez le slice "user" pour gérer les actions liées à l'utilisateur
const userSlice = createSlice({
  name: "user",
  initialState, // Utilisez l'état initial défini ci-dessus
  reducers: {
    // Action pour mettre à jour le token dans le state
    setToken: (state, action) => {
      state.token = action.payload; // Met à jour le token dans le state
      // Met le token dans le localStorage lorsqu'il est mis à jour dans le state
      localStorage.setItem("token", action.payload);
    },
    // Action pour gérer les erreurs d'authentification
    setError: (state, action) => {
      state.error = action.payload; // Met à jour l'erreur dans le state
    },
    // Action pour effacer les informations lorsqu'il se déconnecte
    logout: (state) => {
      state.token = null; // Réinitialise le token à null
      state.error = null; // Réinitialise l'erreur à null
      // Supprime éventuellement le token du localStorage
      // localStorage.removeItem("token");
    },
  },
});

// Exportez les actions du slice pour les utiliser ailleurs
export const { setToken, setError, logout } = userSlice.actions;

// Exportez également le réducteur du slice pour l'ajouter à votre store Redux
export default userSlice.reducer;
