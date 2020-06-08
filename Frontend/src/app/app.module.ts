import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PranayamaModule } from './pranayama/pranayama.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { PranayamaService } from './pranayama/pranayama.service';
import { CommentComponent } from './comment/comment.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MeditationModule } from './meditation/meditation.module';
import { CalendrierModule } from './calendrier/calendrier.module';
import { SignUpModule } from './sign-up/sign-up.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommentComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    PranayamaModule,
    MeditationModule,
    CalendrierModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    SignUpModule
  ],
  entryComponents: [CommentComponent],
  providers: [PranayamaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
