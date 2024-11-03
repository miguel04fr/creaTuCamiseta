

//FUNCION PARA HACER LA BARRA DE PROGRESO
function updateBackground() {
    var slider = document.getElementById("myRange");
    var value = slider.value;
    slider.style.background = `linear-gradient(to right, blue ${value}%, #ddd ${value}%)`;
}






//MOVER IMAGENES EVENTOS




// EVENTO DE ARRASTRE DE LA IMAGEN

// AGREGA EL EVENTO A TODAS LAS IMÁGENES CON LA CLASE 'draggable-image'
document.querySelectorAll(".draggable-image").forEach(img => 
    img.addEventListener('dragstart', event => {
        event.dataTransfer.setData("src", event.target.src);
        event.dataTransfer.setData("alt", event.target.alt);
    })
);


// REFERENCIAS A LOS CONTENEDORES


// EVENTO DROP EN CONTENEDOR PARA MANEJAR LA IMAGEN
document.getElementById("contendorImg").addEventListener('drop', (event) => {
    event.preventDefault();
    let contenedor = document.getElementById("contendorImg");    
let contenedorImgArriba = document.getElementById("contenedorImgArriba");
let tituloImg= document.getElementById("tituloImg");
    // OBTENER SRC Y ALT DE DATATRANSFER
    let imgSrc = event.dataTransfer.getData("src");
    let imgAlt = event.dataTransfer.getData("alt");

    // CREAR IMAGEN PRINCIPAL
    let imgCont = document.createElement("img");
    imgCont.src = imgSrc;
    console.log(imgCont.src)
    imgCont.alt = imgAlt;  // ASIGNAR EL ALT A LA IMAGEN

    // LIMPIAR EL CONTENEDOR Y AÑADIR LA IMAGEN PRINCIPAL
    contenedor.innerHTML = "";
    contenedor.appendChild(imgCont);
    tituloImg.innerHTML=" ";
    tituloImg.innerHTML=imgAlt;
    

    // CREAR UNA COPIA DE LA IMAGEN CON EFECTO DE ESPEJO (SCALEX)
    let imgArriba = document.createElement("img");
    imgArriba.src = imgSrc;
    imgArriba.alt = imgAlt;  // ASIGNAR EL ALT A LA COPIA DE LA IMAGEN
    imgArriba.style.transform = "scaleX(-1)";

    // LIMPIAR EL CONTENEDOR SUPERIOR Y AÑADIR LA COPIA DE LA IMAGEN
    contenedorImgArriba.innerHTML = "";
    contenedorImgArriba.appendChild(imgArriba);
});


// Permitir el evento dragover para el contenedor
document.getElementById("contendorImg").addEventListener('dragover', (event) => {
    event.preventDefault();
});





//CREAMOS LA FUNCION PARA AGREGAR EL TITULO DE LA CAMISETA AUTOMATICAMENTE  
document.getElementById("inputTituloCamisa").addEventListener("input", tituloCamisa);
function tituloCamisa() {
   
    document.getElementById("contenedorTitulo").innerHTML =  document.getElementById("inputTituloCamisa").value;
}

function updateBackground() {
   let barraX = document.getElementById("barraX");
   let barraY = document.getElementById("barraY");
    

    let valorX = barraX.value;
    let valorY = barraY.value;

    barraX.style.background = `linear-gradient(to right, blue ${valorX}%, #ddd ${valorX}%)`;
    barraY.style.background = `linear-gradient(to right, blue ${valorY}%, #ddd ${valorY}%)`;

    contenedorTitulo.style.left = `${valorX}%`;
    contenedorTitulo.style.top = `${valorY}%`;
}



document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el contenedor de la camiseta
    let camisetaVista = document.getElementById("camisetaVista");

    // Función para cambiar la imagen de fondo
    
    function cambiarColorCamiseta(color) {
        if (color === "negro") {
            camisetaVista.style.backgroundImage = "url('./img/camiseta/black.png')";
            camisetaVista.style.color='white';
            camisetaVista.style.backgroundColor='white'
            console.log("negro")
        } else if (color === "blanco") {
            camisetaVista.style.backgroundImage = "url('./img/camiseta/white.png')";
            camisetaVista.style.color='black';
            camisetaVista.style.backgroundColor='black'
            console.log("BLANCO")
        }
    }

    //PILLA EL INPUT TYPE RADIO
    document.getElementById("colorCamiseta").addEventListener("change", (event) => {
        cambiarColorCamiseta(event.target.value);
    });
});

