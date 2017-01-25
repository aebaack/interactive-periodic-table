import { Component, OnInit } from '@angular/core';
import { ElementService } from '../elements/elements.service';
import { Element } from '../elements/element';
import { Filter } from './filter';

@Component({
  moduleId: module.id,
  selector: 'pt-filter',
  templateUrl: 'filter.component.html',
    styleUrls: ['filter.component.css'] 
})
export class FilterComponent implements OnInit {
  elements: Element[];
  filter: Filter;

  constructor(private _elementService: ElementService) {
  }

  ngOnInit() {
    this.elements = this._elementService.elements;
    this.filter = {
      groupBlock: [],
      standardState: 'any'
    };
  }

  highlightElements(): void {
    for (let i = 0; i < this.elements.length; i++) {
      const element = this.elements[i];
      const filterHasParameters = this.filterHasParameters();
      const elementInGroupBlock = this.elementIsInGroupBlock(element);
      const elementInState = this.elementIsInStandardState(element);
      
      if (filterHasParameters && elementInGroupBlock && elementInState) {
        this._elementService.highlightElement(i);
      } else {
        this._elementService.unhighlightElement(i);
      }
    }
  }

  filterHasParameters(): boolean {
    return this.filter.groupBlock.length !== 0 || 
      this.filter.standardState !== 'any';
  }

  elementIsInGroupBlock(element: Element) {
    if (this.filter.groupBlock.length === 0) {
      return true;
    } else {
      return this.filter.groupBlock
        .some(groupBlock => groupBlock === element.groupBlock);
    }
  }

  elementIsInStandardState(element: Element) {
    if (this.filter.standardState === 'any') {
      return true;
    } else {
      return this.filter.standardState === element.standardState;
    }
  }

  addGroupBlock(groupBlock: string): void {
    if (groupBlock === 'nonmetal') {
      this.highlightAllMetals();
    } else if (groupBlock === 'metal') {
      this.highlightAllNonMetals();
    } else if (!this.groupBlockAlreadyInArray(groupBlock)) {
      this.filter.groupBlock.push(groupBlock);
    }
    this.highlightElements();
  }

  groupBlockAlreadyInArray(groupBlock: string): boolean {
    return this.filter.groupBlock
      .some(filterGroupBlock => filterGroupBlock === groupBlock)
  }

  highlightAllMetals(): void {
    this.filter.groupBlock = [
      'halogen', 
      'noble gas', 
      'nonmetal'
    ];
    // this.highlightElements();
  }

  highlightAllNonMetals(): void {
    this.filter.groupBlock = [
      'actinoid', 
      'alkaline earth metal', 
      'alkali metal', 
      'lanthanoid', 
      'metal',
      'transition metal' 
    ];
    // this.highlightElements();
  }

  addStandardState(standardState: string): void {
    this.filter.standardState = standardState;
    this.highlightElements();
  }

  clearFilter(): void {
    this.filter.groupBlock = [];
    this.filter.standardState = 'any';
    this.highlightElements();
  }
}
