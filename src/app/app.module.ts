import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MarkTextDirective } from './diretivas/mark-text.directive';
import { ListPeopleComponent } from './shared/components/list-people/list-people.component';
import { ListApiComponent } from './shared/components/list-api/list-api.component';
import { PeopleService } from './shared/service/people.service';

@NgModule({
  declarations: [
    AppComponent,
    MarkTextDirective,
    ListPeopleComponent,
    ListApiComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
