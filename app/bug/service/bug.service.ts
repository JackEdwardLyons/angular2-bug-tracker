import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// Firebase
import { FirebaseConfigService } from '../../core/service/firebase-config.service';
// Models
import { Bug } from '../model/bug';

// inject an instance of Firebase
@Injectable()
export class BugService {
    // points to our database endpoint
    private bugsDbRef = this.fire.database.ref('/bugs');
    // require FireBase in constructor
    constructor(private fire: FirebaseConfigService) { }


    // listen for child added in DB
    getAddedBugs(): Observable<any> {
        return Observable.create(obs => {
            // reference the DB service and every bug added
            this.bugsDbRef.on('child_added', bug => {
                // .val() extracts the structure of the Bug Model and creates a JS object
                const newBug = bug.val() as Bug;
                // collect id for each bug in the DB
                newBug.id = bug.key;
                obs.next(newBug);
            }, 
            err => {
                obs.throw(err);
            });
        });
    } // end getAddedBugs() 

    
    changedListener(): Observable<any> {
        return Observable.create(obs => {
            this.bugsDbRef.on('child_changed', bug => {
                const updatedBug = bug.val() as Bug;
                updatedBug.id = bug.key;
                obs.next(updatedBug);
            }, 
            err => {
                obs.throw(err);
            });
        });
    }


    // Add new Bug
    addBug(bug: Bug) {
        // create a reference to each new bug Object
        const newBugRef = this.bugsDbRef.push();
        newBugRef.set({
            title: bug.title,
            status: bug.status,
            severity: bug.severity,
            description: bug.description,
            createdBy: 'Jack Lyons',
            createdDate: Date.now()
        })
        .catch(err => console.error('Unable to add bug to firebase', err));
    } // end addBug() 


    // Update bug records to DB
    updateBug(bug: Bug) {
        const currentBugRef = this.bugsDbRef.child(bug.id);
        bug.id = null;
        bug.updatedBy = 'Jack Lyons';
        bug.updatedDate = Date.now();
        currentBugRef.update(bug);
    } // end updateBug() 
}