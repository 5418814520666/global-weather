import type { WeatherInfo } from '../types/weather'

// WMO 天气代码映射
export const weatherCodeMap: Record<number, WeatherInfo> = {
  0: { description: '晴', icon: 'sun' },
  1: { description: '大部晴朗', icon: 'sun' },
  2: { description: '多云', icon: 'cloud-sun' },
  3: { description: '阴天', icon: 'cloud' },
  45: { description: '雾', icon: 'cloud-fog' },
  48: { description: '雾凇', icon: 'cloud-fog' },
  51: { description: '小毛毛雨', icon: 'cloud-drizzle' },
  53: { description: '毛毛雨', icon: 'cloud-drizzle' },
  55: { description: '大毛毛雨', icon: 'cloud-drizzle' },
  56: { description: '冻毛毛雨', icon: 'cloud-drizzle' },
  57: { description: '强冻毛毛雨', icon: 'cloud-drizzle' },
  61: { description: '小雨', icon: 'cloud-rain' },
  63: { description: '中雨', icon: 'cloud-rain' },
  65: { description: '大雨', icon: 'cloud-rain' },
  66: { description: '小冻雨', icon: 'cloud-rain' },
  67: { description: '强冻雨', icon: 'cloud-rain' },
  71: { description: '小雪', icon: 'cloud-snow' },
  73: { description: '中雪', icon: 'cloud-snow' },
  75: { description: '大雪', icon: 'cloud-snow' },
  77: { description: '雪粒', icon: 'cloud-snow' },
  80: { description: '小阵雨', icon: 'cloud-rain' },
  81: { description: '阵雨', icon: 'cloud-rain' },
  82: { description: '强阵雨', icon: 'cloud-rain' },
  85: { description: '小阵雪', icon: 'cloud-snow' },
  86: { description: '强阵雪', icon: 'cloud-snow' },
  95: { description: '雷暴', icon: 'cloud-lightning' },
  96: { description: '雷暴伴小冰雹', icon: 'cloud-lightning' },
  99: { description: '雷暴伴大冰雹', icon: 'cloud-lightning' },
}

export function getWeatherInfo(code: number): WeatherInfo {
  return weatherCodeMap[code] || { description: '未知', icon: 'cloud' }
}

export function getWindDirection(degree: number): string {
  const directions = ['北', '东北', '东', '东南', '南', '西南', '西', '西北']
  const index = Math.round(degree / 45) % 8
  return directions[index]
}
