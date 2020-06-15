import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlertService } from 'src/app/shareds/services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/shareds/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private builder: FormBuilder,
    private alert:AlertService,
    private router:Router,
    private account: AccountService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
