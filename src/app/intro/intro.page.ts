import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor() { }
  public slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  ngOnInit() {
  }

  goToTabsPage() {
      
  }

}
