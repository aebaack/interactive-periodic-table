import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ElementComponent } from './elements/element.component';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ElementComponent, PeriodicTableComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
