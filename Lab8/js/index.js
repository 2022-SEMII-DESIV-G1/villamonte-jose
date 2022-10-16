let cadenaDeCaracteres;

// Accion al presionar el boton "Calcular"
document.getElementById("calcBtn").onclick = function() {
  // Se captura la cadena de caracteres digitada en el input
  cadenaDeCaracteres = document.getElementById("textInput").value;
  if (cadenaDeCaracteres.length >= 1) {
    // Se habilita el boton de limpiar
    document.getElementById("buttonBox").style.justifyContent = 'space-between';
    document.getElementById("cleanBtn").style.display = 'flex'; 
  }
  // Se imprime el resultado en HTML
  document.getElementById("resultado").innerHTML = contadorDeCaracteres(cadenaDeCaracteres);
} 

// Accion al presionar el boton "Limpiar"
document.getElementById("cleanBtn").onclick = function() {
  document.getElementById("textInput").value = "";
  document.getElementById("resultado").innerHTML = "";
  // Se deshabilita el boton "Limpiar" (invisible)
  document.getElementById("buttonBox").style.justifyContent = 'right';
  document.getElementById("cleanBtn").style.display = 'none'; 
} 

// Funcion que recibe la cadena de caracteres como argumento
function contadorDeCaracteres(texto) {
  // Separamos los caracteres en la cadena
  let textoTemporal = texto.split('');
  // Inicializamos un array vacio
  let caracteresUnicos = [...new Set(texto)];
  let caracteres = [];

  for(let i = 0; i < caracteresUnicos.length; i++) {   
        
    let contador = 0; 

    for(let j = 0; j < textoTemporal.length; j++) {
      if (caracteresUnicos[i] === textoTemporal[j]) {
        contador++;
      } 
    }

    let caracter = `${caracteresUnicos[i]}: ${contador}<br>`;
    caracteres = [...caracteres, caracter];
  }

  return caracteres.join('');
}