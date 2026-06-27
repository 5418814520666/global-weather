import {
  Sun,
  Cloud,
  CloudSun,
  CloudFog,
  CloudDrizzle,
  CloudRain,
  CloudSnow,
  CloudLightning,
} from 'lucide-react'

interface WeatherIconProps {
  icon: string
  className?: string
}

export function WeatherIcon({ icon, className = 'w-12 h-12' }: WeatherIconProps) {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    sun: Sun,
    cloud: Cloud,
    'cloud-sun': CloudSun,
    'cloud-fog': CloudFog,
    'cloud-drizzle': CloudDrizzle,
    'cloud-rain': CloudRain,
    'cloud-snow': CloudSnow,
    'cloud-lightning': CloudLightning,
  }

  const IconComponent = iconMap[icon] || Cloud

  return <IconComponent className={`${className} text-sky-accent`} />
}
