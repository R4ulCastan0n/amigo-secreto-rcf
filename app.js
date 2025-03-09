// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array para almacenar nombres de los amigos
let listaAmigos = [];

//Función para agregar nombre de amigos
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const amigo = input.value.trim();
//Validar entrada
    if (nombre === '') {
        alert ('Por favor, inserte un nombre.');
        return;
    }
//Actualizar array
    listaAmigos.push(nombre);
//Limpiar campo
    input.value = '';
//Verificar
    console.log('Lista de amigos:', listaAmigos);
}