import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-qrscaner',
  templateUrl: './qrscaner.page.html',
  styleUrls: ['./qrscaner.page.scss'],
})
export class QrscanerPage implements OnInit {

 
  isOn = false;
  scannedData: {};

  constructor(private qrScanner: QRScanner, private navCtrl: NavController) {
  }

  ngOnInit() {
  }

	async startScanner() {
   		this.qrScanner.prepare()
    		.then((status: QRScannerStatus) => {
        		if (status.authorized) {
          			this.isOn = true;
			        // start scanning
			        const scanSub = this.qrScanner.scan().subscribe((text: string) => {
			        	alert('Scanned something: '+ text);
			            this.navCtrl.back();

			            this.isOn = false;
			            this.qrScanner.hide().then();
			            scanSub.unsubscribe();
          			});
          			this.qrScanner.show().then();
		        } else if (status.denied) {
		          // camera permission was permanently denied
		          // you must use QRScanner.openSettings() method to guide the user to the settings page
		          // then they can grant the permission from there
		          this.qrScanner.openSettings();
        		} else {
          		// permission was denied, but not permanently. You can ask for permission again at a later time.
        		}
      		})
      	.catch((e: any) => console.log('Error is', e));
  	}

}
