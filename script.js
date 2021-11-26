var navLinks = document.getElementById('navLinks');

function showMenu(){
    navLinks.style.right = '0';   
}
function hideMenu(){
    navLinks.style.right = '-200px';   
}


function validateForm() {
    // if (!validateName() || !validatePhone() || !validateEmail()) {

    //     alert("Form not submitted");//Validation Message
    //     return false;
    // }
    // else {
    // submitted=true;
    // document.getElementById("name").reset();
    // return true;
    // }

    document.getElementById("alert").style.display = "block";
   

}
    


  