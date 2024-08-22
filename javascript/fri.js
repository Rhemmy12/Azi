var num = document.getElementById("h1")
 var setInterval = setInterval(function(){
//  if(Number(num.innerHTML)==100){
//     num.innerHTML += "Fuck Haters<br>";
//        clearInterval(setinterval)
//     }else{
//         Number(num.innerHTML++)
//     }
// },1000)
const date = new Date();
num.innerHTML = date.toLocaleTimeString()
},1000)

var h2 = document.getElementById("h2")
var timeout = setTimeout(function(){
    h2.innerHTML = "i got delay by 5secs";
},5000)