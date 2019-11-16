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
    justify-content: left;
    border-bottom: $stack-wildlife-border;
    box-shadow: $stack-wildlife-shadow-box;
    .text {
      color: $stack-wildlife-green;
      font-size: x-large;
      margin: 0 1rem;
      border-bottom: 10px $stack-wildlife-green;
    }
    .imageAnimation {
      position: absolute;
      top: 0;
      width: 60px;
      height: 50px;
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
