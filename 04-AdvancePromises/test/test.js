var Promise = require('bluebird');

// var doSomething = function() {
//     var promise = new Promise(function(resolve, reject){
//        setTimeout(function() {
//           console.log('1');          
//        }, 1000); // 
//     });
//     return promise;
//  };

//  var doSomethingElse = function() {
//     var promise = new Promise(function(resolve, reject){
//        setTimeout(function() {
//           console.log('1');          
//        }, 1000); // 
//     });
//     return promise;
//  };

//  var finalHandler = function() {
//     var promise = new Promise(function(resolve, reject){
//        setTimeout(function() {
//           console.log('1');          
//        }, 1000); // 
//     });
//     return promise;
//  };

function doSomething() {
    var promise = new Promise(function(resolve, reject){
        setTimeout(function() {
           console.log('1');          
        }, 1000); // 
     });
     return promise;
} 

function doSomethingElse() {
    var promise = new Promise(function(resolve, reject){
        setTimeout(function() {
           console.log('2');          
        }, 1000); // 
     });
     return promise;
}     

function finalHandler() {
    var promise = new Promise(function(resolve, reject){
        setTimeout(function() {
           console.log('3');          
        }, 1000); // 
     });
     return promise;
}

// 1
// doSomething().then(function () {
//     return doSomethingElse();
//   }).then(finalHandler)

// 1 
//   doSomething().then(function () {
//     doSomethingElse();
//   }).then(finalHandler);

// 1 2 
//   doSomething().then(doSomethingElse())
//   .then(finalHandler);

// 1
// doSomething().then(doSomethingElse)
//   .then(finalHandler);

// 1 2 3 
doSomething().then(doSomethingElse())
  .then(finalHandler());