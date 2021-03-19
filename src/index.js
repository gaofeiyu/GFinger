import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GDebugger from './gdebugger';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// 临时设置，需要抽象
let ready = false;
const init = (options = {}) => {
  if (!ready) {
    // 创建mdebug节点
    const { containerId } = options;
    const gdebuggerContainerId = containerId || `gdebugger${parseInt(Math.random() * Number.MAX_SAFE_INTEGER, 10)}`;
    const gdebuggerRoot = document.createElement('div');
    gdebuggerRoot.id = gdebuggerContainerId;
    document.body.appendChild(gdebuggerRoot);

    // 渲染mdebug
    ReactDOM.render(
      <GDebugger options={options} />,
      document.getElementById(gdebuggerContainerId)
    );
    ready = true;
  } else {
    console.warn('gdebugger has inited!');
  }
}

init();
