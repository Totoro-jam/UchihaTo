module.exports = {
  presets: [
    require.resolve('@docusaurus/core/lib/babel/preset'),
    require.resolve('@babel/preset-flow'),
  ],
  plugins: ['babel-plugin-syntax-hermes-parser'],
  parserOpts: {flow: 'all'},
};