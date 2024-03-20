// Variables
let textoGuardado;
let textoParaEncriptar;
let textoParaDesencriptar;
let textoEncriptado = "";
let textoDesencriptado = "";
let areaEncriptado = "";
let areaDesencriptado = "";
let botonCopiarEncriptado;
let botonCopiarDesencriptado;
let textoEncriptadoCopiado;
let textoDesencriptadoCopiado;


// Seleccionar los elementos textarea por su ID
areaEncriptado = document.getElementById('area-desencriptar');
areaDesencriptado = document.getElementById('area-encriptar');

// Agregar listeners para cambiar el color de fondo al hacer clic en los textareas
areaEncriptado.addEventListener('click', function() {this.style.background = "white";})
areaDesencriptado.addEventListener('click', function() {this.style.background = "white";})

// Seleccionar los botones para copiar al portapapeles por si ID
botonCopiarEncriptado = document.getElementById('copiar-encriptado')
botonCopiarDesencriptado = document.getElementById('copiar-desencriptado')

// Agregar listeners para copiar el texto del textarea del texto encriptado al portapapeles
botonCopiarEncriptado.addEventListener('click', function () { 
    textoEncriptadoCopiado = areaEncriptado.value;
    navigator.clipboard.writeText(textoEncriptadoCopiado); })

    // Agregar listeners para copiar el texto del textarea del texto desencriptado al portapapeles
botonCopiarDesencriptado.addEventListener('click', function () { textoDesencriptadoCopiado = areaDesencriptado.value;
    navigator.clipboard.writeText(textoDesencriptadoCopiado); })

// Función para guardar el texto y determinar si encriptar o desencriptar
function guardarTexto(areaId) {
    textoGuardado = document.getElementById(areaId).value;
    
    // Verificar si el textarea no está vacío
    if (textoGuardado !== "") {
        areaEncriptado.style.background = "white";
        areaDesencriptado.style.background = "white";
    }

    // Determinar si se va a encriptar o desencriptar según el área
    if (areaId == "area-desencriptar") {
        desencriptarTexto();
    } else {
        encriptarTexto();
    }
}

// Función para encriptar el texto
function encriptarTexto() {
    for (let index = 0; index < textoGuardado.length; index++) {
        textoParaEncriptar = textoGuardado[index];
        if (textoParaEncriptar == 'a') {
            textoEncriptado += "ai";
        } else if (textoParaEncriptar == 'e') {
            textoEncriptado += "enter";
        } else if (textoParaEncriptar == 'i') {
            textoEncriptado += "imes";
        } else if (textoParaEncriptar == 'o') {
            textoEncriptado += "ober";    
        } else if (textoParaEncriptar == 'u') {
            textoEncriptado += "ufat";    
        } else {
            textoEncriptado += textoParaEncriptar;
        }
    }

    // Establecer el texto encriptado en el textarea correspondiente
    areaEncriptado.value = textoEncriptado;
    textoEncriptado = ""; // Reiniciar la variable para el próximo uso
}

// Función para desencriptar el texto
function desencriptarTexto() {
    for (let index = 0; index < textoGuardado.length; index++) {
        textoParaDesencriptar = textoGuardado[index];
        if (textoParaDesencriptar == 'a') {
            textoDesencriptado += "a";
            index++;
        } else if (textoParaDesencriptar == 'e') {
            textoDesencriptado += "e";
            index += 4;
        } else if (textoParaDesencriptar == 'i') {
            textoDesencriptado += "i";
            index += 2;
        } else if (textoParaDesencriptar == 'o') {
            textoDesencriptado += "o";
            index += 3;    
        } else if (textoParaDesencriptar == 'u') {
            textoDesencriptado += "u";
            index += 3;    
        } else {
            textoDesencriptado += textoParaDesencriptar;
        }
    }

    // Establecer el texto desencriptado en el textarea correspondiente
    areaDesencriptado.value = textoDesencriptado;
    textoDesencriptado = ""; // Reiniciar la variable para el próximo uso
}
