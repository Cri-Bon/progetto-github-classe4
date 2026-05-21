const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(event){

  event.preventDefault();

  const name = document.getElementById("name").value;

  successMessage.innerHTML =
    "Grazie " + name + "! La tua richiesta è stata inviata con successo.";

  form.reset();
  // FAQ ACCORDION
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    // chiude tutte le altre FAQ
    faqItems.forEach(faq => {

      if(faq !== item){
        faq.classList.remove("active");
      }

    });

    // apre/chiude quella cliccata
    item.classList.toggle("active");

  });

});
});
