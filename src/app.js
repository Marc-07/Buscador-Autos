//Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const precioMin = document.querySelector("#precio-min");
const precioMax = document.querySelector("#precio-max");
const puertas = document.querySelector("#puerta");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color")

//Contenedor para ver los resultados 
const resultado = document.querySelector("#resultado");

//Variables fecha para el selector año
const max = new Date().getFullYear();
const min = max -10;

//Generar objeto de busqueda de automovil
const datosBusqueda = {
    marca: "",
    year: "",
    precioMin: "",
    precioMax: "",
    puertas: "",
    transmision: "",
    color: "",
};

console.log(max);
console.log(min);

//Eventos
document.addEventListener("DOMContentLoaded", () =>{
    mostrarAutos(autos); //Muestra los autos al cargar

    //Lista de las opciones de años
    llenarSelect();
  
});

//Events listeners para los selectores de busqueda
marca.addEventListener("change", (e)=>{
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});
year.addEventListener("change", (e)=>{
    datosBusqueda.year = e.target.value;
    filtrarAuto();
});
precioMin.addEventListener("change", (e)=>{
    datosBusqueda.precioMin = e.target.value;
});
precioMax.addEventListener("change", (e)=>{
    datosBusqueda.precioMax = e.target.value;
});
puertas.addEventListener("change", (e)=>{
    datosBusqueda.puertas = e.target.value;
});
transmision.addEventListener("change", (e)=>{
    datosBusqueda.transmision = e.target.value;
});
color.addEventListener("change", (e)=>{
    datosBusqueda.color = e.target.value;
});


//Funciones
function mostrarAutos(autos){

    //Elimina el HTML previo
    limpiarHTML();

    autos.map (auto => {
        const {marca, modelo, year, puertas, transmision, color, precio} = auto;
        const autoHTML = document.createElement("P");

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Tranmisión: ${transmision}  -  Color: ${color} - Precio: $ ${precio}
        `;

        // Agregar la clase Tailwind para margen inferior
        autoHTML.classList.add('mb-4',  'border-b', 'border-gray-300', 'pb-2',);

        //Insertar en el HTML
        resultado.appendChild(autoHTML);
    });
};

//Limpiar HTML
function limpiarHTML (){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    };
};


function llenarSelect(){
    for (let i = max; i>min; i --){
        const opcion = document.createElement("OPTION");
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //Agrega las opciones de años
    };
};

function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear);
    //console.log(resultado);

    mostrarAutos(resultado)


};

function filtrarMarca (auto){
    const {marca} = datosBusqueda;
    if ( marca){
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear (auto){
    const {year} = datosBusqueda;
    if ( year){
        return auto.year === parseInt(year);
    }
    return auto;
}

