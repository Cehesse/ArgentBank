import { configureStore} from "@reduxjs/toolkit"; // Importez getDefaultMiddleware
import userReducer from "../Userslide"; // Importez le réducteur de l'utilisateur
import profilReducer from "../Profilslide"; // Importez le réducteur du profil
import storage from "redux-persist/lib/storage"; // Importez le module de stockage pour la persistance
import { persistReducer, persistStore } from "redux-persist"; // Importez persistStore
import { combineReducers } from "@reduxjs/toolkit"; // Importez la fonction combineReducers

// Configuration de la persistance avec redux-persist
const persistConfig = {
  key: "root", // Clé sous laquelle les données sont stockées dans le localStorage
  storage, // Utilisez le module de stockage pour la persistance
};

// Combinez les réducteurs de l'utilisateur et du profil en un réducteur racine
const rootReducer = combineReducers({
  user: userReducer, // Réducteur de l'utilisateur
  profil: profilReducer, // Réducteur du profil
});

// Appliquez la persistance en utilisant persistReducer pour envelopper le réducteur racine
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configurez le store Redux en utilisant configureStore de Redux Toolkit
const store = configureStore({
  reducer: persistedReducer, // Utilisez le réducteur persisté
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Désactivez la vérification de sérialisation pour éviter les avertissements
      serializableCheck: false,
    }),
});

// Créez un objet persistor pour la gestion de la persistance
export const persistor = persistStore(store); // Exportez le persistor configuré

export default store; // Exportez le store configuré
