import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ConfigService } from './config/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private config: ConfigService,
    private route: Router
  ) {
    this.initializeApp();
  }



  initializeApp() {
    this.platform.ready().then(() => {
      let config = this.config.getConfigData();

      this.statusBar.styleDefault();
      this.splashScreen.hide();


      if (config == null) {
        this.config.setConfigData(false)
        this.route.navigate(['intro']);
      }
      else
        this.route.navigate(['home/tabs/feed']);
    });
  }
}
