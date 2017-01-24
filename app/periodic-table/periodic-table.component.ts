import { Component, OnInit } from '@angular/core';
import { ElementService } from '../elements/elements.service';

declare var Atom: any;


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
  Atom: any;

  constructor(private _elementService: ElementService) {
  }

  ngOnInit(): void {
    this._elementService.getElements();
    this.elements = this._elementService.elements;

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
    document.getElementById("bohr-model-container").innerHTML = ""; //^clearing html model

    this.Atom = new Atom({
        containerId: '#bohr-model-container',
        numElectrons: this.element.atomicNumber, // An integer between 1 and 118
        nucleusRadius: 30, // If not supplied will be 1/12 of the containers width
        nucleusColor: 'rgba(124,240,10,0.5)', // Hex, string or rbga
        electronRadius: 3, // Default value is 3
        electronColor: 'pink', // See nucleusColor
        orbitalSpacing: 10, // If not specified will be a 1/3rd of the nucleusRadius
        orbitalWidth: 1, // width of orbital paths, default is 0.1
        orbitalColor: 'black', // see electronColor
        idNumber: 1, // Required int to provide unique Atoms
        animationTime: 1300, // Time in milliseconds for initial electron animation
        rotateConfig: {speed: 50, clockwise: true}, // Rotates entire Atom with given params
        orbitalRotationConfig: { // Invokes orbital rotations at initialization
        pattern: {
        alternating: false, // Alternate orbital direction
        clockwise: false, // Direction for all orbitals
        preset: 'cubedPositive', // String to set pattern (see Features section)
    }
  },
    symbolOffset: 8, // When modifying nucleus radius this may need adjusting
    drawSymbol: true // Render atomic symbol or not
    });
  }
}