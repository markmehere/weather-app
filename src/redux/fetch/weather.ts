import { CityType } from "../../types/CityType";

export function fetchWeather(city: CityType) {
  return fetch(`/api/location/${city.value}/`, {'mode': 'no-cors'});
}
