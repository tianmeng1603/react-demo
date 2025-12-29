import React, { useEffect, useMemo } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';
import type { ThemeConfig } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import { setTheme } from '../store/modules/theme';
import { lightThemeColors, darkThemeColors } from './antdTheme';

// Tailwind 主题模式
export type ThemeMode = 'light' | 'dark';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  // 初始化时从 localStorage 读取主题
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') {
        dispatch(setTheme(stored));
      }
    } catch (error) {
      console.error('Failed to read stored theme:', error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 应用 Tailwind 主题到 document（包括初始化）
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // 生成 Ant Design 主题配置
  const antdThemeConfig = useMemo<ThemeConfig>(() => {
    // 如果是暗色模式，使用 darkAlgorithm
    if (theme === 'dark') {
      return {
        algorithm: antdTheme.darkAlgorithm,
        token: darkThemeColors,
      };
    }

    // 亮色模式使用默认算法
    return {
      algorithm: antdTheme.defaultAlgorithm,
      token: lightThemeColors,
    };
  }, [theme]);

  return (
    <ConfigProvider theme={antdThemeConfig}>{children}</ConfigProvider>
  );
};

// Hook 用于在组件中使用主题
export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  return {
    theme,
    setTheme: (newTheme: ThemeMode) => dispatch(setTheme(newTheme)),
    toggleTheme: () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light')),
  };
};

