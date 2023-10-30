
function checkResult() {

    const inputNumber = parseInt(document.getElementById("numberCheck").value)

if(inputNumber => 18) {
    console.log("Dospělý")
  }else if (inputNumber < 18)
    console.log("Mladý")

}
function myNumber(){
 
    const inputAge = document.getElementById("num").value;
 
    if(inputAge >= 18){
    console.log("jste dospělý")
}  else if(inputAge < 18){
    console.log("jste ještě dítě")
}
}
 
function myNumber1(){
 
    const inputAge1 = document.getElementById("num1").value;
 
    if(inputAge1 <= 2005){
    console.log("přistup povolen")
}  else if(inputAge1 > 2005){
    console.log("přístup zamítnut")
}
}
 