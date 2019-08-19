import React from 'react';
import './App.css';
import { Input } from 'antd';
import { List, Typography } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const inp = {
  'width': '400px',
  'paddingTop': '20px',
  'marginBottom': '20px'
}
const list = {
  'width': '400px',
  'paddingTop': '20px',
  'marginBottom': '20px',
  'text-align': 'center'
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Input placeholder="请填写新内容" style={inp}/>
      <List style={list}
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
    </div>
  );
}

export default App;
