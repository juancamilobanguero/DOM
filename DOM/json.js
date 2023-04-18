let bd = [
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

    // console.log( document.getElementById( 'username' ) );
    const username = document.querySelector( '#username' ).value;
    const password = document.querySelector( '#password' ).value;
    // let username = document.querySelector("#username").value
    // let password = document.querySelector("#password").value

    //if (username === "" ) return alert("el usuario no cumple con los parametros establecidos ") 

    

    console .log(username)
    console .log(password)
// for (let i = 0; i<bd.length; i++){
//     console .log (username, bd [i].username, ' :: ', password, bd [i] .password)

//     if(username == bd [i].username && password == bd [i] .password){
//         console .log("se logio")
//     } else{
//         console .log("no se logio")
//     }

    // let json ={
    //     llave:valor
    // }

//     let persona = {
//         name: "camilo",
//         lastname:"banguero",
//         age:18,
//         id:2,
//         tel:"ahora se lo doy "
//     }
//     let carro = {
//         color:negro,
//         marca:Fork,
//         asientos:6,
//         taxista:persona,
//     }
//   console .log(persona,carro)
}