// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let userName = `¿Cuál es tu nombre?`;

// Declarar un array para almacenar los elementos
let amigos = [];

// Funcion declarativa para agregar un elemento
function addFriend() {

// obteniendo el input y el valor
    const nuevoAmigo = document.querySelector('#nombreAmigo');
    const valor = nuevoAmigo.value.trim();

// validar que el campo no este vacio
    if(valor) {
// añadir valor al array
    amigos.push(valor);

// Actualizar la lista en el DOM
actualizarlista();

// Limpiar input
nuevoAmigo.value = '';
} else {
    alert('Error!!! Por favor ingresa el nombre un de amigo.');
}

// Enfoca el input nuevamente
    nuevoAmigo.focus();

}

// Función declarativa para actualizar lista del DOM
function actualizarlista() {

// Obtener el elemento UL
const lista = document.querySelector('#listaAmigos');

//limpiar la lista
lista.innerHTML = '';

// Recorrer el array y crear los elementos <li>
    for( let amigo of amigos) {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}
// Agregar evento al botón 
 document.getElementById('button-add').addEventListener('click', addFriend);



function sortearAmigo(){

   const resultado = document.getElementById('resultado');
   
   if(amigos.length > 0 ){ 
   // Generar indice aletorio basado en la longitud el array
   const aleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[aleatorio]; 
    
// Mostrar el amigo sorteado en el DOM
   resultado.textContent = `El amigo sorteao es: ${amigoSorteado}`;
    }else {         
    resultado.textContent = `Por favor, ingrese nombres de amigo suyos.`;
    }
}
document.getElementById('button-draw').addEventListener('click', sortearAmigo);
