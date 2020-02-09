import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill'
import {ReactiveFormsModule} from '@angular/forms';

import {NoSanitizePipe} from './no-sanitize-pipe.pipe';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, QuillModule.forRoot(), FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, NoSanitizePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
