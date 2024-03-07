let data = null; // Variable para almacenar los datos una vez recuperados

const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const button = document.getElementById('btn');

function getData() {
  // Verificar si los datos ya han sido recuperados previamente
  if (!data) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        data = JSON.parse(request.responseText); // Almacenar los datos en la variable data
        updateData(); // Llamar a la función para actualizar los datos
      }
    }
    request.open("GET", "ajax.json");
    request.send();
  } else {
    updateData(); // Si los datos ya están disponibles, simplemente actualizar la interfaz
  }
}

function updateData() {
  // Actualizar el título, el contenido y el video con los datos almacenados en la variable data
  titleArea.innerHTML = data[number].title;
  contentArea.innerHTML = data[number].content;
  videoArea.setAttribute("src", data[number].url);
  number == 2 ? number = 0 : number++;
}

// Agregar el evento click al botón para llamar a la función getData
button.addEventListener('click', getData);

// Llamar a la función getData cuando se carga la página por primera vez
window.onload = getData;
