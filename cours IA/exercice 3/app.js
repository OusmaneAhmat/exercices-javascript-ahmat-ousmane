// Tableau contenant les chemins des images
const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    // Ajoutez ici d'autres noms de fichiers d'images que vous souhaitez afficher
];

// Fonction pour générer un nombre aléatoire entre 0 et la longueur du tableau d'images
function getRandomIndex() {
    return Math.floor(Math.random() * images.length);
}

// Fonction pour afficher une image aléatoire
function displayRandomImage() {
    // Sélectionne l'élément image dans le DOM
    const imageElement = document.getElementById("random-image");
    // Génère un index aléatoire
    const randomIndex = getRandomIndex();
    // Récupère le chemin de l'image correspondant à l'index aléatoire
    const randomImagePath = images[randomIndex];
    // Met à jour l'attribut src de l'élément image avec le chemin de l'image aléatoire
    imageElement.src = randomImagePath;
}

// Appelle la fonction pour afficher une image aléatoire au chargement de la page
displayRandomImage();
