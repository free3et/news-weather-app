export type Post = {
  title: string,
  abstract: string,
  published_date: string,
  pub_date: string,
  byline: object | string,
  source: string,
  web_url: string,
  snippet: string,
  media: object,
}

export interface WeatherComponentProps {
  location?: string;
  getLocation?: (location: string) => void
}

export interface Weather {
  name: string;
  weather: [
    {
      icon: string,
      description: string,
    }
  ];
  dt: number;
  main: { feels_like: number, humidity: number, pressure: number, temp: number };
  wind: { speed: number };
}

export interface Forecast {
  weather: [{
    icon: string,
  }],
  dt: number,
  main: { feels_like: number, humidity: number, pressure: number },
  wind: {speed: number},
}