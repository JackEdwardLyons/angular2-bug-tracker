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
// Constants 
var constants_1 = require('../constant/constants');
var FirebaseConfigService = (function () {
    function FirebaseConfigService() {
        this.configureApp();
    }
    FirebaseConfigService.prototype.configureApp = function () {
        // initialize firebase
        firebase.initializeApp(constants_1.FIREBASE_CONFIG);
        console.log(firebase);
    };
    FirebaseConfigService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FirebaseConfigService);
    return FirebaseConfigService;
}());
exports.FirebaseConfigService = FirebaseConfigService;
//# sourceMappingURL=firebase-config.service.js.map