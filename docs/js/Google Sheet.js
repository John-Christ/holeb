const scriptURL = 'https://script.google.com/macros/s/AKfycbzLFOSTyTWqii4K84C14muIh-pghrLFJxDZHfWhDAmS9Q9M1IQLYlDJNHkIXOsd3MpL/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Merci! Un agent va vous contactez pour information sur votre taxi." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})