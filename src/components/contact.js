const submitForm = (e, formData) => {
  e.preventDefault();
  alert("hello world!");
  return fetch("/email.php", {
    body: JSON.stringify(formData),
    method: "POST"
  }).then(response => {
    console.log(response);
    alert("form submitted!");
  });
};

const form = document.getElementById("contact-form");
const formData = new FormData(form);
form.addEventListener("submit", e => submitForm(e, formData));
