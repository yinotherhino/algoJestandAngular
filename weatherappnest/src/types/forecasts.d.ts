export interface IWeather {
    id: string;
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
    city: string;
    sunrise: string;
    sunset: string;
    rainChance: number;
}