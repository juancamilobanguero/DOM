let lista= [
    {
        email:"banguero58@gmail.com",
        password:"camilo2204",
        username:"camilo",
        active:true
    },
    {
        email:"juan58@gmail.com",
        password:"camil122",
        username:"camilo58",
        active:true
    },
    {
        email:"camilo58@gmail.com",
        password:"camilo227",
        username:"juan",
        active:false   
    } 
    
] 

function sayHi(){

    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

  for(let user of lista){
    console.log(user)

    if(username === user.username || username === user.email){
        if(password === user.password){
        return alert("sesion iniciada")
    }
    return alert("la contraseña es incorrecta")
    }
  }

  return alert("no existe")
}

function viewPass(){

    let type = document.querySelector("#password").type
    //return document.querySelector("#password").type = type === "password" ? "text" : "password"

    if(type === "password"){
        document.querySelector("#password").type = "text"
    } else {
        document.querySelector("#password").type = "password"
    }
}