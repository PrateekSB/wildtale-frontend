<template>
  <div id="app">
    <section class="custom-navbar">
      <img src="./assets/logo.gif" class="logo">
      <span class="text">Wild Tales</span>
    </section>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './../node_modules/bootstrap/scss/bootstrap.scss';
@import './../node_modules/bootstrap-css-only/css/bootstrap.min.css';
@import './../node_modules/mdbootstrap/css/mdb.css';
@import './../node_modules/mdbvue/lib/css/mdb.min.css';
@import './../node_modules/vue-multiselect/dist/vue-multiselect.min.css';
@import './assets/scss/main';

#app {
  font-family: $font-lato;
}
.logo {
  width: 60px;
  height: 50px;
  margin-top: -0.5rem;
}

.custom-navbar {
  height: 7vh;
  @include desktop {
    height: 6vh;
  }
  padding: 0.5rem;
  display: flex;
  align-content: center;
  justify-content: center;
  border-bottom: $stack-wildlife-border;
  box-shadow: $stack-wildlife-shadow-box;
  .icon {
    color: $stack-wildlife-green;
    font-size: 2rem;
  }
  .text {
    color: $stack-wildlife-green;
    font-size: x-large;
    margin: 0 1rem;
    font-weight: normal;
  }
}
</style>
