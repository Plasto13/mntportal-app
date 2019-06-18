import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { IonicModule } from '@ionic/angular';

import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {

  public serveAddress : string = 'no moja adresa';
  public darkMode = false;
  //key: string = 'settings';

  constructor( private storage: NativeStorage) {
    this.serveAddress = 'no moja adresa';
    this.darkMode = true;
   alert(this.serveAddress) ;
  }

//  saveData(){
  //   this.storage.setItem(this.key, this.settings);
    // console.log(this.settings) 
  //}

  //getDefault(){
    //this.storage.getItem(this.key).then((val) => {
      //  this.settings = val;
    //});
  //}

}
