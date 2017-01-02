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
// Testing purposes only. re: firebase
var firebase_config_service_1 = require('./core/service/firebase-config.service');
var AppComponent = (function () {
    // initialize firebase for testing purposes only
    function AppComponent(service) {
        this.service = service;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n    <navbar>\n    </navbar>\n        <div class=\"container\">\n            <router-outlet>\n            </router-outlet>\n        </div>\n    ",
            styles: ["\n        .container {\n            margin-top: 5rem;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [firebase_config_service_1.FirebaseConfigService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map