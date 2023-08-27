import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[pftKeydownStopPropagation]',
})
export class KeydownStopPropagationDirective {
  @HostListener('keydown', ['$event'])
  public onKeydown(event: any): void {
    event.stopPropagation();
  }
}
