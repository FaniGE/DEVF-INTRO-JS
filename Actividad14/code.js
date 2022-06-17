//01. Captura de variables

const formBusqueda = document.querySelector('#form-busqueda');
//const inputName = document.querySelector('#inputName');
const inputGenero = document.querySelector('#inputGenre');
const inputYear = document.querySelector('#inputYear');
const boxPeliculas = document.querySelector('#box-peliculas');

//05. Crear objeto que guarde la selección de busqueda del usuario

const datosBusqueda = {
    nombre: '',
    genero: '',
   year: ''
}

//02. Crear el evento para mostrar información al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarHTML(peliculas)
});

//03. Crear función que muestra contenido

function mostrarHTML (peliculas){

    limpiarHTML();

    peliculas.forEach( pelicula => {

        const {nombre, genero, year, descripcion, image} = pelicula;

        const cardPelicula = document.createElement('div');
        cardPelicula.classList.add('col', 'mb-3');
        cardPelicula.innerHTML = `
            <div class="card bg-light flex-row">
          
                <div class="card-body w-50">
                <img src="${image}" class="img-fluid" alt="">
                    <h2 class="card-title">${nombre}</h2>
                    <p class="card-text mb-1">Genero: ${genero}</p>
                    <p class="card-text mb-1">Año: ${year}</p>
                    <p class="card-text mb-0">${descripcion}</p>
                </div>
            </div>
        `

        boxPeliculas.appendChild(cardPelicula);

    } )

}

//04. Crear el evento de envío. Aquí vamos a hacer el filtro
formBusqueda.addEventListener('submit', (e) => {
    e.preventDefault();

    datosBusqueda.nombre = inputName.value.toLowerCase();
   
    //datosBusqueda.year = inputYear.value;

    console.log(datosBusqueda);

    filtrarPeliculas(); //Llama la función que filtra los datos de busqueda.

    formBusqueda.reset();

});

//07. Crear función de filtro de peliculas

function filtrarPeliculas() {

    //const resultado = peliculas.filter( filtrarName ).filter(filtrarGenero).filter(filtrarYear);
    const resultado = peliculas.filter( filtrarName );

    console.log(resultado.length)
    //Trabajar cuando no hay resultados de busqueda
    if(resultado.length){
        mostrarHTML(resultado)
    }else{
        console.log('nada')
        sinResultado();
    }

    //Cuando no hay opciones seleccionadas po el usuario
    /* if(inputName.value == '' && inputGenero.value == '' && inputYear.value == ''){
        sinResultado();
    }else{
        mostrarHTML(resultado)
        boxPeliculas.parentElement.lastChild.remove();
    } */

    const hayContenido = Object.values(datosBusqueda).filter( e => e)

    if(hayContenido.length){
        mostrarHTML(resultado)
    }else{
        sinResultado();
    }
    

}


function filtrarPeliculas2() {

    //const resultado = peliculas.filter( filtrarName ).filter(filtrarGenero).filter(filtrarYear);
    const resultado = peliculas.filter( filtrarGenero);

    console.log(resultado.length)
    //Trabajar cuando no hay resultados de busqueda
    if(resultado.length){
        mostrarHTML(resultado)
    }else{
        console.log('nada')
        sinResultado();
    }

    //Cuando no hay opciones seleccionadas po el usuario
    /* if(inputName.value == '' && inputGenero.value == '' && inputYear.value == ''){
        sinResultado();
    }else{
        mostrarHTML(resultado)
        boxPeliculas.parentElement.lastChild.remove();
    } */

    const hayContenido = Object.values(datosBusqueda).filter( e => e)

    if(hayContenido.length){
        mostrarHTML(resultado)
    }else{
        sinResultado();
    }
    

}

//08. Generar las funciones que va a recibir el filter.

function filtrarName (pelicula){
    const {nombre} = datosBusqueda;

    if(nombre){
        return pelicula.nombre == nombre;
    }
    
    return peliculas;

}

function filtrarGenero (pelicula){
    const {genero} = datosBusqueda;

    if(genero){
        return pelicula.genero == genero;
    }
    
    return peliculas;

}

function filtrarYear (pelicula){
    const {year} = datosBusqueda;

    if(year){
        return pelicula.year == year;
    }
    
    return peliculas;

}

//09. Función que limpie los cards de resultados anteriores.

function limpiarHTML (){
    boxPeliculas.innerHTML = '';
    while(boxPeliculas.firstChild){
        boxPeliculas.firstChild.remove();
    }
}

//Creación de función cuando no se encuentran resultados

function sinResultado(){
    
    limpiarHTML();

    const sinResultado = document.createElement('div');
    sinResultado.classList.add('bg-danger','text-white','border','p-4','text-center');
    sinResultado.textContent = 'No hay resultados de busqueda';

    /* if(!boxPeliculas.parentElement.lastChild.classList.contains('bg-danger')){
        boxPeliculas.parentElement.appendChild(sinResultado);
    } */

    if(boxPeliculas.parentElement.children.length < 2){
        boxPeliculas.parentElement.appendChild(sinResultado);
    }

    //boxPeliculas.parentElement.appendChild(sinResultado);

    
}

function return_genero(genero){
  document.getElementById('inputGenre').value=genero;
  datosBusqueda.genero = inputGenero.value;
  formBusqueda.reset();
  filtrarPeliculas2(); //Llama la función que filtra los datos de busqueda.

  
}