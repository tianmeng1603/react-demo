# 项目结构文档

## 项目概述

本项目是一个基于 React + TypeScript + Vite 构建的现代化前端应用，使用 Redux Toolkit 进行状态管理，React Router 进行路由管理，Ant Design 作为 UI 组件库，Tailwind CSS 作为样式框架。

## 技术栈

- **构建工具**: Vite 5.2.0
- **框架**: React 19.2.3
- **语言**: TypeScript 4.9.5
- **状态管理**: Redux Toolkit 2.11.2
- **路由**: React Router DOM 7.11.0
- **UI 组件库**: Ant Design 6.1.2
- **HTTP 客户端**: Axios 1.13.2
- **样式**: Tailwind CSS 3.4.19

## 项目结构

```
reagt-demo/
├── public/                 # 静态资源目录
│   ├── favicon.ico        # 网站图标
│   ├── logo192.png        # Logo 192x192
│   ├── logo512.png        # Logo 512x512
│   ├── manifest.json      # PWA 配置文件
│   └── robots.txt         # 搜索引擎爬虫配置
│
├── src/                    # 源代码目录
│   ├── apis/              # API 接口定义
│   │   └── user.ts        # 用户相关 API
│   │
│   ├── assets/            # 静态资源（图片、字体等）
│   │
│   ├── components/        # 公共组件
│   │   └── AuthRoute.tsx  # 路由权限守卫组件
│   │
│   ├── i18n/              # 国际化配置（预留）
│   │
│   ├── locales/           # 语言包（预留）
│   │
│   ├── pages/             # 页面组件
│   │   ├── Layout/        # 布局页面
│   │   │   └── index.tsx
│   │   └── Login/         # 登录页面
│   │       └── index.tsx
│   │
│   ├── router/            # 路由配置
│   │   └── index.tsx      # 路由定义
│   │
│   ├── store/             # Redux 状态管理
│   │   ├── index.ts       # Store 配置
│   │   └── modules/       # Redux 模块
│   │       └── user.ts    # 用户状态模块
│   │
│   ├── utils/             # 工具函数
│   │   ├── index.ts       # 工具函数统一导出
│   │   ├── request.ts     # Axios 请求封装
│   │   └── token.ts       # Token 管理工具
│   │
│   ├── App.js             # App 组件（可选，已迁移到路由）
│   ├── index.tsx          # 应用入口文件
│   ├── index.css          # 全局样式
│   └── vite-env.d.ts      # Vite 环境变量类型定义
│
├── index.html             # HTML 模板（Vite 入口）
├── package.json           # 项目依赖配置
├── package-lock.json      # 依赖锁定文件
├── tsconfig.json          # TypeScript 配置
├── vite.config.ts         # Vite 构建配置
├── tailwind.config.js     # Tailwind CSS 配置
├── postcss.config.js      # PostCSS 配置
├── .gitignore             # Git 忽略文件配置
└── README.md              # 项目说明文档
```

## 目录详细说明

### `/public`

存放静态资源文件，这些文件在构建时会被复制到输出目录的根目录。

- `favicon.ico`: 网站图标
- `logo*.png`: 应用 Logo 图片
- `manifest.json`: PWA 应用清单文件
- `robots.txt`: 搜索引擎爬虫配置

### `/src/apis`

API 接口定义目录，按业务模块划分。

- `user.ts`: 用户相关的 API 接口（登录、获取用户信息等）

### `/src/assets`

存放项目中使用的静态资源，如图片、字体文件等。

### `/src/components`

存放可复用的公共组件。

- `AuthRoute.tsx`: 路由权限守卫组件，用于保护需要认证的路由

### `/src/pages`

存放页面级组件，按功能模块组织。

- `Layout/`: 应用布局组件
- `Login/`: 登录页面组件

### `/src/router`

路由配置文件。

- `index.tsx`: 定义应用的路由配置，使用 React Router v7 的 `createBrowserRouter`

### `/src/store`

Redux 状态管理相关文件。

- `index.ts`: Redux Store 的配置和创建
- `modules/`: Redux 切片（slice）模块
  - `user.ts`: 用户相关的状态管理

### `/src/utils`

工具函数目录。

- `index.ts`: 工具函数的统一导出入口
- `request.ts`: 基于 Axios 的 HTTP 请求封装，包含请求/响应拦截器
- `token.ts`: Token 的存储、获取、删除等操作

### `/src/i18n` 和 `/src/locales`

国际化相关目录（预留，当前未使用）。

## 配置文件说明

### `vite.config.ts`

Vite 构建配置文件，主要配置：

- **插件**: `@vitejs/plugin-react` - React 支持
- **路径别名**: `@` → `src` 目录，方便导入模块
  ```typescript
  import Layout from '@/pages/Layout'
  ```

### `tsconfig.json`

TypeScript 编译配置：

- 目标版本: ES5
- JSX: react-jsx
- 路径映射: `@/*` → `src/*`
- 严格模式: 启用

### `tailwind.config.js`

Tailwind CSS 配置：

- 内容路径: `./src/**/*.{js,jsx,ts,tsx}`
- 主题扩展: 可自定义主题配置

### `postcss.config.js`

PostCSS 配置：

- `tailwindcss`: Tailwind CSS 处理
- `autoprefixer`: 自动添加浏览器前缀

### `.gitignore`

Git 忽略文件配置：

- `node_modules/`: 依赖目录
- `/dist`: Vite 构建输出目录
- `/build`: 旧构建输出目录
- 环境变量文件: `.env.local`, `.env.*.local`
- 日志文件: `*.log`

## 环境变量

Vite 使用 `VITE_` 作为环境变量前缀（不同于 Create React App 的 `REACT_APP_`）。

### 使用方式

在代码中通过 `import.meta.env.VITE_*` 访问：

```typescript
// .env
VITE_API_BASE_URL=http://localhost:3000

// 代码中
const baseURL = import.meta.env.VITE_API_BASE_URL
```

### 类型定义

环境变量的类型定义在 `src/vite-env.d.ts` 中，可扩展自定义环境变量类型。

## 常用命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview

# 运行测试
npm test
```

## 路径别名

项目配置了路径别名 `@`，指向 `src` 目录，可以简化导入路径：

```typescript
// 使用别名
import { request } from '@/utils'
import Layout from '@/pages/Layout'
import { AuthRoute } from '@/components/AuthRoute'

// 等价于
import { request } from '../utils'
import Layout from '../pages/Layout'
import { AuthRoute } from '../components/AuthRoute'
```

## 开发规范

1. **组件命名**: 使用 PascalCase，组件文件使用 `index.tsx`
2. **工具函数**: 使用 camelCase
3. **API 函数**: 使用 camelCase + `Api` 后缀，如 `loginApi`
4. **样式**: 优先使用 Tailwind CSS 类名，必要时使用 CSS Modules 或 styled-components
5. **类型定义**: TypeScript 类型定义使用 PascalCase，接口使用 `I` 前缀（可选）

## 注意事项

1. 本项目已从 Create React App + Craco 迁移到 Vite
2. 环境变量前缀从 `REACT_APP_` 改为 `VITE_`
3. HTML 入口文件位于项目根目录，而非 `public` 目录
4. 构建输出目录为 `dist`，而非 `build`

