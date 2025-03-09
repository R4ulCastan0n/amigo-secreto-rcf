// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array para almacenar nombres de los amigos
let listaAmigos = [];

//Función para agregar nombre de amigos
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const amigo = input.value.trim();
//Validar entrada
    if (amigo === '') {
        alert ('Por favor, inserte un nombre.');
        return;
    }
//Actualizar array
    listaAmigos.push(amigo);
//Limpiar campo
    input.value = '';
//Actualizar lista
actualizarLista();
//Verificar en la consola
    console.log('Lista de amigos:', listaAmigos);
}

function actualizarLista() {
    //Obtener elemento de la lista
    const lista= document.getElementById('listaAmigos');

    //Limpiar la lista existente
    lista.innerHTML = '';

    //Bucle for
    for (let i = 0; i < listaAmigos.length; i++) {
        //Crear un nuevo elemento <li> para cada amigo
        const li = document.createElement('li');
        li.textContent = listaAmigos[i];
        //Agregar el elemento a la lista
        lista.appendChild(li);
    }
        
    }

function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    //Validar que haya amigos
    if(listaAmigos.length === 0) {
        resultado.innerHTML = '<li>No hay amigos para sortear. ¡Agrega algunos!</li>';
        return;
    }

    //Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random()*listaAmigos.length);

    //Obtener el nombre sorteado
    const amigoSorteado = listaAmigos[indiceAleatorio];

    //Mostrar el resultado
    resultado.innerHTML = '<li>¡El amigo secreto es: ${amigoSorteado}!</li>';    
}