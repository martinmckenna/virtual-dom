const submitForm = (e, form) => {
  e.preventDefault();

  let formData = new FormData(form);
  formData.append("name", document.getElementById("input-name").value);
  formData.append("email", document.getElementById("input-email").value);
  formData.append("desc", document.getElementById("input-desc").value);

  return fetch("/email.php", {
    body: formData,
    method: "POST"
  }).then(response => {
    console.log(response);
  });
};

const form = document.getElementById("contact-form");
form.addEventListener("submit", e => submitForm(e, form));
