import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public nome_usuario: string = "João"
  public filmes = new Array<any>()

  constructor(private movieService: MovieService) { }

  public teste;

  ngOnInit() {
    console.log("Bem vindo")
    this.somaDoisNumeros(99, 100);
    this.movieService.getPopularMovies()
      .subscribe(data => {
        let teste
        console.log(data)
        teste = { ...data }
        this.filmes = teste.results
      }, error => {
        console.log(error)
      })
    //console.log(teste)
  }

  public verposter(url): string {
    return this.movieService.verposter(url)
  }

  public temImagem(imagem): boolean {
    console.log(imagem)
    if (imagem == null) {
      
      return false;
    }
    else
      return true;
  }

  public somaDoisNumeros(num1: number, num2: number): void {
    //alert(`${num1}+${num2}=${num1+num2}`)
  }

}
