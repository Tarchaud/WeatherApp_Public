import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey : string = 'API_Key';
  url : string = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

  constructor(private httpClient: HttpClient) { }

  getWeather(cityName : string) : Observable<any>{
    return this.httpClient.get<Observable<any>>(this.url + cityName + "&appid=" + this.apiKey);
  }

}
