document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const popupText = document.getElementById("popup-text");
  let hideTimeout; // Variable pour gérer le timeout
  let activeCard = null; // Pour suivre la carte actuellement cliquée

  // Les textes associés à chaque carte
  const cardTexts = {
    card3:
      "J'ai le courage d'affronter des défis, de sortir de ma zone de confort, et de faire face à l'incertitude avec optimisme.",
    card4:
      "Je crois toujours en un avenir meilleur. Mon attitude positive m'aide à surmonter les moments difficiles.",
    card6:
      "La patience est l'une de mes qualités principales, elle me permet d'attendre le bon moment et de persévérer avec calme.",
  };

  // Fonction pour afficher le texte et animer la carte
  function showText(text, card) {
    clearTimeout(hideTimeout); // Annuler tout timeout actif
    popupText.textContent = text; // Mettre à jour le contenu
    popupText.style.display = "block"; // Afficher le texte

    // Réinitialiser la carte précédente si elle existe
    if (activeCard) {
      activeCard.classList.remove("clicked");
      activeCard.style.backgroundColor = ""; // Restaurer la couleur d'origine
    }

    // Mettre à jour la carte active
    activeCard = card;

    // Ajouter une classe pour l'animation et changer la couleur de fond
    card.classList.add("clicked");
    card.style.backgroundColor = "#91def8"; // Même couleur que le texte de fond

    // Lancer un timeout pour masquer le texte et réinitialiser la carte après 10 secondes
    hideTimeout = setTimeout(function () {
      hideText();
    }, 8000);
  }

  // Fonction pour masquer le texte et réinitialiser la carte
  function hideText() {
    clearTimeout(hideTimeout); // Annuler le timeout actif
    popupText.style.display = "none"; // Masquer le texte

    // Réinitialiser la carte active si elle existe
    if (activeCard) {
      activeCard.classList.remove("clicked");
      activeCard.style.backgroundColor = ""; // Restaurer la couleur d'origine
      activeCard = null;
    }
  }

  // Positionner les cartes
  const positions = [
    { left: "70%", top: "20%" },
    { left: "60%", top: "60%" },
    { left: "50%", top: "20%" },
  ];

  cards.forEach((card, index) => {
    const position = positions[index];
    card.style.position = "absolute";
    card.style.left = position.left;
    card.style.top = position.top;
    // Appliquer l'animation de clignotement à chaque carte
    card.classList.add("clignote");

    // Ajouter un événement de clic pour chaque carte
    cards.forEach((card) => {
      card.addEventListener("click", function () {
        const text = cardTexts[card.id];
        if (text) {
          showText(text, card);
        }
      });
    });

    // Cacher le texte si on clique ailleurs
    document.addEventListener("click", function (event) {
      if (!event.target.closest(".card")) {
        hideText();
      }
    });

    // Cacher le texte si on clique ailleurs
    document.addEventListener("click", function (event) {
      if (!event.target.closest(".card")) {
        hideText();
      }
    });
  });

  // Texte pour l'animation
  const nameText = "Je suis Salimata TOGO";
  const statusText = "Étudiante en MASTER 1 MIAGE";

  // Cible les éléments
  const nameElement = document.querySelector(".name h2");
  const statusElement = document.querySelector(".name p");
  const iconElements = document.querySelectorAll(".contact-icons a img");

  // Fonction pour afficher le texte lettre par lettre
  const typeText = (element, text, delay, callback) => {
    element.textContent = ""; // Réinitialise le contenu de l'élément
    let index = 0;

    const interval = setInterval(() => {
      element.textContent += text[index]; // Ajoute une lettre
      index++;

      if (index === text.length) {
        clearInterval(interval); // Arrête quand tout le texte est affiché
        if (callback) callback(); // Appelle le callback (suivant) si défini
      }
    }, delay); // Délai entre chaque lettre
  };

  // Fonction pour afficher les icônes une par une
  const showIcons = (icons) => {
    icons.forEach((icon, i) => {
      setTimeout(() => {
        icon.classList.add("show"); // Ajoute la classe CSS "show"
      }, i * 300); // Délai entre les icônes
    });
  };

  // Lancer l'animation
  window.onload = () => {
    typeText(nameElement, nameText, 100, () => {
      // Affiche le nom lettre par lettre
      nameElement.style.opacity = 1; // Rendre visible après animation
      nameElement.style.transform = "translateY(0)";

      typeText(statusElement, statusText, 100, () => {
        // Affiche le statut lettre par lettre
        statusElement.style.opacity = 1; // Rendre visible après animation
        statusElement.style.transform = "translateY(0)";

        // Afficher les icônes
        showIcons(iconElements);
      });
    });
  };

  // Fonction pour afficher et cacher un box
  function toggleBox(iconSelector, boxSelector) {
    const icon = document.querySelector(iconSelector);
    const box = document.querySelector(boxSelector);

    // Montrer ou cacher la box lorsqu'on clique sur l'icône
    icon.addEventListener("click", (e) => {
      e.preventDefault();
      // Ferme tous les autres boxes avant d'ouvrir
      document
        .querySelectorAll(".contact-box")
        .forEach((el) => (el.style.display = "none"));
      box.style.display = box.style.display === "block" ? "none" : "block";
    });
  }

  // Cacher les boxes lorsqu'on clique en dehors
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".contact-icons")) {
      document
        .querySelectorAll(".contact-box")
        .forEach((el) => (el.style.display = "none"));
    }
  });

  // Activer les fonctions pour chaque icône
  toggleBox(".icon-phone", "#phone-box");
  toggleBox(".icon-email", "#email-box");
});
