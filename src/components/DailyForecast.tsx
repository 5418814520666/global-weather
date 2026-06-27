import { useWeatherStore } from '../store/weatherStore'
import { WeatherIcon } from './WeatherIcon'
import { getWeatherInfo } from '../utils/weatherCodes'

export function DailyForecast() {
  const { weatherData, isLoading } = useWeatherStore()

  if (isLoading || !weatherData) {
    return (
      <div className="glass rounded-3xl p-8 animate-pulse">
        <div className="h-48 bg-white/10 rounded-2xl"></div>
      </div>
    )
  }

  const weekDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

  return (
    <div className="glass rounded-3xl p-8 animate-slide-up">
      <h3 className="font-display text-2xl font-bold mb-6">未来 5 天预报</h3>
      <div className="grid grid-cols-5 gap-4">
        {weatherData.daily.time.map((date, index) => {
          const weatherInfo = getWeatherInfo(weatherData.daily.weather_code[index])
          const maxTemp = Math.round(weatherData.daily.temperature_2m_max[index])
          const minTemp = Math.round(weatherData.daily.temperature_2m_min[index])
          const dayDate = new Date(date)
          const dayName = index === 0 ? '今天' : weekDays[dayDate.getDay()]

          return (
            <div
              key={date}
              className="text-center hover:bg-white/10 rounded-2xl p-4 transition-all hover:scale-105"
            >
              <div className="text-gray-400 mb-3 font-medium">{dayName}</div>
              <WeatherIcon icon={weatherInfo.icon} className="w-12 h-12 mx-auto mb-3" />
              <div className="text-sm text-gray-400 mb-2">{weatherInfo.description}</div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-warm-accent font-bold">{maxTemp}°</span>
                <span className="text-gray-500">/</span>
                <span className="text-sky-accent font-bold">{minTemp}°</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
