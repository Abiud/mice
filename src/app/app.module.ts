import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { FirestoreService } from './services/firestore.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MouseListComponent } from './components/mouse-list/mouse-list.component';
import { MouseComponent } from './components/mouse/mouse.component';
import { AddMouseComponent } from './components/add-mouse/add-mouse.component';
import { EditMouseComponent } from './components/edit-mouse/edit-mouse.component';
import { RemoveMouseComponent } from './components/remove-mouse/remove-mouse.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MouseListComponent,
    MouseComponent,
    AddMouseComponent,
    EditMouseComponent,
    RemoveMouseComponent,
    NavbarComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [FirestoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
