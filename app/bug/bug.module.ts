import { NgModule }     from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports:      [ SharedModule ],
    declarations: [ ],
    exports:      [ ],
    providers:    [ ]
}) // no semicolon here -->
/* Decorators are expressions that return a function. (ie) decorator is not a statement. 
   Statements tell the compiler to do things, and need semi-colons (or new lines) to be stopped. 
   Expressions just return values.
*/
export class BugModule { }