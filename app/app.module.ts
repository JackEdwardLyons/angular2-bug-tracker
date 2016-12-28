// import Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BugModule } from '../bug/bug.module';
// import Components
import { AppComponent } from './app.component';

@NgModule({
    imports:      [ BrowserModule, BugModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }