// ejercicio 1
function multiplicacion(arreglo, num) {
    var resultado = arreglo.reduce(function(total,numero){
       return total*numero;
    });
    return resultado*num;
}

// Ejercicio 2
function numeroCelular(_telefonos, _filtro)
{
  return _telefonos.filter(function(a){
  var primeras = a.toString().substr(0,3);
  var ultimas = a.toString().substr(-3);
    return (primeras == _filtro || ultimas == _filtro);
    });
 }
}

// Ejercicio 3
function verificaArray(arreglo, num) {
     var array = [];
     var resultado = arreglo.forEach(function(arreglo){
        if(arreglo%num==0){
           return array.push(arreglo);
        }
    });
  return array;
}

// Ejercicio 4
function arrayOperacion(arreglo){
   var resultado = arreglo.map(function(arreglo){
        return arreglo*2+1;
    });
  return resultado;
}

// Ejercicio 5
function arrayTemperatura(arreglo){
  return arreglo.map(function(arreglo){
        return ((9*arreglo)/5) + 32;
    });
}

// Ejercicio 6
function multi(arreglo) {
    return arreglo.reduce(function(total,numero){
       return total*numero;
    });
}

// Ejercicio 7
function edades(arreglo) {
     var array = [];
     var resultado = arreglo.forEach(function(edad){
        if(edad%2==0 && edad>18){
           return array.push(edad);
        }
    });
  return array;
}
