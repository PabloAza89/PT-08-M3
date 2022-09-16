'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

function $Promise(executor) {
    if (typeof executor !== 'function') throw new TypeError('typeof executor is not a function')
    
    this._state = 'pending';
    this._value = {}
    this._internalResolve = function(data) {
        //if (data.toString() === 'null' && data.toString() === 'undefined' && data.toString() === 'undefined' && data.toString() === 'NaN') {

            
            if (Object.keys(this._value).length === 0) {
                if (data = undefined) {
                    this._value = data
                } else {
                    this._value = undefined
                }
                
                    
                
                
            }
            this._state = 'fulfilled';
        //}
    };
    this._internalReject = function() {
        
    }
}


var executor = function(resolve, reject) {
    // if (this._internalResolve()) return this._state = 'fulfilled'
    
}





var promise = new $Promise(executor)


// promise instanceof $Promise
// promise.prototype.fullfilled = function(data) {
//     this.state = 'fullfilled'
// }

//module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
