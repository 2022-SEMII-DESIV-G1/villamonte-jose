// Data - arreglo de arreglos
let pyramidData = [
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 04, 82, 47, 65],
    [19, 01, 23, 75, 03, 34],
    [88, 02, 77, 73, 07, 63, 67],
    [99, 65, 04, 28, 06, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23]
]

// Cantidad de Filas en la pirámide
const N = 15

// Función para encontrar la suma máxima (recursividad)
function maxPath(pyramidData, i, j, row, col) {
  if (j == col) {
    return 0;
  }   
  if (i == row-1) { 
    return pyramidData[i][j];
  }   
  return pyramidData[i][j] + Math.max(maxPath(pyramidData, i+1, j, row, col), maxPath(pyramidData, i+1, j+1, row, col));
}

// Añadimos el total en HTML
const total = document.getElementById("total");
total.innerHTML = maxPath(pyramidData, 0, 0, N, N);

// Contador que se utilizara para crear un ID unico para cada elemento creado en la pirámide
let cubeId = 0;

// Añadir el contenido de la pirámide
const pyramidContainer = document.getElementById("pyramid");

pyramidData.forEach(niveles => {                                                              // Iteramos el arreglo de arreglos, iniciando por el 1er elemento en el nivel superior (fila)
  cubeId++;                                                                                   // Incrementamos contador para cada ID diferente
  const rowDiv = document.createElement("div");                                               // Creamos un div dentro de <section id="pyramid">
  rowDiv.id = `cubeId${cubeId}`;                                                              // Añadimos el atributo id concatenando un texto y el contador previamente incrementado (cubeId)
  pyramidContainer.appendChild(rowDiv);                                                       // Añadimos el <div> a la <section id="pyramid">...servira de contenedor para cada elemento del arreglo por cada fila
  niveles.forEach(column => {                                                                 // Iteramos el arreglo en cada nivel, de principio a fin
    const columnDiv = document.getElementById(`cubeId${cubeId}`);                             // Llamamos al elemento por el id creado previamente
    const childElement = document.createElement("div");                                       // Creamos un div dentro de cada "nivel"...con el fin de manipular esos elementos
    childElement.innerHTML = column;                                                          // Añadimos el texto (número) de cada elemento a HTML
    columnDiv.appendChild(childElement);                                                      // Añadimos el <div> recien creado al <div> previamente creado...cada uno contiene cada elemento de la pirámide
  });
});