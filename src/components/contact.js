const submitForm = e => {
  e.preventDefault();

  let formData = new FormData(form);

  let formToJSON = {};

  // turn the form data into a json object
  for (const [key, value] of formData.entries()) {
    formToJSON[key] = value;
  }

  console.log(formToJSON);

  return fetch('/email.php', {
    body: JSON.stringify(formToJSON),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  }).then(response => {
    console.log(response);
  });
};

const form = document.getElementById('contact-form');
form.addEventListener('submit', e => submitForm(e));
