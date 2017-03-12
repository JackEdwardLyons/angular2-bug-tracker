/* Core Module 
 * Before this module is initialized it will check if another instance exists.
 * Only ONE instance of the Core Module can exist. (ie) Singleton 
 * Be sure to import into the Root Module of the app (AppModule)
 */
import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
// Services
import { FirebaseConfigService } from './service/firebase-config.service';

@NgModule({
    imports:      [],
    declarations: [],
    exports:      []
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule ) {
        // if this module exists...
        if ( parentModule ) {
            throw new Error (
                "CoreModule already exists. Only import in the root/app module"
            )
        }
    }

    // Create a Singleton instance of the CoreModule
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            // FireBase service provided here and it is now a Singleton (ie) only one instance created
            providers: [ FirebaseConfigService ]
        };
    }
}