import { Component, OnInit } from '@angular/core';
import { ElementService } from '../elements/elements.service';

@Component({
  moduleId: module.id,
  selector: 'pt-table',
  templateUrl: 'periodic-table.component.html'
})

export class PeriodicTableComponent implements OnInit {
  elements: any[];
  elementHeight: number;

  constructor(private _elementService: ElementService) {  
  }

  ngOnInit(): void {
    this.elements = this._elementService.getElements();

    this.elementHeight = this.setHeight();
    window.addEventListener('resize', () => {
      this.elementHeight = this.setHeight();
    });
  }

  setHeight(): number {
    return document.getElementById('element_1').offsetWidth;
  }

  getElement(atomicNumber: number): Object {
    return this.elements.find(element => element.atomicNumber === atomicNumber); 
  }

  hoverReceived(element: Object): void{
    console.log(element);
  }
    // ^ receives element data from child component

}

