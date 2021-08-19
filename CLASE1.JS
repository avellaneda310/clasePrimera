/*const jon = {
    nombre: "jon",
    apellido: "Gibaut",
    edad: 19,
    mails:["jongibaut@gmail.com","jongibaut@hotmail.com"]
};*/
/*const Personajes = [
    {
        nombre: "Homero",
        apellido: "Simpson",
        trabajo: ["Planta Nuclear", "Don Barredora"]
    },
    {
        nombre: "Marge",
        apellido: "Simpson",
        trabajo: ["Ama de casa"]
    },
    {
        nombre: "Bob",
        apellido: "Esponja",
        trabajo: ["Cocinero"]
    },
]

const getAll = (arrayDeObjetos) => {
    arrayDeObjetos.forEach(item => {
        //let mas1trabajo = false;
        if (item.trabajo.length > 1) {
            mas1trabajo = true;
        } else {
            mas1trabajo = false;
        }
        console.log(`Nombre: ${item.nombre}. Apellido: ${item.apellido}. Tiene mas de un Trabajo: ${mas1trabajo ? "Si":"No"}`)
        
    })
}
getAll(Personajes);*/
/////////////////////////////////////////////////////////////////
const axios = require("axios");

async function get(url){
    const Personajes = await axios.get(url);
    console.log(Personajes);
};
get("https://breackingbadapi.com/api/characters")