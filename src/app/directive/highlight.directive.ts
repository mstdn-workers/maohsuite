import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input()
  set appHighlight(condition: any) {
    this.el.nativeElement.style.background = condition ? 'yellow' : null;
  }

}
