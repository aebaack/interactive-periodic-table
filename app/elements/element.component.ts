import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'pt-element',
  templateUrl: 'element.component.html'
})

export class ElementComponent {
  @Input() elementData: Object;
  // ^ exposes elementData property to parent component, listens for parent component to send data to child

  @Output() elementHovered: EventEmitter<Object> = new EventEmitter<Object>();
  // ^ exposes which element is being hovered on to the parent component, sends proper data to hoverReceived fxn

  onHover(): void {
    this.elementHovered.emit(this.elementData);
  }
  // ^ sends data into emit channel to be picked up by parent component

}
