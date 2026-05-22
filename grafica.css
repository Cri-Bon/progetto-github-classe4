const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // input
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const service = document.getElementById("service");
  const message = document.getElementById("message");

  // reset messaggi
  successMessage.innerHTML = "";
  document.querySelectorAll(".error").forEach(el => el.remove());

  let isValid = true;

  // VALIDAZIONE NOME
  if (name.value.trim() === "") {
    showError(name, "Inserisci il tuo nome");
    isValid = false;
  }

  // VALIDAZIONE EMAIL
  if (email.value.trim() === "") {
    showError(email, "Inserisci la tua email");
    isValid = false;
  }

  // VALIDAZIONE SERVIZIO
  if (service.value === "") {
    showError(service, "Seleziona un servizio");
    isValid = false;
  }

  // VALIDAZIONE MESSAGGIO
  if (message.value.trim() === "") {
    showError(message, "Scrivi un messaggio");
    isValid = false;
  }

  // SUCCESSO
  if (isValid) {
    successMessage.innerHTML =
      "Grazie " + name.value + "! La tua richiesta è stata inviata con successo.";

    successMessage.style.color = "green";

    form.reset();
  }
});

// funzione errore
function showError(input, message) {
  const error = document.createElement("p");
  error.className = "error";
  error.innerText = message;

  error.style.color = "red";
  error.style.fontSize = "14px";
  error.style.marginTop = "-15px";
  error.style.marginBottom = "15px";

  input.insertAdjacentElement("afterend", error);
}
