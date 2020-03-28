import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {

  constructor(private route: Router) { }
  
  nextHome() {
    console.log("click")
    this.route.navigate(['home/tabs/feed']);
  }
}
