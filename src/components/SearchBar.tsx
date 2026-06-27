import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import { searchCities } from '../utils/api'
import { useWeatherStore } from '../store/weatherStore'
import type { City } from '../types/weather'

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<City[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const fetchWeather = useWeatherStore((state) => state.fetchWeather)

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.trim()) {
        const results = await searchCities(query)
        setSuggestions(results)
        setShowSuggestions(results.length > 0)
      } else {
        setSuggestions([])
        setShowSuggestions(false)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  const handleSelectCity = (city: City) => {
    fetchWeather(city)
    setQuery('')
    setShowSuggestions(false)
  }

  return (
    <div className="relative max-w-2xl mx-auto mb-8 animate-slide-up">
      <div className="glass-strong rounded-full flex items-center px-6 py-4 gap-3">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="搜索城市..."
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 font-body"
        />
      </div>

      {showSuggestions && (
        <div className="absolute top-full left-0 right-0 mt-2 glass-strong rounded-2xl overflow-hidden z-50">
          {suggestions.map((city, index) => (
            <button
              key={`${city.latitude}-${city.longitude}-${index}`}
              onClick={() => handleSelectCity(city)}
              className="w-full px-6 py-4 text-left hover:bg-white/10 transition-colors border-b border-white/5 last:border-b-0"
            >
              <div className="text-white font-medium">{city.name}</div>
              <div className="text-sm text-gray-400">
                {city.admin1 && `${city.admin1}, `}{city.country}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
