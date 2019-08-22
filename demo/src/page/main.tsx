import React from 'react';
import { Input, List, Typography } from 'antd';
import {InjectedIntlProps, injectIntl, defineMessages} from 'react-intl';

import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;



// 定义需要翻译的文字

const messages = defineMessages({
  fillContent: {
    id: 'app.fillContent',
    defaultMessage: '请填写新内容',
  },
});

const data: string[] = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
  
const inp:any = {
    'width': '400px',
  'marginTop': '20px',
  'marginBottom': '20px'
}
const list:any = {
  'width': '400px',
  'paddingTop': '20px',
  'marginBottom': '20px',
  'textAlign': 'center'
}
interface Iprops extends InjectedIntlProps {

}

class Main extends React.Component<Iprops> {
    render() {
        return (
            <div>
                {/* {messages.fillContent} */}
                <Input placeholder={this.props.intl.messages.fillContent} style={inp} />
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

              <Collapse accordion>
                  <Panel header="This is panel header 1" key="1">
                    <p>{text}</p>
                  </Panel>
                  <Panel header="This is panel header 2" key="2">
                    <p>{text}</p>
                  </Panel>
                  <Panel header="This is panel header 3" key="3">
                    <p>{text}</p>
                  </Panel>
                </Collapse>,
            </div>
        )
    }
}

export default injectIntl(Main);