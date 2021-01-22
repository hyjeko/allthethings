/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/dist'
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-postcss'
  ],
  packageOptions: {
    source: 'remote'
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  alias: {
    /* ... */
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020'
  },
  devOptions: {
    open: 'none'
  }
};
