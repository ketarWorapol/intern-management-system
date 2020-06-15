import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// component module
import {MatSelectModule} from '@angular/material/select';
@Injectable({
  providedIn: 'root'
}) 


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  declarations: [

  ],
  exports: [ 
    MatSelectModule
  ],
  providers:[
  ] 
})
export class SharedsService {

  constructor() { }
}

export class SharedsModule { }