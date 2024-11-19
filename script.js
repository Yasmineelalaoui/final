// Fonction pour mettre à jour l'affichage principal lorsque l'utilisateur survole ou se concentre sur une image
function updateImage(previewPic) {
    const display = document.getElementById("image-display");
    display.style.backgroundImage = `url(${previewPic.src})`;
    display.style.backgroundSize = "cover";
    display.style.height = "200px";
    display.style.color = "white";
    display.innerText = previewPic.alt;
    console.log("Événement déclenché pour : ", previewPic.alt);
}

// Fonction pour réinitialiser l'affichage principal
function resetImage() {
    const display = document.getElementById("image-display");
    display.style.backgroundImage = "none";
    display.style.color = "black";
    display.innerText = "Survolez une image pour la voir ici";
}

// Fonction exécutée au chargement pour ajouter les attributs tabindex
function addTabFocus() {
    const images = document.querySelectorAll(".gallery img");
    images.forEach((img, index) => {
        img.setAttribute("tabindex", index + 1);
        console.log(`Attribut tabindex ajouté pour : ${img.alt}`);
    });
}
