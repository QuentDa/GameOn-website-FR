// DOM Elements
const firstname = document.querySelector("#first");
const lastname = document.querySelector("#last");
const mail = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const tournaments = document.querySelector("#quantity");
const locations = document.querySelectorAll("input[name='location']");
const cgu = document.querySelector("#checkbox1");

const validateBtn = document.querySelector(".btn-submit");
const form = document.querySelector('form');

//Création de fonction pour preventdefault le bouton submit
form.addEventListener('submit', function (e){
    e.preventDefault();
    let removeError = document.querySelectorAll('.errorDiv');
    removeError.forEach(error => {
        error.remove();
    })
    validate();
});

// regex to verify email
const checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

console.log(locations);
// on click submit button
function validate () {
    let errors = 0;
    if (firstname.value.length < 2) {
        let error = document.createElement('div');
        error.className = 'errorDiv';
        firstname.parentNode.appendChild(error);
        error.innerHTML = "Merci de renseigner votre prénom";
        errors++;
    }
    if (lastname.value.length < 2){
        let error = document.createElement('div');
        error.className = 'errorDiv';
        lastname.parentNode.appendChild(error);
        error.innerHTML = "Merci de renseigner nom de famille";
        errors++;
    }
    if (!checkEmail.test(mail.value)) {
        //ne rentre pas dedans car l'HTML5 prend le dessus, fonctionne en type text
        let error = document.createElement('div');
        error.className = 'errorDiv';
        mail.parentNode.appendChild(error);
        error.innerHTML = "Le format de l'e-mail n'est pas correct";
        errors++;
    }
    if (birthdate.value == ''){
        let error = document.createElement('div');
        error.className = 'errorDiv';
        birthdate.parentNode.appendChild(error);
        error.innerHTML = "Vous n'avez pas rempli votre date de naissance";
        errors++;
    }
    if (isNaN(tournaments.value) || tournaments.value == ''){
        //ne rentre pas dedans car l'HTML5 prend le dessus, fonctionne en type text
        let error = document.createElement('div');
        error.className = 'errorDiv';
        tournaments.parentNode.appendChild(error);
        error.innerHTML = "Le nombre n'est pas correct";
        errors++;
    }
    let isChecked = false;
    locations.forEach(location => {
        if (location.checked){
            isChecked = true;
        }
    })
    if (!isChecked){
        let error = document.createElement('div');
        error.className = 'errorDiv';
        locations[0].parentNode.appendChild(error);
        error.innerHTML = "Vous n'avez rien coché";
        errors++;
    }
    let cguChecked = false;
    if (cgu.checked){
        cguChecked = true;
    }
    if (!cguChecked){
        let error = document.createElement('div');
        error.className = 'errorDiv';
        cgu.parentNode.appendChild(error);
        error.innerHTML = "Merci de lire et accepter les cgus";
        errors++;
    }

    if (errors === 0){
        closeModal();
        let alertsuccess = document.querySelector('.alertsuccess');
        alertsuccess.style.opacity = 1;

        setTimeout(function (){
            alertsuccess.style.opacity = 0;
        }, 2300)
    }
}
