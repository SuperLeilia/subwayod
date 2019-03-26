import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ErrorMessage} from "ng-bootstrap-form-validation";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  inputID: string;
  idFormGroup: FormGroup;
  customErrorMessages: ErrorMessage[] = [
    {
      error: 'required',
      format: (label, error) => `${label.toUpperCase()}不能为空！`
    },
    {
      error: 'pattern',
      format: (label, error) => `${label.toUpperCase()}格式应为数字！`
    }
  ];
  constructor() { }

  ngOnInit() {
    this.idFormGroup = new FormGroup({
      ID : new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]*$/)
      ])
    })
  }

  onIDSubmit() {
  }

}
