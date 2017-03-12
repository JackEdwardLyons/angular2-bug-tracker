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
/* This is a Feature Module
   While we can do everything within the root module, feature modules help us
   partition the app into areas of specific interest and purpose.
*/
var core_1 = require('@angular/core');
var shared_module_1 = require('../shared/shared.module');
var bug_routing_module_1 = require('./bug-routing.module');
var forms_1 = require('@angular/forms');
// Components
var bug_list_component_1 = require('./bug-list/bug-list.component');
var bug_detail_component_1 = require('./bug-detail/bug-detail.component');
// Service
var bug_service_1 = require('./service/bug.service');
var BugModule = (function () {
    function BugModule() {
    }
    BugModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, bug_routing_module_1.BugRoutingModule, forms_1.ReactiveFormsModule],
            declarations: [bug_list_component_1.BugListComponent, bug_detail_component_1.BugDetailComponent],
            exports: [],
            providers: [bug_service_1.BugService]
        }), 
        __metadata('design:paramtypes', [])
    ], BugModule);
    return BugModule;
}());
exports.BugModule = BugModule;
//# sourceMappingURL=bug.module.js.map