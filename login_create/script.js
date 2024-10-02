const form_signin = document.getElementById('form_signin');
const form_signup = document.getElementById('form_signup');
const signinbtn=document.getElementById('signinbtn');
const signupbtn=document.getElementById('signupbtn');

signinbtn.addEventListener('click', form_signinfun);

function form_signinfun(){
    form_signin.style.display="block";
    form_signup.style.display="none";
}

signupbtn.addEventListener('click', form_signupfun);
function form_signupfun(){
    form_signup.style.display="block";
    form_signin.style.display="none";
}

window.onload=()=>{
    form_signin.style.display="block";
    form_signup.style.display="none";
}