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
var forms_1 = require('@angular/forms');
var forbidden_string_validator_1 = require('../../shared/validation/forbidden-string.validator');
var BugDetailComponent = (function () {
    // Inject the FormBuilder module
    function BugDetailComponent(formB) {
        this.formB = formB;
        this.modalId = "bugModal";
    }
    BugDetailComponent.prototype.ngOnInit = function () {
        this.configureForm();
    };
    BugDetailComponent.prototype.configureForm = function () {
        /* Demonstrating two methods to creating Reactive Forms
         * This is an example of Reactive forms
         * which create specific fields within
         * the Bug description form.
         */
        /* Method 1: Using imported FormBuilder Component
         *************************************************/
        this.bugForm = this.formB.group({
            title: [null, [forms_1.Validators.required, forbidden_string_validator_1.forbiddenStringValidator(/puppy/i)]],
            status: [1, forms_1.Validators.required],
            severity: [1, forms_1.Validators.required],
            description: [null, forms_1.Validators.required]
        });
        /* Method 2: Creating a new FormGroup and FormControl Object
         ************************************************************
        this.bugForm = new FormGroup({
            // set default values in FormControl with the
            // first parameter, and validation in the second
            title: new FormControl(null, [Validators.required, forbiddenStringValidator(/puppy/i)]),
            // select initial as first value
            status: new FormControl(1, Validators.required),
            severity: new FormControl(1, Validators.required),
            description: new FormControl(null, Validators.required)
        }); */
    };
    BugDetailComponent.prototype.submitForm = function () {
        console.log(this.bugForm); // in the console look at the _value property
    };
    BugDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bug-detail',
            templateUrl: 'bug-detail.component.html',
            styleUrls: ['bug-detail.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], BugDetailComponent);
    return BugDetailComponent;
}());
exports.BugDetailComponent = BugDetailComponent;
//# sourceMappingURL=bug-detail.component.js.map