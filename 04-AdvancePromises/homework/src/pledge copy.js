"use strict";
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

// CONVIENE COMO PROTOTYPE, ASI MEJORA SU RENDIMIENTO


function $Promise(executor) {
    if (typeof executor !== "function") throw new TypeError("typeof executor is not a function");
    
    this._state = "pending";
    this._value = undefined
    this._handlerGroups = [];
    

    this._internalResolve = function(value) {
                
        if ( this._state === "pending") {
            this._value = value;
            this._state = "fulfilled";
            
            
            this._callHandlers()
            
        }
       
    };

    this._internalReject = function (reason) {
        if (this._state === "pending" ) {
            this._value = reason;
            this._state = "rejected";
            this._callHandlers()
        }
    };

    this.then = function(successCb, errorCb) {
        
        if (typeof successCb !== 'function' ) successCb = false
        if (typeof errorCb !== 'function' ) errorCb = false
        
        let downstreamPromise = new $Promise(function(){})
        
        this._handlerGroups.push({successCb, errorCb, downstreamPromise})
        
        if (this._state !== 'pending') this._callHandlers()
     
        return downstreamPromise
    }

    this.catch = function(errorCb) {       
        return this.then(null, errorCb)
    }

    this._callHandlers = function() {
        
        while (this._handlerGroups.length > 0) {
            let current = this._handlerGroups.shift();
            if (this._state === 'fulfilled') {
                if (!current.successCb) { 
                    current.downstreamPromise._internalResolve(this._value)
                } else {
                    try {
                        const result = current.successCb(this._value)
                        if (result instanceof $Promise) {
                            result.then(value => current.downstreamPromise._internalResolve(value), err => current.downstreamPromise._internalReject(err));
                        } else {
                            current.downstreamPromise._internalResolve(result)
                        }
                    } catch(e) {
                        current.downstreamPromise._internalReject(e)
                    }
                }
            }
            else if (this._state === 'rejected') {
                if (!current.errorCb) {
                    current.downstreamPromise._internalReject(this._value)
                } else {
                    try {
                        const result = current.errorCb(this._value)
                        if (result instanceof $Promise) {
                            result.then(value => current.downstreamPromise._internalResolve(value), err => current.downstreamPromise._internalReject(err));
                        } else {
                            current.downstreamPromise._internalResolve(result)
                        }
                    } catch(e) {
                        current.downstreamPromise._internalReject(e)
                    }
                }
                
            }
        }
        
        
    }

    

       executor(this._internalResolve.bind(this), this._internalReject.bind(this))
}







var promise = new $Promise(executor);


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
