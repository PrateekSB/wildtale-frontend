module.exports = {
  outputDir: 'dist',
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://wildtale-spring-app.herokuapp.com/',
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
