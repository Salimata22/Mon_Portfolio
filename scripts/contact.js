// Initialiser EmailJS

// Lorsque le formulaire est soumis

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche le rechargement de la page à la soumission du formulaire

    // Récupérer les valeurs des champs du formulaire
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value; // Récupérer l'email
    const functionTitle = document.getElementById("function").value;
    const company = document.getElementById("company").value;
    const message = document.getElementById("message").value;

    // Créer un objet avec les données du formulaire
    const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email, // Inclure l'email
      function: functionTitle,
      company: company,
      message: message,
    };

    // Envoi de l'email via EmailJS
    emailjs.send("service_mt5w91a", "template_5azfq3d", formData).then(
      function (response) {
        // Affichage du message de succès
        const responseMessage = document.getElementById("response-message");
        responseMessage.innerHTML = `<p>Merci, ${firstName} ${lastName}, pour votre message. Nous reviendrons vers vous dans les plus brefs délais !</p>`;

        // Réinitialiser le formulaire
        document.getElementById("contact-form").reset();
      },
      function (error) {
        // En cas d'erreur
        const responseMessage = document.getElementById("response-message");
        responseMessage.innerHTML = `<p>Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer plus tard.</p>`;
      }
    );
  });
