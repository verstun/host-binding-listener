import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // name must be the same as a selector
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      //create element in container
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      //remove element from the DOM
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
