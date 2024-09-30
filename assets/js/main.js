/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*=============== When the user scrolls the page, execute myFunction==============*/
window.onscroll = function() {myFunction()};
            
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Contact Us

// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const location = document.getElementById('location');
// const message = document.getElementById('message');

// form.addEventListener('submit', e => {
//   e.preventDefault();

//   checkInputs();
// });

// function checkInputs() {
//   // trim to remove the whitespaces
//   const nameValue = username.value.trim();
//   const emailValue = email.value.trim();
//   const locationValue = location.value.trim();
//   const messageValue = message.value.trim();

//   if (nameValue === '') {
//     setErrorFor(username, 'Username cannot be blank');
//   } else {
//     setSuccessFor(username);
//   }

//   if (emailValue === '') {
//     setErrorFor(email, 'Email cannot be blank');
//   } else if (!isEmail(emailValue)) {
//     setErrorFor(email, 'Not a valid email');
//   } else {
//     setSuccessFor(email);
//   }

//   if (locationValue === '') {
//     setErrorFor(location, 'Location cannot be blank');
//   } else {
//     setSuccessFor(location);
//   }

//   if (messageValue === '') {
//     setErrorFor(message, 'Message cannot be blank');
//   } else {
//     setSuccessFor(message);
//   }
// }

// function setErrorFor(input, text) {
//   const formControl = input.parentElement;
//   const small = formControl.querySelector('small');
//   formControl.className = 'form-control error';
//   small.innerText = text;
// }

// function setSuccessFor(input) {
//   const formControl = input.parentElement;
//   formControl.className = 'form-control success';
// }

// function isEmail(email) {
//   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     email
//   );
// }

