import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable(
  // {
  //   providedIn: 'root'
  // }
)
export class MovieService {

  constructor(private http: HttpClient) { }


  private key: string = "52472067375c2bf41eca1ea48df19f6b"
  private baseApiPath: string = "https://api.themoviedb.org/3";
  // private log(message: string) {
  //   this.messageService.add(`HeroService: ${message}`);
  // }
  getLatestMovies() {
    // console.log(this.baseApiPath+ `/movie/latest?api_key=${this.key}`)
    // return this.http.get(this.baseApiPath+ `/movie/latest?api_key=${this.key}`)
    return this.http.get(`${this.baseApiPath}/movie/latest?api_key=${this.key}`)
  }

  getPopularMovies() {
    // console.log(this.baseApiPath+ `/movie/latest?api_key=${this.key}`)
    // return this.http.get(this.baseApiPath+ `/movie/latest?api_key=${this.key}`)
    return this.http.get(`${this.baseApiPath}/movie/popular?api_key=${this.key}&language=pt-br`)
  }

  public verposter(url: string) {
    console.log(url);
    if (url == null)
      return undefined
    else
      return "https://image.tmdb.org/t/p/w500" + url;

  }
}
