import { Injectable } from '@angular/core';
// Integrate all of the Firebase SDK from the firebase module
import * as firebase from 'firebase';
require('firebase/database');

// Constants 
import { FIREBASE_CONFIG } from '../constant/constants';

@Injectable()
export class FirebaseConfigService {
    // reference the database to allow other parts of system to have access
    private database: firebase.database.Database;

    constructor() {
        this.configureApp();
        this.configureDatabase();
    }

    configureApp() {
        // initialize firebase
        firebase.initializeApp( FIREBASE_CONFIG );
    }

    configureDatabase() {
        // ensure that other parts of the system can use firebase
        this.database = firebase.database();
    }
}