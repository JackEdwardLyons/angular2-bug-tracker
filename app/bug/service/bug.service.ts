import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// Firebase
import { FirebaseConfigService } from '../../core/service/firebase-config.service';

// inject an instance of Firebase
@Injectable()
export class BugService {
    // points to our database endpoint
    private bugsDbRef = this.fire.database.ref('/bugs');
    
    constructor(private fire: FirebaseConfigService) { }

    // listen for child added in DB
    getAddedBugs(): Observable<any> {
        return Observable.create(obs => {
            // reference the DB service and every bug added
            this.bugsDbRef.on('child_added', bug => {
                // extracts contents of the data added and creates a JS object
                obs.next(bug.val());
            }, 
            err => {
                obs.throw(err);
            });
        });
    }
}