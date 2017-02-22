
function convertirFarenheit(){
  
  var valor = parseInt(document.getElementById("celsius").value);
  if(isNaN(valor)){
    alert("Ingrese valor");
  }else{
    var farenheit = 9 * valor / 5 + 32;
    document.getElementById("farenheit").value = farenheit.toFixed(2);
  }

}

function convertirCelsius(){
  var valor = parseInt(document.getElementById("farenheit").value);
  if(isNaN(valor)){
    alert("Ingrese valor");
  }else{
    var celsius = (valor-32) * 5 / 9;
    document.getElementById("celsius").value = celsius.toFixed(2);
  }

}
