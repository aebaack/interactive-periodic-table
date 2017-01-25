import { Component, Input, Output, EventEmitter, OnChanges  } from '@angular/core';
import { Element } from './element';

@Component({
  moduleId: module.id,
  selector: 'pt-element',
  templateUrl: 'element.component.html',
    styleUrls: ['element.component.css'] 

})

export class ElementComponent implements OnChanges {
  @Input() elementData: Element;
  // ^ exposes elementData property to parent component, listens for parent component to send data to child

  @Output() elementHovered: EventEmitter<Object> = new EventEmitter<Object>();
  // ^ exposes which element is being hovered on to the parent component, sends proper data to hoverReceived fxn

  elementStyle: Object = {};

  ngOnChanges(): void {
    console.log('this ran');
    if (this.elementData.highlight) {
      this.elementStyle = {'background-color': 'pink'};
    }
  }

  onHover(): void {
    console.log(this.elementData);
    this.elementHovered.emit(this.elementData);
  }
  // ^ sends data into emit channel to be picked up by parent component

}
