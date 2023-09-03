import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { ExpensesState } from '../../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'pft-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less'],
})
export class HomePageComponent {
  @Select(ExpensesState.selectHasGoneThroughSteps)
  hasGoneThroughSteps$: Observable<boolean>;
}
