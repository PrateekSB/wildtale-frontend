<template>
  <article class="landing">
    <article class="top">
      <section class="title">
        Wild Tales
      </section>
      <section class="gif">
        <img src="./../assets/logo.gif" width="300">
      </section>
      <section class="sub-title">
        <p>The wildlife and its habitat cannot speak.</p>
        <p>So we must and we will!</p>
      </section>
      <article class="btn-container">
        <section class="box">
          <router-link to="/post-story" class="btn btn-white btn-animation-1">
            <font-awesome-icon :icon="['fas', 'plus']" class="icon"/>
            Add Story
          </router-link>
          <router-link to="/story-list" class="btn btn-white btn-animation-1">
            <font-awesome-icon :icon="['fas', 'glasses']" class="icon"/>
            Read Stories
          </router-link>
        </section>
      </article>
    </article>
    <section class="bottom">
    </section>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Landingv2 extends Vue {
}
</script>


<style lang="scss" scoped>
  .landing {
    display: flex;
    height: 100vh;
    flex-direction: column;
    .top {
      background-color: white;
      height: 65vh;
      width: 100vw;
      display: flex;
      justify-content: center;
      flex-direction: column;
      .title {
        margin: 20rem auto auto;
        font-family: AmaticRegular;
        font-size: 7rem;
        color: black;
      }
      .gif, .sub-title {
        margin: 2rem auto auto;
        z-index: 10;
        font-family: AmaticBold;
        font-size: 2rem;
        text-align: center;
      }
      .btn-container {
        margin: auto;
        z-index: 10;
        @include desktop {
          margin: 2rem auto auto;
        }
      }
    }
    .bottom {
      background-color: $stack-wildlife-green;
      height: 35vh;
      width: 100vw;
    }
  }
</style>
