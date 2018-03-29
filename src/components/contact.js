const submitForm = e => {
  e.preventDefault();

  let formData = new FormData(form);

  let formToJSON = {};

  // turn the form data into a json object
  for (const [key, value] of formData.entries()) {
    jsonObject[key] = value;
  }

  return fetch('/email.php', {
    body: formToJSON,
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
