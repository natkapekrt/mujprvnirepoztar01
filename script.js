const database = [
"natalka15",
"naty",
"natuša:)",
"natulka",

] 

function ligin() {
    const username =document.getElementById("usename").value
    const password =document.getElementById("password").value

    consloge.log(username, password)

    const loginData = username + "." + password

    for(let  i = 0; i < database.length; i++){
        if(loginData == database[i]){
            console.log("Login successful");
        } else if (i = darabase.length -1) {
            console.log("Login failed")
        }
    }
} 
