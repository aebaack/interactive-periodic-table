import { Injectable } from '@angular/core';
import { readFileSync } from 'fs';

@Injectable()
export class ElementService {

  getElements(): any[] {
    const elements = readFileSync('./app/assets/elements.json', 'utf8');
    return JSON.parse(elements);
  }
}