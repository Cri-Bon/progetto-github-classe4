const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(event){

  event.preventDefault();

  const name = document.getElementById("name").value;

  successMessage.innerHTML =
    "Grazie " + name + "! La tua richiesta è stata inviata con successo.";

  form.reset();
});
