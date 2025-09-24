// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para guardar los nombres de los amigos 
let amigos = [] 
console.log(amigos);

function agregarAmigo() {
        let inputAmigo = document.getElementById('amigo');
    let nombre = inputAmigo.value;

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
        
    amigos.push(nombre);
    inputAmigo.value = '';

    // Actualizar  lista 
    actualizarListaAmigos();
    console.log(amigos);
}

function actualizarListaAmigos() {
  // Obtener el elemento de la lista
  const lista = document.getElementById("listaAmigos");

  // Limpiar la lista existente
  lista.innerHTML = "";

  // Iterar sobre el arreglo
  for (let i = 0; i < amigos.length; i++) {
    // Agregar elementos a la lista
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  // Comprobar que la lista no este vacia 
  if (amigos.length === 0) {
    alert("No hay amigos disponibles para sortear.");
  } else {
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];
  
    const elementoResultado = document.getElementById('resultado');
        elementoResultado.innerHTML = amigoSorteado;
  }
}