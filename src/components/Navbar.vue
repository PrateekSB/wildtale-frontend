<template>
  <section class="custom-navbar">
    <img src="./../assets/logo.gif" class="imageAnimation">
    <span class="text">Wild Tales</span>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {

}
</script>

<style lang="scss" scoped>
  .custom-navbar {
    height: 8vh;
    @include desktop {
      height: 6vh;
    }
    padding: 0.5rem;
    display: flex;
    align-content: flex-start;
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
    }
    .imageAnimation {
      position: absolute;
      left: 100%;
      top: 0px;
      width: 60px;
      height: 50px;
      margin-top: -0.5rem;
      -webkit-animation: moveToLeft 10s linear infinite;
      animation: moveToLeft 10s linear infinite;
    }

    @-webkit-keyframes moveToLeft {
      from {left: 100%;}
      to {left: 0%;}
    }

    @keyframes moveToLeft {
      from {left: 100%;}
      to {left: 0%;}
    }
  }
</style>
