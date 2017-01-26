import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pt-button',
  templateUrl: 'filter-button.component.html',
    styleUrls: ['filter-button.component.css'] 

})

export class FilterButtonComponent implements OnInit, OnChanges {
  @Input() name: string;
  @Input() filterGroupBlocks: string[];
  
  buttonName: string;

  ngOnInit(): void {
    this.buttonName = this.returnButtonName(this.name);
  }

  ngOnChanges(): void {
    if (this.filterGroupBlocks.length === 1) {
      const filterGroup = this.filterGroupBlocks[0];
    }
  }

  returnButtonName(groupName: string): string {
    switch (groupName) {
      case 'noble gas':
        return 'Noble Gases';
      case 'halogen':
        return'Halogens';
      case 'nonmetal':
        return 'Other';       
      default:
        break;
    }
  }
  
}
