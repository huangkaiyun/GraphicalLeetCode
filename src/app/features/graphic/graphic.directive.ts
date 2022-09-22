import {
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { BaseGraphicComponent } from './base-graphic.component';

@Directive({
  selector: '[graphic]',
})
export class GraphicDirective implements OnChanges {
  @Input() graphic?: {
    component: Type<BaseGraphicComponent>;
    data?: any[];
  };
  @Output() result$ = new EventEmitter<any>();

  constructor(public viewContainerRef: ViewContainerRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!!this.graphic && changes['graphic']) {
      this.viewContainerRef.clear();
      const component = this.viewContainerRef.createComponent(
        this.graphic.component
      );
      component.instance.data = this.graphic.data;
      if (this.graphic.data)
        this.result$.emit(component.instance.answer(this.graphic.data));
    }
  }
}
