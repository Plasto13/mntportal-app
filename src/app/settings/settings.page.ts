import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public serveAddress: string;
  public darkMode: boolean;
  constructor(private storage: Storage, public toastController: ToastController, private navCtrl:NavController) {
      this.serveAddress = 'https://';
      this.darkMode = false;
      console.log('kurva');
  }
  ngOnInit() {
  	this.getDefault('darkMode');
  	this.getDefault('serveAddress');
  }

  saveData(){
   this.storage.set('serveAddress', this.serveAddress);
   this.storage.set('darkMode', this.darkMode);
   console.log(this.darkMode+' '+this.serveAddress);
   this.presentToast();
   this.navCtrl.back();   
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      position: 'middle',
      color:'success',
      duration: 2000
    });
    toast.present();
  }

  getDefault(key:string){
    this.storage.get(key).then((val) => {
    if(key === 'darkMode'){
    	this.darkMode = val;
    }
    else if(key === 'serveAddress') {
    	this.serveAddress = val;
    }
  	});
  }
}
