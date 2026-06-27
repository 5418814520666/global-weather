import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'
import { useWeatherStore } from '../store/weatherStore'

export function HourlyChart() {
  const { weatherData, isLoading } = useWeatherStore()

  if (isLoading || !weatherData) {
    return (
      <div className="glass rounded-3xl p-8 mb-8 animate-pulse">
        <div className="h-64 bg-white/10 rounded-2xl"></div>
      </div>
    )
  }

  // 获取当前时间的小时索引
  const now = new Date()
  const currentHour = now.getHours()

  // 准备 24 小时数据
  const chartData = weatherData.hourly.time
    .slice(currentHour, currentHour + 24)
    .map((time, index) => ({
      hour: new Date(time).getHours(),
      temp: Math.round(weatherData.hourly.temperature_2m[currentHour + index]),
    }))

  return (
    <div className="glass rounded-3xl p-8 mb-8 animate-slide-up">
      <h3 className="font-display text-2xl font-bold mb-6">24 小时温度趋势</h3>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#38BDF8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="hour"
            stroke="#94A3B8"
            tick={{ fill: '#94A3B8', fontSize: 12 }}
            tickFormatter={(hour) => `${hour}:00`}
          />
          <YAxis
            stroke="#94A3B8"
            tick={{ fill: '#94A3B8', fontSize: 12 }}
            tickFormatter={(temp) => `${temp}°`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(15, 27, 51, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              color: 'white',
            }}
            formatter={(value: number) => [`${value}°`, '温度']}
            labelFormatter={(label) => `${label}:00`}
          />
          <Area
            type="monotone"
            dataKey="temp"
            stroke="#38BDF8"
            strokeWidth={3}
            fill="url(#tempGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
