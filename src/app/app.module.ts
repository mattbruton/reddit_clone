import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubredditListComponent } from './header/subreddit-list/subreddit-list.component';
import { SortingTabComponent } from './header/sorting-list/sorting-tab/sorting-tab.component';
import { SortingListComponent } from './header/sorting-list/sorting-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubredditListComponent,
    SortingTabComponent,
    SortingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
