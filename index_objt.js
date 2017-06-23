var assert = require('assert');

//1
function Rectangulo(base,altura){
  this.base = base;
  this.altura = altura;
  this.calcularArea = function () {
    return this.base*this.altura;
  };
}
var rectangulo = new Rectangulo(4,5);

//2
function Persona(nombre, dia, mes, año){
  this.nombre = nombre;
  this.dia=dia;
  this.mes=mes;
  this.año=año;
  this.edad = function (añoA) {
    if(this.dia>=dia && this.mes>=mes){
      return añoA - this.año;
    }
    else{
      return añoA - this.año -1;
    }
  };
}

var edadPersona = new Persona("su",23,8,1991);

function Constructor(nombre,edad,pasatiempo){
  this.nombre=nombre;
  this.edad=edad;
  this.pasatiempo=pasatiempo;
  this.rol=function(){
    return ('Hola soy ' + this.nombre + ' tengo ' + this.edad + ' años y me gusta ' + this.pasatiempo);
  }
}

var rolPersona = new Constructor('Ana',20,'bailar');


describe('Ejercicio 1', function(){
  it('Area del rectangulo entre 4 y 5', function(){
    assert.equal(20, rectangulo.calcularArea());
  });
});

describe('Ejercicio 2', function(){
  it('Halla la edad de Su', function(){
    assert.equal(26, edadPersona.edad(2017));
  });
});

describe('Ejercicio 3', function(){
  it('Rol de una persona', function(){
    assert.deepEqual('Hola soy Ana tengo 20 años y me gusta bailar', rolPersona.rol());
  });
});
