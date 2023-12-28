document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded');
    // Récupération de la liste des textes
    try{
        console.log('DOMContentLoaded-----------------');
        var  typed = new Typed(".text_profession",{
            strings: [ "Developpeur Full-stack","Comptabe","Artisan"],
            typeSpeed: 100,
            backSpeed:100,
            backDeplay:1000,
            loop:true
        });
        
        // Obtenez l'élément représentant la compétence en HTML
const skillPerHTML = document.querySelector('.skill-per');

// Simulez une progression de 0 à 100% sur une période de temps
let currentPercentage = 0;

const increment = 1; // L'incrémentation à chaque intervalle de temps

const interval = setInterval(() => {
    if (currentPercentage >= 80) {
        clearInterval(interval);
    } else {
        currentPercentage += increment;
        skillPerHTML.setAttribute('per', `${currentPercentage}%`);
        skillPerHTML.style.maxWidth = `${currentPercentage}%`;
    }
}, 50); // L'intervalle de temps en millisecondes

// ::::::::::::::::::::::::flutter::::::

// ------competences circle ----------------------------------
let number = document.getElementById("numbers");
let count = 0;
setInterval(()=>{
    if(count === 80){
        clearInterval();
    }else{
        count += 1;
        number.innerHTML = count + "%";
    }
   

}, 30);
// :::::::::::::::css

let cssPoucentage = document.getElementById("cssPoucentage");
let countCss = 0;
setInterval(()=>{
    if(countCss === 50){
        clearInterval();
    }else{
        countCss += 1;
        cssPoucentage.innerHTML = countCss + "%";
    }
   

}, 30);
// ::::::::::::::: javascript


let javascriptPourcentage = document.getElementById("javascriptPourcentage");
let countjs = 0;
setInterval(()=>{
    if(countjs === 40){
        clearInterval();
    }else{
        countjs += 1;
        javascriptPourcentage.innerHTML = countjs + "%";
    }
   

}, 30);
// ::::::::::::::: java
let javaPoucentage = document.getElementById("javaPoucentage");
let countjv = 0;
setInterval(()=>{
    if(countjv === 50){
        clearInterval();
    }else{
        countjv += 1;
        javaPoucentage.innerHTML = countjv + "%";
    }
   

}, 30);
// ::::::::::::::: angluar
let angularPoucentage = document.getElementById("angularPoucentage");
let countAg = 0;
setInterval(()=>{
    if(countAg === 65){
        clearInterval();
    }else{
        countAg += 1;
        angularPoucentage.innerHTML = countAg + "%";
    }
   

}, 30);
// ::::::::::::::: ionic
let ionicPourcentage = document.getElementById("ionicPourcentage");
let countIo = 0;
setInterval(()=>{
    if(countIo === 60){
        clearInterval();
    }else{
        countIo += 1;
        ionicPourcentage.innerHTML = countIo + "%";
    }
   

}, 30);
// ::::::::::::::: flutter
let flutterPourcentage = document.getElementById("flutterPourcentage");
let countFl = 0;
setInterval(()=>{
    if(countFl === 90){
        clearInterval();
    }else{
        countFl += 1;
        flutterPourcentage.innerHTML = countFl + "%";
    }
   

}, 30);
// ::::::::::::::: dart
let dartPourcentage = document.getElementById("dartPourcentage");
let countDt = 0;
setInterval(()=>{
    if(countDt === 75){
        clearInterval();
    }else{
        countDt += 1;
        dartPourcentage.innerHTML = countDt + "%";
    }
   

}, 30);
// ::::::::::::::: wordpress
let wordpressPourcentage = document.getElementById("wordpressPourcentage");
let countWp = 0;
setInterval(()=>{
    if(countWp === 90){
        clearInterval();
    }else{
        countWp += 1;
        wordpressPourcentage.innerHTML = countWp + "%";
    }
   

}, 30);
// ::::::::::::::::::;;figma
let figmaPourcentage = document.getElementById("figmaPourcentage");
let countFg = 0;
setInterval(()=>{
    if(countFg === 80){
        clearInterval();
    }else{
        countFg += 1;
        figmaPourcentage.innerHTML = countFg + "%";
    }
   

}, 30);
    }catch (e) {
        console.log(e.message + ": " + "une erreur se produit");
    }
// --------------conctact----
const btn = document.getElementById('button');

document.getElementById('myForm')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Envoie...';

   const serviceID = 'default_service';
   const templateID = 'template_rie8vko';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Envoyer';
      alert('Message Envoyé avec succés!');
      form.reset();
    }, (err) => {
      btn.value = 'Envoyer';
      alert(JSON.stringify(err));
    });
});

// Sélectionnez votre footer
const footer = document.querySelector('footer');

// Créez une nouvelle instance de IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      footer.classList.add('active'); // Ajoutez la classe 'active' lorsque le footer est dans la vue
      observer.unobserve(entry.target); // Arrêtez d'observer une fois que c'est fait
    }
  });
});

// Démarrez l'observation du footer
observer.observe(footer);


 });