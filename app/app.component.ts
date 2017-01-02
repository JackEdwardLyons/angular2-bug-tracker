import { Component }             from '@angular/core';
// Testing purposes only. re: firebase
import { FirebaseConfigService } from './core/service/firebase-config.service';

@Component({
    selector: 'app',
    template: `
    <navbar>
    </navbar>
        <div class="container">
            <router-outlet>
            </router-outlet>
        </div>
    `,
    styles: [`
        .container {
            margin-top: 5rem;
        }
    `]
})
export class AppComponent {
    // initialize firebase for testing purposes only
    constructor(private service: FirebaseConfigService) {
        
    }
 }