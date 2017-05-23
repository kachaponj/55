import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { ShowDetailPage } from '../pages/showdetail/showdetail';
import { ContactPage } from '../pages/contact/contact';
import { AddConPage } from '../pages/addCon/addCon';
import { EditPage } from '../pages/edit/edit';
import { EditDetailPage } from '../pages/editdetail/editdetail';
import { ReminderService } from '../services/reminder.service'; 
import { ContactService } from '../services/contact.service'; 
import { ContactDetail } from '../pages/contactdetail/contactdetail';
import { SettingPage } from '../pages/setting/setting';
import { AbsPage } from '../pages/abs/abs';
import { BackPage } from '../pages/back/back';
import { BicepPage } from '../pages/bicep/bicep';
import { ChestPage } from '../pages/chest/chest';
import { BenchPage } from '../pages/bench/bench';
import { ChinupPage } from '../pages/chinup/chinup';
import { HammerPage } from '../pages/hammer/hammer';
import { BenchpressPage } from '../pages/benchpress/benchpress';
 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    ShowDetailPage,
    EditPage,
    EditDetailPage,
    ContactPage,
    AddConPage,
    ContactDetail,
    SettingPage,
    AbsPage,
    BackPage,
    BicepPage,
    ChestPage,
    BenchPage,
    ChinupPage,
    HammerPage,
    BenchpressPage,
  ],
  imports: [
      IonicModule.forRoot(MyApp, {
      backButtonText: 'Go back',
      backButtonIcon: 'arrow-back'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    ShowDetailPage,
    EditPage,
    EditDetailPage,
    ContactPage,
    AddConPage,
    ContactDetail,
    SettingPage,
    AbsPage,
    BackPage,
    BicepPage,
    ChestPage,
    BenchPage,
    ChinupPage,
    HammerPage,
    BenchpressPage,
  ],
  
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ReminderService,ContactService],
  
})
export class AppModule {}
