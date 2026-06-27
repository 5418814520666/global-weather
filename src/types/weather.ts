export interface City {
  name: string
  latitude: number
  longitude: number
  country: string
  admin1?: string
}

export interface CurrentWeatherData {
  temperature_2m: number
  relative_humidity_2m: number
  apparent_temperature: number
  weather_code: number
  wind_speed_10m: number
  wind_direction_10m: number
  surface_pressure: number
  is_day: number
}

export interface DailyWeatherData {
  time: string[]
  weather_code: number[]
  temperature_2m_max: number[]
  temperature_2m_min: number[]
  sunrise: string[]
  sunset: string[]
  uv_index_max: number[]
  precipitation_probability_max: number[]
}

export interface HourlyWeatherData {
  time: string[]
  temperature_2m: number[]
  weather_code: number[]
}

export interface WeatherData {
  current: CurrentWeatherData
  daily: DailyWeatherData
  hourly: HourlyWeatherData
}

export interface WeatherInfo {
  description: string
  icon: string
}
