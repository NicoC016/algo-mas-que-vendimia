import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlashMessagesModule } from 'flash-messages-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './components/pages.module';
import { NotesService } from './components/pages/notes/services/service-notes.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AuthModule } from '@auth0/auth0-angular';
import { HomeModule } from './components/pages/home/home.module';
import { SharedModule } from 'src/shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PagesModule,
    HomeModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    AuthModule.forRoot({
      domain: 'dev-fj0fm4ncpd41aeut.us.auth0.com',
      clientId: 'ebBI8JiVgl8Nb4jaZCIx23RC9y96nwzY',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    FlashMessagesModule.forRoot(),
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
