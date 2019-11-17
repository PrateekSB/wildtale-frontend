<template>
  <article class="post-story">
    <article class="header">
      <span @click="$router.push('/')">
        <font-awesome-icon :icon="['fas', 'angle-left']" class="back-btn"/>
      </span>
      <section class="title">
        <div class="typewriter">
          <h1><b>Post a story.</b></h1>
        </div>
      </section>
    </article>
    <section class="timeline">
      <section class="step">
        <span class="number">Step 1</span>
        <span class="text">Each story can consist a maximum of 3 chapters <br/>with an author name
        and tag of an animal being referenced to.</span>
      </section>
      <section class="step">
        <span class="number">Step 2</span>
        <span class="text">You can upload images and video for each chapter</span>
      </section>
      <section class="step">
        <span class="number">Step 3</span>
        <span class="text">Submit the story to share!</span>
      </section>
      <section class="btn-container">
        <section>
          <router-link to="/create-story" class="btn btn-white btn-animation-1">
            Create a story
            <font-awesome-icon :icon="['fas', 'angle-right']" class="icon"/>
          </router-link>
        </section>
      </section>
    </section>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';

@Component({ components: { Navbar } })
export default class PostStory extends Vue { }
</script>


<style lang="scss" scoped>
  .post-story {
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800');
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', helvetica, arial, sans-serif;
    font-weight: 400;
    .header {
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
      .title {
        text-align: center;
        margin: auto;
        font-weight: bold;
        font-style: normal;
        height: 5vh;
        /* GLOBAL STYLES */
        /* DEMO-SPECIFIC STYLES */
        .typewriter h1 {
          color: rgba(30, 7, 66, 0.65);
          font-family: AmaticBold;
          font-size: 2.5rem;
          overflow: hidden; /* Ensures the content is not revealed until the animation */
          border-right: .15em solid black; /* The typwriter cursor */
          white-space: nowrap; /* Keeps the content on a single line */
          margin: 0 auto; /* Gives that scrolling effect as the typing happens */
          letter-spacing: .15em; /* Adjust as needed */
          animation:
            typing 3.5s steps(30, end),
            blink-caret .5s step-end infinite;
        }

        /* The typing effect */
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        /* The typewriter cursor effect */
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: orange }
        }
      }
    }
    .timeline {
      margin: 6rem auto auto;
      @include desktop {
        margin-top: 10rem;
      }
      .step {
        display: flex;
        justify-content: left;
        padding: 1rem;
        .number {
          border-radius: 50px;
          min-width: 100px;
          height: 40px;
          background-image: linear-gradient($stack-wildlife-green-light, $stack-wildlife-green);
          color: white;
          text-align: center;
          display: inline-block;
          font-family: AmaticBold;
          font-size: 2rem;
        }
        .text {
          margin-left: 0.5rem;
          margin-top: 0.5rem;
          font-size: 1.6rem;
        }
      }
    }
    .btn-container {
      text-align: center;
      margin-top: 1.5rem;
      @include desktop {
        margin: 1rem auto auto 0.5rem;
      }
    }
    .icon {
      font-size: 1.2rem;
      margin-left: 0.5rem;
      color: $stack-wildlife-green;
    }
  }
</style>
