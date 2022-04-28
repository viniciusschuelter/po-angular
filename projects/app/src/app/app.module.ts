import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//import { PoModule } from '@po-ui/ng-components';
import { PoModule } from '../../../ui/src/lib';

import { AppComponent } from './app.component';
import { PoTemplatesModule } from '../../../templates/src/lib';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoCodeEditorModule } from '../../../code-editor/src/lib';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PoCodeEditorModule,
    FormsModule,
    ReactiveFormsModule,
    PoTemplatesModule,
    RouterModule.forRoot([], { relativeLinkResolution: 'legacy' }),
    PoModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
