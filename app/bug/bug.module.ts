import { NgModule }     from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BugRoutingModule } from './bug-routing.module';

// Components
import { BugListComponent } from './bug-list/bug-list.component';

@NgModule({
    imports:      [ SharedModule, BugRoutingModule ],
    declarations: [ BugListComponent ],
    exports:      [ ],
    providers:    [ ]
}) // no semicolon here -->
/* Decorators are expressions that return a function. (ie) decorator is not a statement. 
   Statements tell the compiler to do things, and need semi-colons (or new lines) to be stopped. 
   Expressions just return values.
*/
export class BugModule { }