import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {}

  onSubmit() {
    console.log(1);
  }
}
