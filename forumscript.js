document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('num').value;
    const message = document.getElementById('message').value;

    const now = new Date();
    const dateStr = now.toLocaleString('fr-FR');

    const textContent = `
===========================================
📋 NOUVEAU MESSAGE - ${dateStr}
===========================================
Nom        : ${nom}
Prénom     : ${prenom}
Email      : ${email}
Téléphone  : ${telephone}
Message    : ${message}
===========================================
`;

    // SEND FILE CONTENT BY EMAIL
    emailjs.send("service_ayduqyi", "template_3im54ag", {
        nom: nom,
        prenom: prenom,
        email: email,
        telephone: telephone,
        message: message,
        date: dateStr,
        file_content: textContent
    })
    .then(function() {
        document.getElementById('confirmationMessage').style.display = 'block';
        document.getElementById('contactForm').reset();
        setTimeout(() => {
            document.getElementById('confirmationMessage').style.display = 'none';
        }, 5000);
    })
    .catch(function(error) {
        console.error("Erreur EmailJS:", error);
        alert("Erreur lors de l'envoi de l'email.");
    });
});
