import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// addLocaleData这个方法已经在React Intl v3上弃用了
//（https://github.com/formatjs/react-intl/blob/master/docs/Upgrade-Guide.md#migrate-to-using-native-intl-apis）
import { IntlProvider, addLocaleData } from 'react-intl';
import * as zh from 'react-intl/locale-data/zh';
import * as en from 'react-intl/locale-data/en';
import en_US from './locales/en_US'
import zh_CN from './locales/zh_CN';

// 全局window对象
declare global {
    interface Window {
        bsysinfo: {
            short_company_name: string,
            model: string,
            version: string,
            lang: string,
            optimization:string
        }
    }
}

let lang = "zh";
let i18nData = zh_CN;

window.bsysinfo = window.bsysinfo || {}
if(window.bsysinfo.lang === "en"){
    lang = "en";
    i18nData = en_US;
}

addLocaleData([...en, ...zh]);  // 引入多语言环境的数据 

ReactDOM.render(
    <IntlProvider locale={lang} messages={i18nData.messages}>
        <App />
    </IntlProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
