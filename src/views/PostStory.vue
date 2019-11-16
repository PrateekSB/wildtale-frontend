<template>
  <article class="post-story">
    <article class="header">
      <section class="title">
        <div class="typewriter">
          <h1><b>Post a story.</b></h1>
        </div>
      </section>
    </article>
    <section class="timeline">
      <vue-timeline-update
        description="Each story can consist a maximum
        f 3 chapters                ."
        thumbnail=""
        category="Step 1"
        icon="vue"
        color="orange"
      />

      <vue-timeline-update
        description="You can upload images and video for &nbsp; each chapter."
        thumbnail=""
        category="Step 2"
        icon="js"
        color="purple"
      />

      <vue-timeline-update
        description="After the final chapter,
        &nbsp; submit story with author name!"
        thumbnail=""
        category="Step 3"
        icon="css"
        color="green"
      />
      <vue-timeline-update
        thumbnail=""
        category="Finish"
        icon="css"
        color="orange"
        is-last="true"
      />
      <section class="button_container">
        <div class="box">
          <router-link to="/create-story" class="btn btn-white btn-animation-1">
            Create a story
            <font-awesome-icon :icon="['fas', 'angle-right']" class="icon"/>
          </router-link>
        </div>
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
    display: flex;
    flex-direction: column;
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
          font-family: Lato, sans-serif;
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
      .text {
        display: flex;
        flex-direction: row;
        height: 10vh;
        .number-circle {
          border-radius: 50px;
          width: 40px;
          height: 40px;
          padding: 0.5rem;
          background-image: linear-gradient($stack-wildlife-green-light, $stack-wildlife-green);
          color: white;
          text-align: center;
          display: inline-block;
        }
      }
    }
    .timeline {
      margin: 2rem auto auto;
      /deep/ .c-vue-timeline-update__ago {
        font-size: 0px;
      }
      /deep/ .c-vue-timeline-update__description {
        color: rgba(30, 7, 66, 0.65);
        font-size: 18px;
      }
      /deep/ .c-vue-timeline-update__category {
        font-family: Lato, sans-serif;
      }
    }
    .icon {
      font-size: 1.2rem;
      margin-left: 0.5rem;
      color: $stack-wildlife-green;
    }
  }
</style>
