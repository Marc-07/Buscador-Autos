//Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
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
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: "",
};


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
minimo.addEventListener("change", (e)=>{
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});
maximo.addEventListener("change", (e)=>{
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();

});
puertas.addEventListener("change", (e)=>{
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});
transmision.addEventListener("change", (e)=>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});
color.addEventListener("change", (e)=>{
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});


//Funciones
function mostrarAutos(autos){

    //Elimina el HTML previo
    limpiarHTML();

    autos.forEach (auto => {
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
    for (let i = max; i>=min; i --){
        const opcion = document.createElement("OPTION");
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //Agrega las opciones de años
    };
};

function filtrarAuto(){
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTranmision ).filter( filtrarColor);
    //console.log(resultado);

    mostrarAutos(resultado);
};

function filtrarMarca (auto){
    const {marca} = datosBusqueda;
    if ( marca){
        return auto.marca === marca;
    }
    return auto;
};

function filtrarYear (auto){
    const {year} = datosBusqueda;
    if ( year){
        return auto.year === parseInt(year);
    }
    return auto;
};

function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;
    if ( minimo){
        return auto.precio >=  minimo;
    }
    return auto;

}

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;
    if ( maximo){
        return auto.precio <= maximo;
    }
    return auto;

}

function filtrarPuertas (auto){
    const {puertas} = datosBusqueda;
    if ( puertas){
        return auto.puertas === puertas;
    }
    return auto;

}


function filtrarTranmision (auto){
    const {transmision} = datosBusqueda;
    if ( transmision){
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor (auto){
    const {color} = datosBusqueda;
    if ( color){
        return auto.color === color;
    }
    return auto;
}
