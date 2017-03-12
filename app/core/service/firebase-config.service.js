"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// Integrate all of the Firebase SDK from the firebase module
var firebase = require('firebase');
require('firebase/database');
/* Firebase notes
 * Setup API endpoint listeners up at the lowest possible endpoint
 * This will preserve data usage and increase speed.
 * Events:
 *  - Child Added ( added objects/data of the children within the endpoint )
 *  - Child Changed ( updated data )
 *  - Child Removed ( reacts to a child being deleted )
 */
// Constants 
var constants_1 = require('../constant/constants');
var FirebaseConfigService = (function () {
    function FirebaseConfigService() {
        this.configureApp();
        this.configureDatabase();
    }
    Object.defineProperty(FirebaseConfigService.prototype, "database", {
        // create a getter method to retreive private database data
        get: function () {
            return this._database;
        },
        enumerable: true,
        configurable: true
    });
    FirebaseConfigService.prototype.configureApp = function () {
        // initialize firebase
        firebase.initializeApp(constants_1.FIREBASE_CONFIG);
    };
    FirebaseConfigService.prototype.configureDatabase = function () {
        // ensure that other parts of the system can use private firebase data
        this._database = firebase.database();
    };
    FirebaseConfigService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FirebaseConfigService);
    return FirebaseConfigService;
}());
exports.FirebaseConfigService = FirebaseConfigService;
//# sourceMappingURL=firebase-config.service.js.map