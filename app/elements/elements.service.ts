import { Injectable } from '@angular/core';
import { readFileSync } from 'fs'; // calls the readFileSync method from the node file system module

@Injectable()
export class ElementService {

  // synchronously returns the elements from elements.json
  getElements(): any[] {
    const elements = readFileSync('./app/assets/elements.json', 'utf8');
    //return JSON.parse(elements);
    return [];
  }
}