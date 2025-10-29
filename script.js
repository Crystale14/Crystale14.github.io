const translations = {
    "header_title": {
        en: "My Projects",
        fr: "Mes Projets"
    },

    "lang_btn": {
        en: "FR",
        fr: "EN"
    },

    "project1_title": { 
      en: "Greyscale image coloration", 
      fr: "Colorisation d'image en niveaux de gris" 
    },

    "project1_description": { 
      en: "This project consisted in creating models to predict the colors of greyscale images following the CIELAB color scheme. \n Each greyscaled image represented the L parameter and our models had to predict the a and b channels that represent colors between green and red and blue and yellow respectively. \n We trained multiple models using U-Net and GAN architectures and compared their outputs given differents training parameters.", 
      fr: "Ce projet consistait à créer des modèles pour prédire les couleurs d'images en niveaux de gris en suivant le schéma de couleurs CIELAB. \n. Chaque image en niveaux de gris représentait le paramètre L et nos modèles devaient prédire les paramètres a et b qui représentent respectivement des couleurs entre le vert et le rouge et entre le bleu et le jaune. \n Nous avons entrainé plusieurs modèles suivant les architectures U-Net et GAN et nous avons comparé les résultats obtenus selons les différents paramètres d'entrainement." 
    },

    "project2_title": { 
      en: "Base game engine creation", 
      fr: "Création d'un moteur graphique basique" 
    },
    "project2_description": { 
      en: "In this project, I created a basic game engine from scratch in Python. \n This engine allowed for : \n - Perspective and orthographic projections \n - Wireframe and solid display  \n - Translation, rotation and scaling using transformation matrices \n - The rotations were displayed under different forms: Euler angles, Exponential map and Quaternions \n - LERP and SLERP to return to the initial state \n - Camera movement (translation, rotation)  \n - Lighting using the diffuse lighting model  \n - Backface culling to prevent artefacts ", 
      fr: "Dans ce projet, j'ai créé un moteur graphique basique en Python. \n Ce moteur permet d'avoir : \n Une projection perspective ou orthographique \n - Un affichage en fil de fer ou solide \n - Translation, rotation et mise à l'échelle à l'aide de matrices de transformation \n - Les rotations sont affichées sous différentes formes: angles d'Euler, application exponentielle et quaternions \n - LERP et SLERP pour retourner à l'état initial \n - Le déplacement de la caméra (translation et rotation) \n - Éclairage utilisant le modèle d'éclairage diffus \n - Élimination des faces arrière (backface culling) pour éviter les artefacts" 
    },

    "project3_title": { 
      en: "Full website with connexion to an external HMI", 
      fr: "Site web complet avec connexion à une IHM externe" 
    },
    "project3_description": { 
      en: "This was a project I did for an internship, where I had to setup a website to centralize the informations about clients' vehicles and to display and connect to an external HMI. \n The website also allowed the user to sort and save informations given by the numerous sensors on the vehicles to help in doing preventive maintenance.", 
      fr: "Ce projet est un projet que j'ai effectué durant un stage, durant celui j'ai créé et mis en place un site web pour centraliser les informations des véhicules des clients et pour afficher et se connecter à une IHM externe: \n Ce site permet également à l'utlisateur de trier et sauvegarder les informations reçues des nombreux capteurs du véhicule pour aider à effectuer de la maintenance préventive." 
    },
    
};

let currentLang = "en";

document.getElementById("lang_btn").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "fr" : "en"; 

    document.getElementById("header_title").textContent = translations.header_title[currentLang];
    document.getElementById("lang_btn").textContent = translations.lang_btn[currentLang];
    document.getElementById("project1_title").textContent = translations.project1_title[currentLang];
    document.getElementById("project1_description").textContent = translations.project1_description[currentLang];
    document.getElementById("project2_title").textContent = translations.project2_title[currentLang];
    document.getElementById("project2_description").textContent = translations.project2_description[currentLang];
    document.getElementById("project3_title").textContent = translations.project3_title[currentLang];
    document.getElementById("project3_description").textContent = translations.project3_description[currentLang];
});

