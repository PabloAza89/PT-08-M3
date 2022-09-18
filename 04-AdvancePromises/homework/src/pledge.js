"use strict";
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

var promise = new $Promise(executor);

var executor = function (resolve, reject) {
    if (resolve === true) {
        resolve(value);
    } else {
        reject(reason);
    }
};

function $Promise(executor) {
    if (typeof executor !== "function")
        throw new TypeError("typeof executor is not a function");
    this._state = "pending";
    this._value = {};

    this._internalResolve = function (value) {
        if ( this._state === "pending" && Object.keys(this._value).length === 0) {
            if (typeof value === "undefined") {
                this._value = undefined;
                this._state = "fulfilled";
            } else if (typeof value === "string") {
                this._value = value;
                this._state = "fulfilled";
            } else if (typeof value === "object") {
                this._value = value;
                this._state = "fulfilled";
            }
        }
    };

    this._internalReject = function (reason) {
        if (this._state === "pending" && Object.keys(this._value).length === 0) {
            if (typeof reason === "number") {
                this._value = reason;
                this._state = "rejected";
            } else if (typeof reason === "string") {
                this._value = undefined;
                this._state = "rejected";
            } else if (typeof reason === "undefined") {
                this._value = undefined;
                this._state = "rejected";
            } else if (typeof reason === "object") {
                this._value = reason;
                this._state = "rejected";
            }
        }
    };
}

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
