import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { RegiForm } from '../pages/page2/registration/registration';
import { SubmForm } from '../pages/page2/submit/submit';
import { Page3 } from '../pages/page3/page3';
import { Page4 } from '../pages/page4/page4';

import { DataService } from './data.service';
import { GoogleMaps } from '@ionic-native/google-maps';

import { CalendarModule } from 'ionic2-calendar2';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Page1,
    Page2,
    RegiForm,
    SubmForm,
    Page3,
    Page4
  ],
  imports: [
    CalendarModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Page1,
    Page2,
    RegiForm,
    SubmForm,
    Page3,
    Page4
  ],
  providers: [
    GoogleMaps,
    DataService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
