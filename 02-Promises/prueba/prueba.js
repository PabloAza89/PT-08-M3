var primerMetodo = function() {
    var promise = new Promise(function(resolve, reject){
       setTimeout(function() {
          console.log('Terminó el primer método');
          resolve({num: '123'}); //pasamos unos datos para ver como los manejamos
       }, 2000); // para simular algo asincronico hacemos un setTimeOut de 2 s
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
          resolve({hola:1});
       }, 3000);
    });
    return promise;
 };
 
 Promise.all([primerMetodo(), segundoMetodo(), tercerMetodo()])
  .then(function(resultado){
   console.log(resultado); //un arreglo con los valores pasamos a resolve en cada metodo
  });