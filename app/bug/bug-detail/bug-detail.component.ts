import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ForbiddenStringValidator } from '../../shared/validation/forbidden-string.validator';

@Component({
    moduleId: module.id,
    selector: 'bug-detail', 
    templateUrl: 'bug-detail.component.html',
    styleUrls: [ 'bug-detail.component.css' ]
})
export class BugDetailComponent implements OnInit { 

    private modalId = "bugModal";
    private bugForm: FormGroup;

    ngOnInit() {
        this.configureForm();
    }

    configureForm() {
        // this is an example of Reactive forms 
        // which create specific fields within
        // the Bug description form.
        this.bugForm = new FormGroup({
            // set default values in FormControl with the
            // first parameter, and validation in the second
            title: new FormControl(null, Validators.required),
            // select initial as first value
            status: new FormControl(1, Validators.required),
            severity: new FormControl(1, Validators.required),
            description: new FormControl(null, Validators.required)
        });
    }

    submitForm() {
        console.log(this.bugForm); // in the console look at the _value property
    }
}