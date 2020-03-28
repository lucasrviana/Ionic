import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public nome_usuario: string = "João"
  constructor() { }

  ngOnInit() {
    console.log("Bem vindo")
    this.somaDoisNumeros(99,100);
  }
  
  public somaDoisNumeros(num1:number, num2:number): void {
    //alert(`${num1}+${num2}=${num1+num2}`)
  }

}
