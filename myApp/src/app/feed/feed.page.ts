import { Component, OnInit } from '@angular/core';
import { MoovieService } from './moovie.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public nome_usuario: string = "João"
  public feed = [{
    Nome_pessoa: "Lucas Viana",
    Img_pessoa: "assets/Image/Avatar.jpg",
    data_feed: "11 de Outubro de 2019",
    image_Feed: "assets/Image/madison.jpg",
    Subtitulo:"Destino",
    Titulo: "Madison, WI",
    Descricao: " Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836. "
  },{
    Nome_pessoa: "Izilda Carvalho",
    Img_pessoa: "assets/Image/Avatar.jpg",
    data_feed: "12 de Outubro de 2019",
    image_Feed: "assets/Image/madison.jpg",
    Subtitulo:"Destino",
    Titulo: "São Paulo, SP",
    Descricao: " São Paulo é um a bela cidade "
  }]



  constructor(private moovieService: MoovieService) { }

  ngOnInit() {
    console.log("Bem vindo")
    this.somaDoisNumeros(99,100);
  }
  
  public somaDoisNumeros(num1:number, num2:number): void {
    //alert(`${num1}+${num2}=${num1+num2}`)
  }

}
