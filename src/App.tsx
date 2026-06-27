import { useEffect } from 'react'
import { useWeatherStore } from './store/weatherStore'
import { SearchBar } from './components/SearchBar'
import { CurrentWeather } from './components/CurrentWeather'
import { WeatherDetails } from './components/WeatherDetails'
import { DailyForecast } from './components/DailyForecast'
import { HourlyChart } from './components/HourlyChart'
import { CityShortcuts } from './components/CityShortcuts'

function App() {
  const { currentCity, fetchWeather } = useWeatherStore()

  useEffect(() => {
    // 默认加载北京天气
    if (!currentCity) {
      fetchWeather({
        name: '北京',
        latitude: 39.9042,
        longitude: 116.4074,
        country: '中国',
      })
    }
  }, [currentCity, fetchWeather])

  useEffect(() => {
    if (currentCity) {
      fetchWeather(currentCity)
    }
  }, [currentCity, fetchWeather])

  return (
    <div className="min-h-screen bg-gradient-animated">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* 标题 */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="font-display text-5xl font-bold mb-2 bg-gradient-to-r from-sky-accent to-warm-accent bg-clip-text text-transparent">
            GlobalWeather
          </h1>
          <p className="text-gray-400 font-body">全球天气实时查询</p>
        </div>

        {/* 搜索栏 */}
        <SearchBar />

        {/* 热门城市 */}
        <CityShortcuts />

        {/* 当前天气 */}
        <CurrentWeather />

        {/* 天气详情 */}
        <WeatherDetails />

        {/* 小时温度趋势 */}
        <HourlyChart />

        {/* 每日天气预报 */}
        <DailyForecast />
      </div>
    </div>
  )
}

export default App
