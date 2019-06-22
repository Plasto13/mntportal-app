import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public serveAddress: string;
  public darkMode: boolean;
  constructor(private storage: Storage) {
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
     console.log(this.darkMode) 
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
