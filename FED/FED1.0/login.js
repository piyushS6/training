var username = document.getElementById('username');
var password = document.getElementById('password');

function validate(){
    if(username.value == 0 || username.value.length < 4){
        document.getElementById('error').innerHTML = "Username should be atleast 4 characters.";
        document.getElementById('error').style.color = "red";
        return false;
    }else if(password.value.length < 8){
        document.getElementById('error').innerHTML = "Password should be atleast 8 characters.";
        document.getElementById('error').style.color = "red";
        return false;
    }else{
        window.location.assign("Dashboard/index.html");
        alert("Successfully logged in!");
    }
}