import antdEn from 'antd/lib/locale-provider/zh_CN'
import appLocaleData from 'react-intl/locale-data/zh'
import enMessages from './zh.json'

export default {
    antd: antdEn,
    data: appLocaleData,
    locale: 'zh-CN',
    messages: {
        ...enMessages,
    }

}