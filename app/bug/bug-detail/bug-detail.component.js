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
var bug_service_1 = require('../service/bug.service');
var bug_1 = require('../model/bug');
var BugDetailComponent = (function () {
    // Inject the FormBuilder and BugService components
    function BugDetailComponent(formB, BugService) {
        this.formB = formB;
        this.BugService = BugService;
        this.modalId = "bugModal";
        // Create a temporary Bug to store initial Bug details
        this.currentBug = new bug_1.Bug(null, null, null, null, null, null, null, null, null);
    }
    /* Methods
     * * * * * */
    BugDetailComponent.prototype.ngOnInit = function () {
        this.configureForm();
    };
    BugDetailComponent.prototype.configureForm = function () {
        /* Demonstrating two methods to creating Reactive Forms
         * This is an example of Reactive forms
         * which create specific fields within
         * the Bug description form.
         */
        /* Method 1: Using imported FormBuilder Class
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
        this.addBug();
    };
    BugDetailComponent.prototype.addBug = function () {
        // Create a bug Object from the form to pass into the addBug method within the Service
        this.currentBug.title = this.bugForm.value['title'];
        this.currentBug.status = this.bugForm.value['status'];
        this.currentBug.severity = this.bugForm.value['severity'];
        this.currentBug.description = this.bugForm.value['title'];
        // The createdBy and createdDate have been set in the Service itself and
        // are written to the DB
        this.BugService.addBug(this.currentBug);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BugDetailComponent.prototype, "currentBug", void 0);
    BugDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bug-detail',
            templateUrl: 'bug-detail.component.html',
            styleUrls: ['bug-detail.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, bug_service_1.BugService])
    ], BugDetailComponent);
    return BugDetailComponent;
}());
exports.BugDetailComponent = BugDetailComponent;
//# sourceMappingURL=bug-detail.component.js.map