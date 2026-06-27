import { useWeatherStore } from '../store/weatherStore'
import type { City } from '../types/weather'

const popularCities: City[] = [
  { name: '北京', latitude: 39.9042, longitude: 116.4074, country: '中国' },
  { name: '上海', latitude: 31.2304, longitude: 121.4737, country: '中国' },
  { name: '东京', latitude: 35.6762, longitude: 139.6503, country: '日本' },
  { name: '纽约', latitude: 40.7128, longitude: -74.006, country: '美国' },
  { name: '伦敦', latitude: 51.5074, longitude: -0.1278, country: '英国' },
  { name: '巴黎', latitude: 48.8566, longitude: 2.3522, country: '法国' },
  { name: '悉尼', latitude: -33.8688, longitude: 151.2093, country: '澳大利亚' },
  { name: '迪拜', latitude: 25.2048, longitude: 55.2708, country: '阿联酋' },
  { name: '新加坡', latitude: 1.3521, longitude: 103.8198, country: '新加坡' },
  { name: '莫斯科', latitude: 55.7558, longitude: 37.6176, country: '俄罗斯' },
]

export function CityShortcuts() {
  const fetchWeather = useWeatherStore((state) => state.fetchWeather)
  const currentCity = useWeatherStore((state) => state.currentCity)

  return (
    <div className="mb-8 animate-slide-up">
      <div className="flex flex-wrap gap-3 justify-center">
        {popularCities.map((city) => {
          const isActive = currentCity?.name === city.name
          return (
            <button
              key={city.name}
              onClick={() => fetchWeather(city)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                isActive
                  ? 'bg-sky-accent text-night-900 scale-105'
                  : 'glass hover:bg-white/10 text-white hover:scale-105'
              }`}
            >
              {city.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
