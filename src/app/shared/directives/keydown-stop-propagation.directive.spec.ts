import { KeydownStopPropagationDirective } from './keydown-stop-propagation.directive';

describe('KeydownStopPropagationDirective', () => {
  it('should create an instance', () => {
    const directive = new KeydownStopPropagationDirective();
    expect(directive).toBeTruthy();
  });

  it('should call stopPropagation on event', () => {
    const directive = new KeydownStopPropagationDirective();
    const event = jasmine.createSpyObj('event', ['stopPropagation']);
    
    directive.onKeydown(event);
    
    expect(event.stopPropagation).toHaveBeenCalled();
  });
});
