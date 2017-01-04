import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bug-detail', 
    templateUrl: 'bug-detail.component.html',
    styleUrls: [ 'bug-detail.component.css' ]
})
export class BugDetailComponent  { 

    private modalId = "bugModal";
}