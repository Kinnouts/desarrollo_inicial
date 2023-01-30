let saludo = "Hola, desde una variable";//Let y var definen variables
saludo = "Hola, editado";//Esto puede hacerse con las variables (let) pero no con las const)
function Load(mensaje) {
    console.log(mensaje);
}


const Foot = () => {//Definiendo constante
    console.log("Hola, desde funcion de flecha");
}

document.addEventListener('DOMContentLoaded', Foot());   //Al cargar la pantalla ejecuta la funcion, es una funcion de JS

/*A continuacion guardamos en una variable la direccion de restcountries endpoint name pasando por parametro una parte del url*/

//Creamos clase country
class country {
    constructor(pais) {
        this.flag = pais.flag;
        this.name = pais.name;
        this.region = pais.region;
    }
}

const getCountry = async (name) => {
    const uri = `https://restcountries.com/v2/name/${name}`;//Revisar que esta direccion sea asi sino no sale
    const resp = await fetch(uri);//FETCh hace consulta hacia el servidor y que devuelve una promesa
    const data = await resp.json();//Toma el json que responde a la solicitud



    let pais = new country(data[0]);




    let { region } = pais;

    //Ejemplo de un arreglo
    let array = ["chavo", "quiko", "chilindrina"];
    //Para rescatar un dato de ese arreglo: Desestructuracion de arreglo se hace por las posiciones de arreglo
    let [, feo,] = array;//Mostraria solo el dato de quico



    console.log(feo);//Manda la respuesta por consola, aunque ponga lo que ponga en consola saldra quiko porque eso se hace por posiciones
    //El nombre que se ponga en desestructuracion da lo mismo
    //En react tambien se usa desestrcturacion

    //Vamos a completar ahora los espacios de titulo
    document.getElementById('pais_name').innerHTML = pais.name;
    //Rescato a traves de los elementos en index
    document.getElementById('pais_flag').src = pais.flag;
    document.getElementById('pais_region').innerHTML = pais.region;

}
//Para hacer referencia al boton buscar pongo una constante

const $btn_search=document.getElementById('btn_search');
$btn_search.addEventListener('click', ()=>{
   const $pais_input= document.getElementById('pais_input');
   getCountry($pais_input.value);
})

getCountry('Argentina');