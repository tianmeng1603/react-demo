import { Button, Card, Space } from 'antd';
import { ThemeSwitch } from './components/ThemeSwitch';

function App() {
  return (
    <div className="App p-6 bg-white dark:bg-gray-900 min-h-screen">
      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 mb-6">
        <Space vertical size="large" className="w-full">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              主题切换示例
            </h3>
            <ThemeSwitch />
          </div>

          <div>
            <h4 className="text-base font-medium text-gray-800 dark:text-gray-200 mb-3">
              Ant Design 组件示例
            </h4>
            <Space wrap>
              <Button type="primary">主要按钮</Button>
              <Button>默认按钮</Button>
              <Button type="dashed">虚线按钮</Button>
              <Button type="link">链接按钮</Button>
            </Space>
          </div>
        </Space>
      </Card>
    </div>
  );
}

export default App;
