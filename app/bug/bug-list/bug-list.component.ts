import { Component, OnInit } from '@angular/core';
// Services
import { BugService } from '../service/bug.service';
//Models
import { Bug } from '../model/bug';

@Component({
    moduleId:     module.id,
    selector:    'bug-list',
    templateUrl: 'bug-list.component.html',
    styleUrls:   [ 'bug-list.component.css' ]
})
export class BugListComponent implements OnInit {
    // create an empty array to store bugs that are added to the database
    private bugs: Bug[] = [];

    // subscribe to the BugService
    constructor(private bugService: BugService ) { }

    ngOnInit() {
        this.getAddedBugs();
    }


    // Get Bugs onInit
    getAddedBugs() {
        this.bugService.getAddedBugs()
            .subscribe(bug => {
                this.bugs.push(bug);
            },
            err => {
                console.error('Unable to get added bug:', err);
            });
    }


    // update Bugs
    getUpdatedBug() {
        this.bugService.changedListener()
         .subscribe(updatedBug => {
              this.bugs = this.bugs.map(bug => {
                  if (bug.id === updatedBug.id) {
                      return updatedBug;
                  } else {
                      return bug;
                  }
              });
           }, err => {
               console.error('unable to get updated bug - ', err);
           });
    }

 }