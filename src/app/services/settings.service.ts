import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { AlertService } from 'src/app/services/alert.service';
import { Settings } from 'src/app/models/settings';
import { Injectable} from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
}) 

export class SettingsService {

	public settings : Settings;

  	constructor(private storage: Storage,
  				private alertService : AlertService,
  				private navCtrl: NavController) {
  					this.settings = new Settings;
  					this.settings.darkMode = false;
  					this.settings.serveAddress = 'http://';
  					this.loadLocalSettings(); 
  				}

  saveLocalSettings(settings : Settings) {
  	this.settings = settings;
  	//this.settings.created_at = Date.now();
  	console.log(this.settings);
   
	this.storage.set('settings', this.settings);
	this.alertService.presentToast('Settings saved', 'middle','success');
	this.navCtrl.back();
  }

  	loadLocalSettings(){
   		this.storage.get('settings').then((val: Settings) => {
			this.settings = val;
  		})
	}




}
