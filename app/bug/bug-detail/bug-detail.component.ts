import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { forbiddenStringValidator } from '../../shared/validation/forbidden-string.validator';

@Component({
    moduleId: module.id,
    selector: 'bug-detail', 
    templateUrl: 'bug-detail.component.html',
    styleUrls: [ 'bug-detail.component.css' ]
})
export class BugDetailComponent implements OnInit { 

    private modalId = "bugModal";
    private bugForm: FormGroup;

    // Inject the FormBuilder module
    constructor(private formB: FormBuilder) { }
    
    ngOnInit() {
        this.configureForm();
    }

    configureForm() {
        /* Demonstrating two methods to creating Reactive Forms 
         * This is an example of Reactive forms 
         * which create specific fields within
         * the Bug description form.
         */

        /* Method 1: Using imported FormBuilder Component
         *************************************************/
        this.bugForm = this.formB.group({
            title:       [null, [Validators.required, forbiddenStringValidator(/puppy/i)]],
            status:      [1, Validators.required],
            severity:    [1, Validators.required],
            description: [null, Validators.required]
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
    }

    submitForm() {
        console.log(this.bugForm); // in the console look at the _value property
    }
}