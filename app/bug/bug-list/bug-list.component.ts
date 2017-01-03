import { Component, OnInit } from '@angular/core';
// Services
import { BugService } from '../service/bug.service';

@Component({
    moduleId:     module.id,
    selector:    'bug-list',
    templateUrl: 'bug-list.component.html',
    styleUrls:   [ 'bug-list.component.css' ]
})
export class BugListComponent implements OnInit {
    // subscribe to the BugService
    constructor(private bugService: BugService ) { }

    ngOnInit() {
        this.getAddedBugs();
    }

    getAddedBugs() {
        this.bugService.getAddedBugs()
            .subscribe(bug => {
                console.log(bug);
            },
            err => {
                console.error('Unable to get added bug:', err);
            });
    }


 }