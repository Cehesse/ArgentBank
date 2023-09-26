import axios from "axios";

const baseURL = "http://localhost:3001/api/v1";

// Définition des endpoints de l"API : méthode, URL et nécessité d"authentification
const apiConnect = {
    login: {
        method: "post", // Méthode HTTP POST pour la connexion
        url: "/user/login", // URL de l"endpoint de connexion
        auth: false, // Pas besoin d"authentification pour cette requête
    },
    signUp: {
        method: "post", // Méthode HTTP POST pour l"inscription
        url: "/user/signup", // URL de l"endpoint d"inscription
        auth: false, // Pas besoin d"authentification pour cette requête
    },
    profilePost: {
        method: "post", // Méthode HTTP POST pour la création de profil
        url: "/user/profile", // URL de l"endpoint de création de profil
        auth: true, // Authentification requise pour cette requête
    },
    profilePut: {
        method: "put", // Méthode HTTP PUT pour la mise à jour de profil
        url: "/user/profile", // URL de l"endpoint de mise à jour de profil
        auth: true, // Authentification requise pour cette requête
    },
};

// Fonction pour effectuer des appels à l"API
export const callAPI = async (endpoint, token, data = {}) => {
    const apiEndpoint = apiConnect[endpoint]; // Récupération des détails de l"endpoint
    if (!apiEndpoint) {
        console.error("Erreur lors de l'appel à l'API : Endpoint inconnu");
        return;
    }
    const headers = {
        "Content-Type": "application/json",
    };

    if (apiEndpoint.auth) {
        headers.Authorization = `Bearer ${token}`; // Ajout du token d"authentification si nécessaire
    }

    try {
        const response = await axios({
            method: apiEndpoint.method,
            url: `${baseURL}${apiEndpoint.url}`,
            data,
            headers,
        });
        return response.data; // Renvoie les données de la réponse
    } catch (error) {
        console.error("Erreur lors de la connexion à l'API :", error);
        throw error;
    }

};

export default callAPI;
