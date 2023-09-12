import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { StepsModule } from 'primeng/steps';
import { MessagesModule } from 'primeng/messages';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { RouterModule } from '@angular/router';
import { EditExpenseComponent } from './components';
import { KeydownStopPropagationDirective } from './directives';
import { CheckboxModule } from 'primeng/checkbox';
import { TagModule } from 'primeng/tag';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';

const PRIMENG_MODULES = [
  ButtonModule,
  InputNumberModule,
  InputTextModule,
  TableModule,
  StepsModule,
  MessagesModule,
  TooltipModule,
  DropdownModule,
  SidebarModule,
  CheckboxModule,
  TagModule,
  OverlayPanelModule,
  CardModule,
  ChartModule,
  MenuModule,
];

const COMPONENTS = [EditExpenseComponent];

const DIRECTIVES = [KeydownStopPropagationDirective];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [CommonModule, FormsModule, RouterModule, ...PRIMENG_MODULES],
  exports: [
    FormsModule,
    RouterModule,
    ...PRIMENG_MODULES,
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
})
export class SharedModule {}
