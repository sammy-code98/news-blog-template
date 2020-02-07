const myEmail = document.getElementById('newsEmail');
// validator
const emailValidator = document.getElementById('emailVal');
// now the funtion validator
function validate() {
    if (myEmail.value) {
        document.querySelector('.submitBtn').type = 'submit';
    } else {
        if (myEmail.value == '' || myEmail.value == undefined) {
            emailValidator.style = "display:block"
        } else if (myEmail.value !== null) {
            emailValidator.style = "display:none"
        }

    }
}