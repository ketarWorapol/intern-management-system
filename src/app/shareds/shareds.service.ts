import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// component module
@Injectable({
  providedIn: 'root'
}) 


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  declarations: [

  ],
  exports: [
  ],
  providers:[
  ] 
})
export class SharedsService {

  constructor() { }
}

export class SharedsModule { }