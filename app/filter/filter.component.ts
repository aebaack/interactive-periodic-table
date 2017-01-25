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

  // Initializes filter with no filter parameters
  ngOnInit() {
    this.elements = this._elementService.elements;
    this.filter = {
      groupBlock: [],
      standardState: 'any'
    };
  }

  // Highlights all table elements matching filter criteria
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

  // Returns true if there are parameters to filter by
  filterHasParameters(): boolean {
    return this.filter.groupBlock.length !== 0 || 
      this.filter.standardState !== 'any';
  }

  // Returns true if the given element's group is included in the groupBlock
  // filter parameter array
  elementIsInGroupBlock(element: Element) {
    if (this.filter.groupBlock.length === 0) {
      return true;
    } else {
      return this.filter.groupBlock
        .some(groupBlock => groupBlock === element.groupBlock);
    }
  }

  // Returns true if the given element's standard state is the same as the
  // standardState filter parameter
  elementIsInStandardState(element: Element) {
    if (this.filter.standardState === 'any') {
      return true;
    } else {
      return this.filter.standardState === element.standardState;
    }
  }

  // Adds a new groupBlock to the group block filter parameters
  // If the groupBlock passed in is 'nonmetal', then all non-metals are added
  // If the groupBlock passed in is 'metal', then all metals are added
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

  // Returns true if the groupBlock is already a filter parameter
  groupBlockAlreadyInArray(groupBlock: string): boolean {
    return this.filter.groupBlock
      .some(filterGroupBlock => filterGroupBlock === groupBlock)
  }

  // Sets the group block filter to include all non-metal elements
  highlightAllMetals(): void {
    this.filter.groupBlock = [
      'halogen', 
      'noble gas', 
      'nonmetal'
    ];
  }

  // Sets the group block filter to include all metal elements
  highlightAllNonMetals(): void {
    this.filter.groupBlock = [
      'actinoid', 
      'alkaline earth metal', 
      'alkali metal', 
      'lanthanoid', 
      'metal',
      'transition metal' 
    ];
  }

  // Sets the standardState filter parameter to the string passed in
  addStandardState(standardState: string): void {
    this.filter.standardState = standardState;
    this.highlightElements();
  }

  // Clears all filter parameters
  clearFilter(): void {
    this.filter.groupBlock = [];
    this.filter.standardState = 'any';
    this.highlightElements();
  }
}
