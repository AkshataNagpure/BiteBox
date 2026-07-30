function login(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let error=document.getElementById("error");

    if(email==="akshatanagpure200@gmail.com" && password==="1234"){
        localStorage.setItem("isLoggedIn","true");
        localStorage.setItem("user",email);
        // redirect
        window.location.href="home.html";
    }
    else{
        error.innerText="Invalid Email or Password";
    }
}


function togglePassword(){
    let passwordInput=document.getElementById("password");
    if(passwordInput.type==="password"){
        passwordInput.type="text";

    }else{
        passwordInput.type="password";
    }
}