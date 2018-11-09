import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
import { AutenticarPage } from '../pages/autenticar/autenticar';
import { RegistrarPage } from '../pages/registrar/registrar';

@NgModule({
  declarations: [
    MyApp,
    AutenticarPage,
    RegistrarPage,
    //HomePage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AutenticarPage,
    RegistrarPage,
    //HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
