import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  title = 'personal-finance-tool';

  // yearlyExpensesForm;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}
}
