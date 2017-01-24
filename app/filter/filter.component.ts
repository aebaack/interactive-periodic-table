import { Component, OnInit } from '@angular/core';
import { ElementService } from '../elements/elements.service';

@Component({
  moduleId: module.id,
  selector: 'pt-filter',
  templateUrl: 'filter.component.html',
    styleUrls: ['filter.component.css'] 
})

export class FilterComponent implements OnInit {

  constructor(private _elementService: ElementService) {
  }

  ngOnInit() {
    this._elementService.highlightElement(2);
  }
}
