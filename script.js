function myFunction(){

    var variable1; // Nebudeme použivat !
    let variable2 // budeme použivat !
    const variable3 = 3; // nemohu poté zmenit 
    variable4 = "ahoj" // STRING
    variable5 = 5 // NUMBER/INT/INTEGER
    variable6 = true // BOOLEAN

    const userFirstName=document.getElementById("firstName").value 
    console.log(userFirstName)

    const userLastName=document.getElementById("lastName").value
    const fullName= userFirstName + " " + userLastName
 
    document.getElementById("fullName").value=addtionResult
    
}

function addition() { 
    const inputFirstNumber=document.getElementById("firstName").value
    const inputSeconNumber=document.getElementById("seconName").value

    document.getElementById("result").value=addtionResult

}
 
function substracion () { 
    const inputFirstNumber=parseInt (document.getElementById("firstNumber").value
    const inputSeconNumber=parseInt (document.getElementById("seconNumber").value

    const addtionResult = inputFirstNumber + inputSeconNumber

    document.getElementById("result").value=addtionResult

