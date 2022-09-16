'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

function $Promise(executor) {
    if (typeof executor !== 'function') throw new TypeError('typeof executor is not a function')
    this._state = 'pending';
    this._internalResolve = data => (data);
    this._internalReject = data => (data)
}

let promise = new $Promise(executor)

let executor = function(resolve, reject) {
    if (resolve) $Promise.this._state = 'fulfilled'
    else $Promise._state = 'rejected'
}

// promise instanceof $Promise

// promise.prototype.fullfilled = function(data) {
//     this.state = 'fullfilled'
// }



module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
