import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
})
export class LoginViewComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
  });
  formValid: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
