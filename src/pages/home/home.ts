import { Component, NgZone } from "@angular/core";
import { ModalController, NavController, Platform } from 'ionic-angular';  
import { ReminderService } from '../../services/reminder.service';   
import { ShowDetailPage } from '../showdetail/showdetail';  
import { DetailsPage } from '../details/details';  
import {AbsPage} from '../abs/abs';
import { BackPage } from '../back/back';
import { BicepPage } from '../bicep/bicep';
import { ChestPage } from '../chest/chest';
import { BenchPage } from '../bench/bench';
import { ChinupPage } from '../chinup/chinup';
import { HammerPage } from '../hammer/hammer';
import { BenchpressPage } from '../benchpress/benchpress';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  
    
        DashB=AbsPage
        BackB=BackPage
        bicepI=BicepPage
        chestI=ChestPage
        benchI=BenchPage
        chinupI = ChinupPage
        hammerI = HammerPage
        benchpressI = BenchPage
    public reminder = [];

    constructor(private reminderService: ReminderService,
        private nav: NavController,
        private platform: Platform,
        private zone: NgZone,
        private modalCtrl: ModalController) {

    }

    ionViewDidLoad() {
        this.platform.ready().then(() => {
            this.reminderService.initDB();

            this.reminderService.getAll()
                .then(data => {
                    this.zone.run(() => {
                        this.reminder = data;
                    });
                })
                .catch(console.error.bind(console));
        });
    }
    AddDetail(reminder) {
        
        let modal = this.modalCtrl.create(DetailsPage, { reminder: reminder });
        modal.present();
    }

    showDetail(reminder) {
        let modal = this.modalCtrl.create(ShowDetailPage, { reminder: reminder });
        modal.present();
       
    }

}