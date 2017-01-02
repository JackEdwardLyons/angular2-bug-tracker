import { Injectable } from '@angular/core';
// Integrate all of the Firebase SDK from the firebase module
import * as firebase from 'firebase';
// Constants 
import { FIREBASE_CONFIG } from '../constant/constants';

@Injectable()
export class FirebaseConfigService {
    constructor() {
        this.configureApp();
    }

    configureApp() {
        // initialize firebase
        firebase.initializeApp( FIREBASE_CONFIG );
        console.log(firebase);
    }
}