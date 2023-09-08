import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { EXPENSE_CATEGORIES, Expense } from '../../models';
import { ScreenSizeService } from '../../services';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'pft-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditExpenseComponent implements AfterViewInit {
  @Input()
  expense: Expense;

  protected expenseCategories = EXPENSE_CATEGORIES;

  createAnother: boolean = false;

  @ViewChild('expenseForm')
  expenseForm: NgForm;

  @ViewChild('expenseTitleInput')
  expenseTitleInput: ElementRef<HTMLInputElement>;

  @Output()
  saveExpense: EventEmitter<{ expense: Expense; createAnother: boolean }> =
    new EventEmitter();

  @Output()
  cancelEditExpense: EventEmitter<void> = new EventEmitter();

  constructor(protected screenSizeService: ScreenSizeService) {}

  ngAfterViewInit(): void {
    this.expenseTitleInput.nativeElement.focus();
  }

  protected handleSaveExpense() {
    this.saveExpense.emit({
      expense: this.expense,
      createAnother: this.createAnother,
    });

    this.expenseForm.form.markAsPristine();
    this.expenseTitleInput.nativeElement.focus();
  }
}
