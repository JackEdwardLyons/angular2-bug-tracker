/* This is a Feature Module 
   While we can do everything within the root module, feature modules help us 
   partition the app into areas of specific interest and purpose.
*/
import { NgModule }         from '@angular/core';
import { SharedModule }     from '../shared/shared.module';
import { BugRoutingModule } from './bug-routing.module';

// Components
import { BugListComponent }   from './bug-list/bug-list.component';
import { BugDetailComponent } from './bug-detail/bug-detail.component';

// Service
import { BugService } from './service/bug.service';

@NgModule({
    imports:      [ SharedModule, BugRoutingModule ],
    declarations: [ BugListComponent, BugDetailComponent ],
    exports:      [ ],
    providers:    [ BugService ]
}) // no semicolon here -->
/* Decorators are expressions that return a function. (ie) decorator is not a statement. 
   Statements tell the compiler to do things, and need semi-colons (or new lines) to be stopped. 
   Expressions just return values.
*/
export class BugModule { }