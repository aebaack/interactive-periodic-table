import { Component, OnInit } from '@angular/core';
import { ElementService } from '../elements/elements.service';

@Component({
  moduleId: module.id,
  selector: 'pt-table',
  templateUrl: 'periodic-table.component.html'
})

export class PeriodicTableComponent implements OnInit {
  elements: any[];

  constructor(private _elementService: ElementService) {  
  }

  ngOnInit(): void {
    this.elements = this._elementService.getElements();
  }


}
