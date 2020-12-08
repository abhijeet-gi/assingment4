import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ilistcomponent } from './product/ilist.component';
import { ItemService } from './ilist.service';
import { selectitemcomponent } from './product/selectitem.component';

@NgModule({
  declarations: [
    AppComponent,ilistcomponent,selectitemcomponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
