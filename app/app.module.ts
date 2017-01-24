import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ElementComponent } from './elements/element.component';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';
import { BohrModalComponent } from './bohr-modal/bohr-modal.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ElementComponent, PeriodicTableComponent, BohrModalComponent, FilterComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
