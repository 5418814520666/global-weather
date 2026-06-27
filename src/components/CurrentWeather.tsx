import { useEffect, useState } from 'react'
import { useWeatherStore } from '../store/weatherStore'
import { WeatherIcon } from './WeatherIcon'
import { getWeatherInfo } from '../utils/weatherCodes'

export function CurrentWeather() {
  const { currentCity, weatherData, isLoading } = useWeatherStore()
  const [displayTemp, setDisplayTemp] = useState(0)

  useEffect(() => {
    if (weatherData) {
      const targetTemp = Math.round(weatherData.current.temperature_2m)
      const duration = 1000
      const steps = 30
      const increment = (targetTemp - displayTemp) / steps
      let current = displayTemp
      let step = 0

      const timer = setInterval(() => {
        step++
        current += increment
        setDisplayTemp(Math.round(current))
        if (step >= steps) {
          clearInterval(timer)
          setDisplayTemp(targetTemp)
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [weatherData])

  if (isLoading || !weatherData || !currentCity) {
    return (
      <div className="glass rounded-3xl p-12 mb-8 animate-pulse">
        <div className="h-32 bg-white/10 rounded-2xl"></div>
      </div>
    )
  }

  const weatherInfo = getWeatherInfo(weatherData.current.weather_code)
  const maxTemp = Math.round(weatherData.daily.temperature_2m_max[0])
  const minTemp = Math.round(weatherData.daily.temperature_2m_min[0])

  return (
    <div className="glass rounded-3xl p-8 mb-8 animate-slide-up">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold mb-2">
          {currentCity.name}
        </h2>
        <p className="text-gray-400 mb-6">
          {currentCity.admin1 && `${currentCity.admin1}, `}{currentCity.country}
        </p>

        <div className="flex items-center justify-center gap-8 mb-6">
          <WeatherIcon icon={weatherInfo.icon} className="w-24 h-24 animate-float" />
          <div>
            <div className="font-display text-7xl font-bold mb-2">
              {displayTemp}°
            </div>
            <div className="text-xl text-gray-300">{weatherInfo.description}</div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 text-lg">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">体感</span>
            <span className="font-semibold">{Math.round(weatherData.current.apparent_temperature)}°</span>
          </div>
          <div className="w-px h-6 bg-white/20"></div>
          <div className="flex items-center gap-2">
            <span className="text-warm-accent font-semibold">{maxTemp}°</span>
            <span className="text-gray-400">/</span>
            <span className="text-sky-accent font-semibold">{minTemp}°</span>
          </div>
        </div>
      </div>
    </div>
  )
}
