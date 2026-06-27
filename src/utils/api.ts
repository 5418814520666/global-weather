import type { City, WeatherData } from '../types/weather'

const GEOCODING_API = 'https://geocoding-api.open-meteo.com/v1/search'
const WEATHER_API = 'https://api.open-meteo.com/v1/forecast'

export async function searchCities(query: string): Promise<City[]> {
  if (!query.trim()) return []

  const params = new URLSearchParams({
    name: query,
    count: '5',
    language: 'zh',
    format: 'json',
  })

  const response = await fetch(`${GEOCODING_API}?${params}`)
  const data = await response.json()

  return data.results || []
}

export async function fetchWeatherData(city: City): Promise<WeatherData> {
  const params = new URLSearchParams({
    latitude: city.latitude.toString(),
    longitude: city.longitude.toString(),
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,surface_pressure,is_day',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max',
    hourly: 'temperature_2m,weather_code',
    timezone: 'auto',
    forecast_days: '5',
  })

  const response = await fetch(`${WEATHER_API}?${params}`)
  const data = await response.json()

  return data
}
