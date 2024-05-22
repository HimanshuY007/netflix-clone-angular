import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  constructor(private http: HttpClient) {}
  baseurl = 'https://api.themoviedb.org/3';
  apiKey = '8bb75960baad24df7d1b28611423293e';

  bannerApiData(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/trending/all/week?api_key=${this.apiKey}`
    );
  }
  trendingMovieApiData(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/trending/movie/day?api_key=${this.apiKey}`
    );
  }

  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');
    return this.http.get(
      `${this.baseurl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`
    );
  }
  getMovieDetails(data: any): Observable<any> {
    return this.http.get(
      `${this.baseurl}/movie/${data}?api_key=${this.apiKey}`
    );
  }
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(
      `${this.baseurl}/movie/${data}/videos?api_key=${this.apiKey}`
    );
  }
  getMovieCast(data: any): Observable<any> {
    return this.http.get(
      `${this.baseurl}/movie/${data}/credits?api_key=${this.apiKey}`
    );
  }
  fetchActionMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=28`
    );
  }
  fetchAdventuresMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=12`
    );
  }
  fetchAnimationMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=16`
    );
  }
  fetchAComedyMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=35`
    );
  }
  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=99`
    );
  }
  fetchScienceFictionMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=878`
    );
  }
  fetchThrillerMovies(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=53`
    );
  }
}
