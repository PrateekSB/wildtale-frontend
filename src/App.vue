<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/wildtales.css';
@import './assets/scss/main';
@import './../node_modules/bootstrap/scss/bootstrap.scss';
@import './../node_modules/bootstrap-css-only/css/bootstrap.min.css';
@import './../node_modules/mdbvue/lib/css/mdb.min.css';
@import './../node_modules/vue-multiselect/dist/vue-multiselect.min.css';

#app {
  font-family: $font-lato;
}
.logo {
  width: 60px;
  height: 50px;
  margin-top: -0.5rem;
}

</style>
