import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'pt-element',
  templateUrl: 'element.component.html'
})

export class ElementComponent {
  @Input() elementData: Object;

  @Output() elementHovered: EventEmitter<Object> = new EventEmitter<Object>();

  onHover(): void{
    this.elementHovered.emit(this.elementData);
  }

}
