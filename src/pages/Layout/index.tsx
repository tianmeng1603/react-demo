import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { Button, Space } from 'antd';
import { ThemeSwitch } from '../../components/ThemeSwitch';

const Layout = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  
  return (
    <div className="p-6 bg-white dark:bg-black min-h-screen">
      <div className="mb-4">
        <ThemeSwitch />
        <div className="mt-2 text-sm text-gray-900 dark:text-white">当前主题: {theme}</div>
      </div>
      <Space>
        <Button type="primary">主要按钮</Button>
        <Button>默认按钮</Button>
        <Button type="dashed">虚线按钮</Button>
      </Space>
    </div>
  );
};

export default Layout;