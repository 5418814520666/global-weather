import { create } from 'zustand'
import type { City, WeatherData } from '../types/weather'
import { fetchWeatherData } from '../utils/api'

interface WeatherState {
  currentCity: City | null
  weatherData: WeatherData | null
  isLoading: boolean
  error: string | null
  fetchWeather: (city: City) => Promise<void>
}

export const useWeatherStore = create<WeatherState>((set) => ({
  currentCity: null,
  weatherData: null,
  isLoading: false,
  error: null,

  fetchWeather: async (city: City) => {
    set({ isLoading: true, error: null })
    try {
      const data = await fetchWeatherData(city)
      set({ currentCity: city, weatherData: data, isLoading: false })
    } catch (error) {
      set({ error: '获取天气数据失败', isLoading: false })
      console.error('获取天气失败:', error)
    }
  },
}))
