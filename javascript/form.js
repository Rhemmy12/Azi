var username = document.getElementById("username").value;
var firstname = document.getElementById("firstname").value;
var lastname = document.getElementById("lastname").value;
var email = document.getElementById("email").value;
var DOB = document.getElementById("D.O.B").value;
var time = document.getElementById("time").value;
var gender = document.getElementById("gender").value;
var password = document.getElementById("password").value;
var confirmpassword = document.getElementById("confirm password").value;

var header = document.getElementById("h3").innerHTML;

function validateform(){
    if(name==""){
        alert("you cannot submit an empty value")
    }
}