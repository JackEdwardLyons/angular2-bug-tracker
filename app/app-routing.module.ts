import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import { BugListComponent } from './bug/bug-list/bug-list.component';

@NgModule({
    imports: [ 
        // define app paths
        RouterModule.forRoot([
            { path: '', component: BugListComponent }
        ]) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }