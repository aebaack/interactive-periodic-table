import { Component, OnInit } from '@angular/core';
import { ElementService } from '../elements/elements.service';

@Component({
  moduleId: module.id,
  selector: 'pt-table',
  templateUrl: 'periodic-table.component.html',
  styleUrls: ['periodic-table.component.css']
})

export class PeriodicTableComponent implements OnInit {
  elements: any[];
  elementHeight: number;
  element: any;
  showModal: boolean;

  constructor(private _elementService: ElementService) {  
  }

  ngOnInit(): void {
    this.elements = this._elementService.getElements();

    this.elementHeight = this.setHeight();
    window.addEventListener('resize', () => {
      this.elementHeight = this.setHeight();
    });
    
    this.showModal = false;
  }

  setHeight(): number {
    return document.getElementById('element_1').offsetWidth;
  }

  getElement(atomicNumber: number): Object {
    return this.elements.find(element => element.atomicNumber === atomicNumber); 
  }

  hoverReceived(element: Object): void {
    this.element = element;
  }
    // ^ receives element data from child component

  toggleBohrModal(): void {
    this.showModal = !this.showModal;
  }

}