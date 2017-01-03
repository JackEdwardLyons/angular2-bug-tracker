import { Injectable } from '@angular/core';

// Firebase
import { FirebaseConfigService } from '../../core/service/firebase-config.service';

// inject an instance of Firebase
@Injectable()
export class BugService {
    constructor(private fire: FirebaseConfigService) {

    }
}