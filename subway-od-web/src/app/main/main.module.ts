import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MainComponent} from "./main.component";
import {NgBootstrapFormValidationModule} from "ng-bootstrap-form-validation";

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    NgBootstrapFormValidationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MainComponent
  ],
})
export class MainModule { }
