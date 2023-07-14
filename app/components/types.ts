export type NewsWithoutImage = {
  abstract: string,
  pub_date: string,
  byline: {original: string},
  source: string,
  web_url: string,
  headline: {main: string},
  section_name: string,
  subsection_name: string,
}

export type TopNews = {
  title: string,
  abstract: string,
  published_date: string,
  byline: string,
  url: string,
  media: [
    { 'media-metadata': [
      { url?: string }
    ] }
  ]
}

export interface WeatherComponentProps {
  location: string;
}

export interface GetLocation {
  getLocation: (location: string) => void
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

export interface UsePaginationProps {
  contentPerPage: number,
  count: number,
}

export interface Gaps {
  before: boolean,
  paginationGroup: number[],
  after: boolean
}

export interface UsePaginationReturn {
  page: number;
  totalPages: number;
  firstContentIndex?: number;
  lastContentIndex?: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
  gaps: Gaps,
}