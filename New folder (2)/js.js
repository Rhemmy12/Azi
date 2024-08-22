// console.log("Hello World")

// var Name = "javascript class"
// console.log(Name)

// var num = 12;
// console.log(num)

// var _class = "javascript class"
// console.log(_class)



// let lenght = 16;
// console.log(lenght)
// let width = 7.5;
// console.log(width)

// let color = "Yellow"
// console.log("color")
// let lastName = "johnson";
// console.log("lastName")

// let x = true;
// console.log("true")
// let y = false;
// console.log("false")
// const person = {firstName:"john", lastName:"Doe"};
// console.log("John,Doe")

// const car = ["Saab", "Volvo"]
// console.log("Saab,Volvo")
// const date = new Date("2022-03-25");

// var a = 2
// var b = 3

// console.log(a+b)//addition
// console.log(b-a)//subtraction
// console.log(b/a)//division
// console.log(a*b)//multiplication
// console.log(b**a)//exponential
// console.log(b%a)//modulus
// console.log(b++)//increment
// console.log(a--)//decrement


// //Assignent Operator
// var num = 3 //Assignment
// var num2 = 4
// console.log(num += num2)
// console.log(num -= num2)
// console.log(num /= num2)
// console.log(num %= num2)
// console.log(num *= num2)
// num += num2
// console.log(num)
// num -= num2
// console.log(num)
// num /= num2
// console.log(num)


//comparison operation
// var a =20
// var b = 30
// console.log(a==b);//false

// var a = 20
// var b = 30
// var c = "30"
// console.log(a==b); //true
// console.log(a===b); //false
// console.log(a!=b);//true
// console.log(a!==c);//true
// console.log(a>b);//false
// console.log(a<b);//true
// console.log(a>=b);//false
// console.log(a<=b);//true

// //logical operation
// var t =true;
// var f = false;
// //AND Operation
// console.log(t && f)//false
// console.log(t && t)//true
// console.log(f && f)//false

// //OR Operator
// console.log(t || f)//true
// console.log(t|| t)//false
// console.log(f || f)//true

// //NOT Operator
// console.log(!f)//true
// console.log(!t)//false

// //TYPE Operators

// var Name = "Quadri"
// var age = 14
// var bool = true
// var list = [12,18,27]
// var obj = {fname: "ade",Lname:"Ola"}

// console.log(typeof(Name))
// console.log(typeof(age))
// console.log(typeof(bool))
// console.log(typeof(list))
// console.log(typeof(obj))
// function myFunction(){
//     console.log("This is function")
// }
// myFunction()

// function add(a,b){
//     console.log(a+b)
// }
// add(12,18)

// function greeting(greet){
//     console.log(greet)
// }
// greeting("hello")

// var ab = "hello"//global variable

// function variable(){
//     var ba = "World";//local variable
//     console.log(ab)
// }
// console.log(ab)
// variable()





function changeColor(){
    document.getElementById("demo").style.color = "red"
    document.getElementById("demo").style.textTransform = "lowercase"

}
function wrt(){
    var inp = document.getElementById("inp").ariaValue
    para = document.getElementById("P1").innerHTML = inp
}