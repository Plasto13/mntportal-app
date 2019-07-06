import { Component, OnInit, Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Settings } from 'src/app/models/settings';
import { SettingsService } from 'src/app/services/settings.service';



@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public settings: Settings;

  constructor(private settingsService : SettingsService) {

  }
  ngOnInit() {
  	this.settings = this.settingsService.settings;

            console.log(this.settings);
  }

  saveData(){
    this.settingsService.saveLocalSettings(this.settings)  
  }
}
