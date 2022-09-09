var primerMetodo = function() {
    var promise = new Promise(function(resolve, reject){
       setTimeout(function() {
          console.log('Terminó el primer método');
          reject('Esto es una prueba controlada');
       }, 2000); // 
    });
    return promise;
 };
  
 var segundoMetodo = function() {
    var promise = new Promise(function(resolve, reject){
       setTimeout(function() {
          console.log('Terminó el segundo método');
          resolve({texto:' segundo metodo'});
       }, 1000);
    });
    return promise;
 };
  
 var tercerMetodo = function(datos) {
    var promise = new Promise(function(resolve, reject){
       setTimeout(function() {
          console.log('Terminó el tercer método');
          reject('Tercer método falla');
       }, 3000);
    });
    return promise;
 };
 
 Promise.all([primerMetodo(), segundoMetodo(), tercerMetodo()])
  .then(function(resultado){
   console.log(resultado); //un arreglo con los valores pasamos a resolve en cada metodo
  })
  .catch( function(err){
   console.warn(err); //mostramos el error por consola. Veremos que es el que falló primero, o sea el del primer metodo
  });