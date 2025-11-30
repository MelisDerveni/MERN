function validate(){
    // No need to check for checkbox as its required anyway
    // if(document.getElementById("terms").value != "on"){
    //     alert("You must accept the terms and conditions");
    // }

    if(document.getElementById("password").value == document.getElementById("confirmPassword").value){
        alert("Password is valid");
    }
    else{
        alert("Password is not valid");

    }
}