import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { ExpensesState } from '../../../store';
import { Observable, take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'pft-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less'],
})
export class HomePageComponent {
  @Select(ExpensesState.selectHasGoneThroughSteps)
  hasGoneThroughSteps$: Observable<boolean>;

  protected loading = true;

  constructor(private router: Router) {
    this.hasGoneThroughSteps$.pipe(take(1)).subscribe((hasGoneThroughSteps) => {
      if (hasGoneThroughSteps) {
        this.router.navigate(['your-expenses']);
      }

      this.loading = false;
    });
  }
}
