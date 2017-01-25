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
      
      if (this.filter.groupBlock.length === 0 && this.filter.standardState === 'any') {
        this._elementService.unhighlightElement(i);
        continue;
      }

      const element = this.elements[i];

      const elementInGroupBlock = this.filter.groupBlock.length === 0 ? 
      true : 
      this.filter.groupBlock.some(
        groupBlock => groupBlock === element.groupBlock
      );

      const elementInState = this.filter.standardState === 'any' ? 
        true : 
        this.filter.standardState === element.standardState;
      
      if (elementInGroupBlock && elementInState) {
        this._elementService.highlightElement(i);
      } else {
        this._elementService.unhighlightElement(i);
      }
    }
  }

  addGroupBlock(groupBlock: string): void {
    if (groupBlock === 'nonmetal') {
      this.filter.groupBlock = ['noble gas', 'halogen', 'nonmetal'];
      return this.highlightElements();
    } else if (groupBlock === 'metal') {
      this.filter.groupBlock = ['transition metal', 'alkaline earth metal', 'alkali metal', 'lanthanoid', 'actinoid', 'metal'];
      return this.highlightElements();
    }

    const groupBlockAlreadyInArray = this.filter.groupBlock.some(
      filterGroupBlock => filterGroupBlock === groupBlock
    );
    if (!groupBlockAlreadyInArray) {
      this.filter.groupBlock.push(groupBlock);
      this.highlightElements();
    }
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
