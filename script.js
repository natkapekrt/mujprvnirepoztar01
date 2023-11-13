const usersData =[]
 
 function calculatorBMI() {
     
        const weightInput = parseFloat(document.getElementById("weight").value)
        const heightInput = parseFloat(document.getElementById("height").value)
 
     
        const BMI = weightInput / ((heightInput*heightInput)).toFixed(1)
 
        console.log(BMI)
     
    if(weightInput <= 0){
        document.getElementById("outputWeight").innerHTML = "Záporná hodnota"
        usersData.push("zaporná hodnota")
 
    }else if(heightInput <= 0){
        document.getElementById("outputWeight").innerHTML = "Záporná hodnota"
    }else if (weightInput > 0 && heightInput > 0){
       
    if(BMI < 18.5) {
       document.getElementById("outputWeight").innerHTML = "Podváha"
        usersData.push("podváha")
 
    } else if( BMI <= 18.5 && BMI < 25){
            document.getElementById("outputWeight").innerHTML = "Normální váha"
     usersData.push("normální váha")
 
    } else if(  BMI <= 25 && BMI < 30){
            document.getElementById("outputWeight").innerHTML = "Nadváha"
     usersData.push("nadváha")
 
    } else if( BMI > 30){
            document.getElementById("outputWeight").innerHTML = "Obezita"
            usersData.push("obezita")
        }
    }
 
console.log ()
    document.getElementById("arrayOutput").innerHTML = usersData
 }
 
   
