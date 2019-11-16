<template>
  <article class="post-story">
    <navbar/>
    <article class="header" v-if="currentSection === 0">
      <section class="title">
        Post a story
      </section>
      <article class="text">
        <span class="number-circle">1</span>
        Each story can consist a maximum of 3 chapters.
      </article>
      <section class="text">
        <span class="number-circle">2</span>
        You can upload images and video for each chapter.
      </section>
      <section class="text">
        <span class="number-circle">3</span>
        After the final chapter, click on submit along with
        your author name to submit your story!
      </section>
      <section class="create">
        <button class="btn btn-primary" @click="showSection(1)">
          Create story now ->
        </button>
      </section>
    </article>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';

@Component({ components: { Navbar } })
export default class PostStory extends Vue {
	currentSection: number = 0;
	section1 : string = '';
	section2 : string = '';

	showSection(index: number) {
		this.currentSection = index;
  }
}
</script>

<style lang="scss" scoped>
.post-story {
  display: flex;
  flex-direction: column;
  .header {
    margin: auto;
    .title {
      text-align: center;
      font-weight: bold;
      font-style: italic;
      height: 5vh;
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
    .create {
      display: flex;
      justify-content: center;
      align-content: center;
    }
  }
}
</style>
