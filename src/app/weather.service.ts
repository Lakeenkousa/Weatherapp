import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }


  getweather() {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=c2b8de7ca27ec9349d0e92f3693f6181&units=imperial ');
  }
}
