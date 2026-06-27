import { Droplets, Wind, Gauge, Eye, Sun, Sunrise, Sunset } from 'lucide-react'
import { useWeatherStore } from '../store/weatherStore'
import { getWindDirection } from '../utils/weatherCodes'

export function WeatherDetails() {
  const { weatherData, isLoading } = useWeatherStore()

  if (isLoading || !weatherData) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="glass rounded-2xl p-6 animate-pulse">
            <div className="h-20 bg-white/10 rounded-xl"></div>
          </div>
        ))}
      </div>
    )
  }

  const details = [
    {
      icon: Droplets,
      label: '湿度',
      value: `${weatherData.current.relative_humidity_2m}%`,
      color: 'text-sky-accent',
    },
    {
      icon: Wind,
      label: '风速',
      value: `${weatherData.current.wind_speed_10m} km/h`,
      color: 'text-blue-400',
    },
    {
      icon: Wind,
      label: '风向',
      value: getWindDirection(weatherData.current.wind_direction_10m),
      color: 'text-cyan-400',
    },
    {
      icon: Gauge,
      label: '气压',
      value: `${Math.round(weatherData.current.surface_pressure)} hPa`,
      color: 'text-purple-400',
    },
    {
      icon: Eye,
      label: '紫外线指数',
      value: weatherData.daily.uv_index_max[0].toFixed(1),
      color: 'text-yellow-400',
    },
    {
      icon: Sun,
      label: '降水概率',
      value: `${weatherData.daily.precipitation_probability_max[0]}%`,
      color: 'text-indigo-400',
    },
    {
      icon: Sunrise,
      label: '日出',
      value: new Date(weatherData.daily.sunrise[0]).toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      color: 'text-orange-400',
    },
    {
      icon: Sunset,
      label: '日落',
      value: new Date(weatherData.daily.sunset[0]).toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      color: 'text-rose-400',
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {details.map((detail, index) => {
        const Icon = detail.icon
        return (
          <div
            key={detail.label}
            className="glass rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Icon className={`w-8 h-8 ${detail.color} mb-3`} />
            <div className="text-sm text-gray-400 mb-1">{detail.label}</div>
            <div className="text-2xl font-bold font-display">{detail.value}</div>
          </div>
        )
      })}
    </div>
  )
}
