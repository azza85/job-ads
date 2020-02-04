module.exports = {
  clientEntry: 'src/client.tsx',
  renderEntry: 'src/render.tsx',
  sites: [{ name: 'jobStreet', host: 'dev.jobstreet.com' }],
  publicPath: '/path/to/public/assets/', // <-- Required for sku build output
};
