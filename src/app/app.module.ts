import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecComponent } from './sec/sec.component';
import { ListComponent } from './list/list.component';
import { SearchPipePipe } from './search-pipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SecComponent,
    SearchPipePipe
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
   
