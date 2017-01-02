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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/* Core Module
 * Before this module is initialized it will check if another instance exists.
 * Only ONE instance of the Core Module can exist.
 * Be sure to import into the Root Module of the app (AppModule)
 */
var core_1 = require('@angular/core');
var CoreModule = (function () {
    function CoreModule(parentModule) {
        // if this module exists...
        if (parentModule) {
            throw new Error("CoreModule already exists. Only import in the root/app module");
        }
    }
    // Create a Singleton instance of the CoreModule
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule,
            // FireBase service provided here
            providers: []
        };
    };
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [],
            declarations: [],
            exports: []
        }),
        __param(0, core_1.Optional()),
        __param(0, core_1.SkipSelf()), 
        __metadata('design:paramtypes', [CoreModule])
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map