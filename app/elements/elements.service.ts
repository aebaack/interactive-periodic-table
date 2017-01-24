import { Injectable } from '@angular/core';
import { readFileSync } from 'fs'; // calls the readFileSync method from the node file system module

@Injectable()
export class ElementService {

  elements: any[];

  // synchronously returns the elements from elements.json
  getElements(): void {
    this.elements = JSON.parse(readFileSync('./app/assets/elements.json', 'utf8'));
    // elements[0].highlight = true;
    // return elements;
  }
}