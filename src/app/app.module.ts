import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartComponent} from './shared/app.chart';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
