import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { NavigationbarComponent } from './components/navigationbar/navigationbar.component';
import { NgProgressModule } from 'ngx-progressbar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CodeEditorComponent, NavigationbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgProgressModule.withConfig({
      thick: true,
      color: '#3f51b5',
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
