import { Component, OnInit } from '@angular/core';
import { ElementService } from '../elements/elements.service';
import { Element } from '../elements/element';

@Component({
  moduleId: module.id,
  selector: 'pt-filter',
  templateUrl: 'filter.component.html',
    styleUrls: ['filter.component.css'] 
})

export class FilterComponent implements OnInit {
  elements: Element[];

  constructor(private _elementService: ElementService) {
  }

  ngOnInit() {
    this.elements = this._elementService.elements;
    this._elementService.highlightElement(2);
  }

  highlight(): void {
    for (let i = 0; i < this.elements.length; i++) {
      if (this.elements[i].groupBlock === 'transition metal') {
        this._elementService.highlightElement(i);
      }
    }
  }
}
