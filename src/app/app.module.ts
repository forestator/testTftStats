import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {BureauComponent} from './bureau/bureau.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MainContentComponent} from './main-content/main-content.component';
import {MatTableModule} from '@angular/material/table';
import {UnixToDatePipe} from './pipe/unix-to-date.pipe';
import {CharacterIdToNamePipe} from './pipe/character-id-to-name.pipe';
import {TopChampionComponent} from './top/top-champion/top-champion.component';
import {TopCompComponent} from './top/top-comp/top-comp.component';
import {PourcentagePipe} from './pipe/pourcentage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BureauComponent,
    MainContentComponent,
    UnixToDatePipe,
    UnixToDatePipe,
    TopCompComponent,
    CharacterIdToNamePipe,
    TopChampionComponent,
    PourcentagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
