import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Settings } from 'src/app/models/settings';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
 
export class HomePage {

	public settings: Settings;

	constructor(private qrScanner: QRScanner, private settingsService : SettingsService) {
	}

	ngOnInit() {
  	this.settings = this.settingsService.settings;

            console.log(this.settings);
  }

	async prepare(){
	// Optionally request the permission early
	this.qrScanner.prepare()
	  .then((status: QRScannerStatus) => {
	     if (status.authorized) {
	       // camera permission was granted
	       this.qrScanner.show();

	       // start scanning
	       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
	         console.log('Scanned something', text);

	         this.qrScanner.hide(); // hide camera preview
	         scanSub.unsubscribe(); // stop scanning
	       });

	     } else if (status.denied) {
	       // camera permission was permanently denied
	       // you must use QRScanner.openSettings() method to guide the user to the settings page
	       // then they can grant the permission from there
	     } else {
	       // permission was denied, but not permanently. You can ask for permission again at a later time.
	     }
	  })
	  .catch((e: any) => console.log('Error is', e));
	}

}
