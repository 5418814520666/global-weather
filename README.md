# GlobalWeather - 全球天气实时查询应用

一款美观实用的全球天气查询 Web 应用，支持搜索全球任意城市，实时查看天气状况、未来预报和详细气象数据。

![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38BDF8)
![License](https://img.shields.io/badge/License-MIT-green)

## 功能特性

- 全球城市搜索：支持搜索全球任意城市，自动补全建议
- 实时天气：当前温度、体感温度、天气状况、最高/最低温度
- 天气详情：湿度、风速风向、气压、紫外线指数、日出日落时间
- 5 天预报：未来 5 天的天气预报
- 24 小时趋势：温度变化折线图
- 热门城市：10 个全球知名城市快捷入口（北京、上海、东京、纽约等）

## 技术栈

- **前端框架**：React 18 + TypeScript
- **样式方案**：TailwindCSS 3
- **构建工具**：Vite 6
- **图表库**：Recharts
- **状态管理**：Zustand
- **图标库**：Lucide React
- **天气数据**：Open-Meteo API（免费，无需 API Key）

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
src/
├── App.tsx                    # 主应用组件
├── main.tsx                   # 入口文件
├── index.css                  # 全局样式
├── types/
│   └── weather.ts            # TypeScript 类型定义
├── utils/
│   ├── weatherCodes.ts       # 天气代码映射
│   └── api.ts                # API 请求封装
├── store/
│   └── weatherStore.ts       # Zustand 状态管理
└── components/
    ├── SearchBar.tsx         # 搜索栏组件
    ├── CurrentWeather.tsx    # 当前天气卡片
    ├── WeatherDetails.tsx    # 天气详情面板
    ├── DailyForecast.tsx     # 每日天气预报
    ├── HourlyChart.tsx       # 小时温度趋势图
    ├── CityShortcuts.tsx     # 热门城市快捷入口
    └── WeatherIcon.tsx       # 天气图标组件
```

## 设计特色

- **深色主题**：深邃夜空蓝背景，科技感十足
- **毛玻璃效果**：Glassmorphism 设计风格
- **流畅动画**：渐入、浮动、温度计数动画
- **响应式布局**：适配桌面端和移动端

## 数据来源

使用 [Open-Meteo API](https://open-meteo.com/) 获取天气数据：
- 天气预报 API：`https://api.open-meteo.com/v1/forecast`
- 城市地理编码：`https://geocoding-api.open-meteo.com/v1/search`

完全免费，无需注册，无需 API Key。

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

MIT License

## 作者

Created with ❤️ by TRAE AI
