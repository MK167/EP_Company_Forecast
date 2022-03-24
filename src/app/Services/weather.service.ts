import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
readonly BaseUrl = environment.BaseUrl;
readonly AppID = environment.AppID;
readonly CountryName = environment.CountryName;
apiUrlTable: string = `data/2.5/weather?q=${this.CountryName}&appid=${this.AppID}`;
headers = new HttpHeaders().set('Content-Type', 'application/json');

constructor(private httpClient: HttpClient) { }

  //Get All
  GetAll(): Observable<any> {
    return this.httpClient.get(this.BaseUrl + this.apiUrlTable)
    .pipe(
      catchError(this.handleError))
    }

  // Handle API errors << You Can Add this Function as an Interceptor >>
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

}
