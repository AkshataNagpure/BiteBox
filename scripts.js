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

// function toggleMenu(){
//     let menu = document.getElementById("navMenu");
//     let icon = document.getElementById("menuIcon");

//     menu.classList.toggle("show");

//     if(menu.classList.contains("show")){
//         icon.classList.remove("fa-bars");
//         icon.classList.add("fa-xmark");

//     }else{
//         icon.classList.remove("fa-xmark");
//         icon.classList.add("fa-bars");
//     }
// }


function toggleMenu() {
    let menu = document.getElementById("navMenu");
    let icon = document.getElementById("menuIcon");

    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");   
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
}