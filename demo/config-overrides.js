const { override, fixBabelImports, useBabelRc } = require('customize-cra');

// 如果进行webpack修改，可以直接通过回调函数去进行修改
const useFn = () => (config) => {
  return config;
}

module.exports = override(
    useBabelRc(),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    }),
    useFn()
); 