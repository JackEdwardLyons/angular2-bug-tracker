import { Injectable } from '@angular/core';
// Integrate all of the Firebase SDK from the firebase module
import * as firebase from 'firebase';
require('firebase/database');
/* Firebase notes
 * Setup API endpoint listeners up at the lowest possible endpoint 
 * This will preserve data usage and increase speed.
 * Events: 
 *  - Child Added ( added objects/data of the children within the endpoint )
 *  - Child Changed ( updated data )
 *  - Child Removed ( reacts to a child being deleted )
 */

// Constants 
import { FIREBASE_CONFIG } from '../constant/constants';

@Injectable()
export class FirebaseConfigService {
    // reference the database to allow other parts of system to have access
    // make database variable private so it cannot be modified
    private _database: firebase.database.Database;

    constructor() {
        this.configureApp();
        this.configureDatabase();
    }

    // create a getter method to retreive private database data
    public get database() {
        return this._database;
    }

    configureApp() {
        // initialize firebase
        firebase.initializeApp( FIREBASE_CONFIG );
    }

    configureDatabase() {
        // ensure that other parts of the system can use private firebase data
        this._database = firebase.database();
    }
}