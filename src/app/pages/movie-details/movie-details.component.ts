import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from '../../service/movie-api-service.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
  providers: [MovieApiServiceService],
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private service: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}
  getMovieDetailsResult: any;
  getMovieVideosResult: any;
  getMovieCastResult: any;
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }
  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((result) => {
      console.log(result, 'getmoviedetails#');
      this.getMovieDetailsResult = result;
    });
  }

  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((result) => {
      result.results.forEach((element: any) => {
        if (element.type == 'Trailer') {
          this.getMovieVideosResult = element.key;
        }
      });
    });
  }
  getMovieCast(id: any) {
    this.service.getMovieCast(id).subscribe((result) => {
      console.log(result.cast, 'cast_results#');
      this.getMovieCastResult = result.cast;
    });
  }
}
