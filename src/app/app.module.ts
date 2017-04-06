import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FundraiserListComponent } from './fundraiser-list/fundraiser-list.component';
import { FundraiserTileComponent } from './fundraiser-tile/fundraiser-tile.component';
import { FundraiserDetailComponent } from './fundraiser-detail/fundraiser-detail.component';
import { StoryUpdatesComponent } from './story-updates/story-updates.component';
import { FundnessPipe } from './fundness.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FundraiserListComponent,
    FundraiserTileComponent,
    FundraiserDetailComponent,
    StoryUpdatesComponent,
    FundnessPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
