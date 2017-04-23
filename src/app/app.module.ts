import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { Principal } from '../pages/principal/principal';
import { ErrorMessages } from "../services/validacoes/error-messages";
import { Alertas } from '../utils/alertas';

@NgModule({
  declarations: [
    MyApp,
    Login,
    Principal,
    ErrorMessages
  ],
  imports: [
    BrowserModule,
     HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Principal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Alertas,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
