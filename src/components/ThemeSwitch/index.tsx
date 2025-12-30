import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/store';
import { setTheme } from '@/store/modules/theme';
import { Switch, Space, Typography } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface ThemeSwitchProps {
  showLabel?: boolean;
  showIcon?: boolean;
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  showLabel = true,
  showIcon = true,
}) => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const isDark = theme === 'dark';
  
  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Space>
      {showLabel && <Text>暗色主题</Text>}
      <Switch
        checked={isDark}
        onChange={toggleTheme}
        checkedChildren={showIcon ? <MoonOutlined /> : '暗'}
        unCheckedChildren={showIcon ? <SunOutlined /> : '亮'}
      />
    </Space>
  );
};

