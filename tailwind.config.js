/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class', // 启用基于 class 的暗色模式
  theme: {
    extend: {
      colors: {
        // 方式1: 定义自定义颜色（在类名中使用 dark: 前缀切换）
        // 例如: bg-primary dark:bg-primary-dark
        primary: {
          DEFAULT: '#1677ff',  // 亮色模式的主色
          dark: '#0958d9',     // 暗色模式的主色（可选，也可以直接用 dark:bg-primary-dark）
          light: '#4096ff',   // 浅色变体
        },
        // 自定义背景色
        'bg-custom': {
          DEFAULT: '#ffffff',  // 亮色背景
          dark: '#141414',     // 暗色背景
        },
        // 自定义文字色
        'text-custom': {
          DEFAULT: '#000000',  // 亮色文字
          dark: '#ffffff',      // 暗色文字
        },
        // 自定义边框色
        'border-custom': {
          DEFAULT: '#d9d9d9',   // 亮色边框
          dark: '#434343',      // 暗色边框
        },
        // 自定义卡片背景
        card: {
          DEFAULT: '#fafafa',   // 亮色卡片背景
          dark: '#1f1f1f',      // 暗色卡片背景
        },
        // 自定义成功/警告/错误色（也可以定义暗色版本）
        success: {
          DEFAULT: '#52c41a',
          dark: '#73d13d',
        },
        warning: {
          DEFAULT: '#faad14',
          dark: '#ffc53d',
        },
        error: {
          DEFAULT: '#ff4d4f',
          dark: '#ff7875',
        },
      },
    },
  },
  plugins: [],
};

