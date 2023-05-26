document.getElementById('form').addEventListener('submit', submitForm);

function submitForm(event){
   event.preventDefault()
   const fields = document.querySelectorAll('form .form-control');
   const fieldValues = Array.from(fields).map((field) => field.value);
console.log(fieldValues);
}


