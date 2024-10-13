

// Variables del html

const input = document.getElementById("text-input");                    // De aca sacaremos el .value

const botonCheck = document.getElementById("check-btn");                // Y este tendrá el onclick

const cajaPalindromo = document.querySelector(".caja_palindromo");     // Aca appendeo el output
const mensajeOutput = document.createElement("span");




// La funcion getPalindromo se va a encargar de obtener el texto, limpiarlo, minusquearlo y procesarlo
function getPalindromo() {

    let str = input.value;
    let ogStr = input.value;    // para devolver exactamente lo que escribio el user 

    if (str.trim() !== "") {

        str = input.value.replace(/[ .&%$#!¡?¿_0-9]/g, '').toLowerCase();

        if (str === str.split('').reverse().join('')) {      // split('') -> rompe los espacios para hacer un array de char y join al reves

            mensajeOutput.innerText = `${ogStr} es un palindromo!!`;
            mensajeOutput.setAttribute("class", "text-white");       // De esta forma le agrego la "class" de tailwind
            cajaPalindromo.appendChild(mensajeOutput);

        } else {

            mensajeOutput.innerText = `${ogStr} no es un palindromo!!`;
            mensajeOutput.setAttribute("class", "text-white");
            cajaPalindromo.appendChild(mensajeOutput);
        }

    } else { alert("Ingresá algo al menos"); }
}


botonCheck.addEventListener("click", getPalindromo);

input.addEventListener("keydown", event => {

    if (event.key === "Enter") {

        getPalindromo();
    }
});


