module.exports = {
  outputDir: 'dist',
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import '@/assets/scss/_variables.scss';
          @import '@/assets/scss/_main.scss';
          @import '@/assets/scss/_media-queries.scss';
        `,
      },
    },
  },
};
