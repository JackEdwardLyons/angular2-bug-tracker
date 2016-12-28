import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ ],
    exports:      [ CommonModule ]
    // don't import providers here, use the call module instead
})
export class SharedModule { };