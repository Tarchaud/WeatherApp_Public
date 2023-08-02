import { Component } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {
  cityName : string = '';
  img : string = '';
  weatherData ?: any;

  constructor(private weatherService : WeatherService) { }

  searchCity() {
    this.weatherService.getWeather(this.cityName).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.weatherData.main.temp = Math.round(this.weatherData.main.temp);
        this.getWeatherIcon(this.weatherData.weather[0].main);
      },
      error: (error) => {
        Notify.failure('Please enter a valid city name');
      }
    });
  }

  getWeatherIcon(weatherIcon : string) {
    if (weatherIcon == "Clouds") {
      this.img = "assets/images/clouds.png"
    }else if( weatherIcon == "Clear") {
      this.img = "assets/images/clear.png"
    }else if( weatherIcon == "Rain") {
      this.img = "assets/images/rain.png"
    }else if( weatherIcon == "Snow") {
      this.img = "assets/images/snow.png"
    }else if( weatherIcon == "Drizzle") {
      this.img = "assets/images/drizzle.png"
    }else if( weatherIcon == "Mist") {
      this.img = "assets/images/mist.png"
    }
  }


}
