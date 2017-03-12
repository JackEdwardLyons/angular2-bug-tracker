import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { forbiddenStringValidator } from '../../shared/validation/forbidden-string.validator';
import { BugService } from '../service/bug.service';
import { Bug } from '../model/bug';

@Component({
    moduleId: module.id,
    selector: 'bug-detail', 
    templateUrl: 'bug-detail.component.html',
    styleUrls: [ 'bug-detail.component.css' ]
})
export class BugDetailComponent implements OnInit { 
    private modalId = "bugModal";
    private bugForm: FormGroup;

    // Create a new instance of Bug with temporary placeholders & initial values
    @Input() currentBug = new Bug(null, null, 1, 1, null, null, null, null, null)
    // Inject the FormBuilder module and Bug Service
    constructor(private formB: FormBuilder, private bugService: BugService) { }
    
    
    /* Methods 
     **********/
    ngOnInit() {
        this.configureForm();
    }


    configureForm(bug?: Bug) {
        /* Demonstrating two methods to creating Reactive Forms 
         * This is an example of Reactive forms 
         * which create specific fields within
         * the Bug description form.
         */
        if (bug) {
            this.currentBug = new Bug(
                bug.id,
                bug.title,
                bug.status,
                bug.severity,
                bug.description, 
                bug.createdBy, 
                bug.createdDate, 
                bug.updatedBy,
                bug.updatedDate
            );
        }
        /* Method 1: Using imported FormBuilder Class
         *************************************************/
        this.bugForm = this.formB.group({
            // change initial values to link to the currentBug property values
            title:       [this.currentBug.title, [Validators.required, forbiddenStringValidator(/puppy/i)]],
            status:      [this.currentBug.status, Validators.required],
            severity:    [this.currentBug.severity, Validators.required],
            description: [this.currentBug.description, Validators.required]
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
        // create a Bug Object from our form that we can add via the Bug Service
        // createdBy / createdDate are set in the Service itself
        this.currentBug.title       = this.bugForm.value['title'];
        this.currentBug.status      = this.bugForm.value['status'];
        this.currentBug.severity    = this.bugForm.value['severity'];
        this.currentBug.description = this.bugForm.value['description'];
        // when submitting a bug for the first time the bug Object has an id of null
        // this makes it easier to update the bug as an id will be set from the DB
        // once entered.
        if (this.currentBug.id) {
            this.updateBug();
        } else {
            this.addBug();
        }
    }
    

    addBug() {
        this.bugService.addBug(this.currentBug);
        this.refreshForm();
    }


    updateBug() {
        this.refreshForm();
    }


    refreshForm() {
        // new Angular reset method
        this.bugForm.reset({
            status: 1,
            severity: 1
        });
        this.cleanBug();
    }


    cleanBug() {
        this.currentBug = new Bug(null, null, 1, 1, null, null, null, null, null)
    }

}