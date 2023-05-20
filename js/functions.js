

//ADD-EVENTLISTENER

var enlacesCabecera= document.getElementsByClassName("enlace-cabecera");

for(let i=0;i<enlacesCabecera.length;i++)
    enlacesCabecera[i].addEventListener("click", cambiarActiveEnlace);




/**
 * Función que añade la class active al enlace que se pulsa
 */
function cambiarActiveEnlace(){

    let enlace= this;
    let sw= true;
    for(let i=0;i<enlacesCabecera.length && sw;i++){

        let clases= enlacesCabecera[i].classList;

        if(clases.contains("active")){
            enlacesCabecera[i].classList.remove("active");
            sw=false;
        }
    }
    enlace.classList.add("active");
    muestraSeccion(this);
}


function muestraSeccion(enlace){

    let id= enlace.id;

    let contenedores= document.querySelectorAll("div[data-referenciaEnlace]");

    for(let i=0;i<contenedores.length;i++){
        contenedores[i].style.display="none";
    }

    let sentencia= "div[data-referenciaEnlace="+id+"]";
    switch(id){
        case "enlaceReservas": document.querySelector(sentencia).style.display="block";
        break;
        case "enlaceHabitaciones": document.querySelector(sentencia).style.display="block";
        break;
        case "enlaceEmpleados": document.querySelector(sentencia).style.display="block";
        break;
        case "enlaceRestaurente": document.querySelector(sentencia).style.display="block";
        break;
    }



}
