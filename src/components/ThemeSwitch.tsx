import React from 'react';
import { useTheme } from '../theme';
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
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

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
