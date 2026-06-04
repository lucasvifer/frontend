contenedor = document.getElementById("container")
contenedor.innerHTML = "<button id='Cambiar-fondo'> Cambiar a modo oscuro </button>";
boton = document.getElementById("Cambiar-fondo");
boton.addEventListener("click",function(){
    document.body.style.backgroundColor = "black";
});
