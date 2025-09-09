function envoyerMessage() {
    let prenom = document.getElementById("prenom_form").value.trim();
    let nom = document.getElementById("nom_form").value.trim();
    let message = document.getElementById("message").value.trim();

    if (prenom === "") {
        alert("⚠️ Veuillez saisir votre prénom !");
    } 
    else if (nom === "") {
        alert("⚠️ Veuillez saisir votre nom !");
    } 
    else if (message === "") {
        alert("⚠️ Veuillez saisir votre message !");
    } 
    else {
        alert("✅ Votre message a bien été envoyé. Merci pour votre prise contact !");
    }
}