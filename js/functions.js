

//ADD-EVENTLISTENER

var enlacesCabecera= document.getElementsByClassName("enlace-cabecera");

for(let i=0;i<enlacesCabecera.length;i++)
    enlacesCabecera[i].addEventListener("click", cambiarActiveEnlace);





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
}




