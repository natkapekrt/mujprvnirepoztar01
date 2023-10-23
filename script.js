

    function addition() {
        const inputFirstNumber = parseInt(document.getElementById("firstNumber").value)
        const inputSecondNumber = parseInt(document.getElementById("secondNumber").value)
    
        const additionResult = inputFirstNumber + inputSecondNumber
        
        document.getElementById("result").value = additionResult
    
    }
    
    function subtraction() {
        const inputFirstNumber = parseInt(document.getElementById("firstNumber").value)
        const inputSecondNumber = parseInt(document.getElementById("secondNumber").value)
    
        const additionResult = inputFirstNumber - inputSecondNumber
    
        document.getElementById("result").value = additionResult
    
    
    }
    
    function multiplication() {
        const inputFirstNumber = parseInt(document.getElementById("firstNumber").value)
        const inputSecondNumber = parseInt(document.getElementById("secondNumber").value)
    
        const additionResult = inputFirstNumber * inputSecondNumber
    
        document.getElementById("result").value = additionResult
    
    
    }
    
    function division() {
        const inputFirstNumber = parseInt(document.getElementById("firstNumber").value)
        const inputSecondNumber = parseInt(document.getElementById("secondNumber").value)
    
        const additionResult = inputFirstNumber / inputSecondNumber
    
        document.getElementById("result").value = additionResult
    
    
    }
    
    
    




function checkResult() {

    const inputNumber = parseInt(document.getElementById("numberCheck").value)

    if(inputNumber < 10) {
        console.log("MENŠÍ NEŽ 10") 

    } else if(inputNumber > 10) {
        console.log("VĚTŠÍ NEŽ 10")
    } else if(inputNumber = 10) {
        console.log("JE ROVNO 10")
    } else {
        console.log("NENÍ ČÍSLO")
    }
}


const cars =  ["Audi", "BMW", "Mercedes"]
const numbers = [1, 3, 5]
const carsInGarage = ["audi", 1,"BMW",2]

const cars2 = []
cars2[0] = "Saab";
cars2 [1]= "Volvo";
cars2 [2]= "BMW";

console.log(cars2)

function start() {
    for (let i = 0; i < 10; i++) {
         console.log(cars2[i])
   }

}    

 const students = ["Klára","Péťa","Luky","Dominik","Péťa2","Franta","Michal"];
 const students  = [1, 3, 5]
 const studentsInGarage = ["Klara", 1,"Luky",2]

 const students2 = []
students2[1] = "Klára";
students2 [2]= "Luky";
students2[3] = "Péťa";
students2[4] = "Péťa2";
students2[5] = "Franta";
students2[6] = "Dominik";
students2[6] = "Adam";

console.log(students2)

