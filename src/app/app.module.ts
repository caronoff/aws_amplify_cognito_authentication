import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/* Add Amplify imports */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [AmplifyUIAngularModule /* Add Amplify module */, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
