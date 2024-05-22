import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [MovieApiServiceService],
})
export class HomeComponent implements OnInit {
  constructor(private service: MovieApiServiceService) {}

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  scienceFictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.scienceFictionMovie();
    this.thrillerMovie();
  }

  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }
  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trending#');
      this.trendingMovieResult = result.results;
    });
  }
  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
    });
  }
  adventureMovie() {
    this.service.fetchAdventuresMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }
  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    });
  }
  comedyMovie() {
    this.service.fetchAComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }
  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
    });
  }
  scienceFictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      this.scienceFictionMovieResult = result.results;
    });
  }
  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    });
  }
}
