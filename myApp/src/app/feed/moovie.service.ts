import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoovieService  {

  constructor( ) { }

    private http: HttpClient
    private key:string = "52472067375c2bf41eca1ea48df19f6b"
    private baseApiPath:string = "https://api.themoviedb.org/3";
    // private log(message: string) {
    //   this.messageService.add(`HeroService: ${message}`);
    // }
    getLatestMovies(){
      return this.http.get(this.baseApiPath+ `/movie/latest?api_key=${this.key}`)//.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=` + this.getApiKey());
  }

}
