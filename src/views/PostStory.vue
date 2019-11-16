<template>
  <article class="post-story">
    <navbar/>
    <transition name="slide-fade">
      {{ currentSection }}
      <section class="header" v-if="currentSection === 0">
        <p>Welcome!</p>
        <p>Post a story</p>
        <p>(Write some content here to indicate how to post a story)</p>
        <button class="btn btn-primary" @click="showSection(1)">
          Post now
        </button>
      </section>
    </transition>
    <transition name="slide-fade">
      <section v-if="currentSection === 1" class="section">
        <textarea placeholder="section 1" v-model="section1"></textarea>
        <button class="btn btn-primary">
          Upload image
        </button>
        <button class="btn btn-primary">
          Upload video
        </button>
        <button class="btn btn-primary" @click="showSection(2)">
          Section 1
        </button>
      </section>
    </transition>
    <transition name="slide-fade">
      <section v-if="currentSection === 2" class="section">
        <textarea placeholder="section 2" v-model="section2"></textarea>
        <button class="btn btn-primary" @click="showSection(3)">
          Section 2
        </button>
      </section>
    </transition>
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
    text-align: center;
  }
  .section {
    display: flex;
    flex-direction: column;
  }
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  // transition: all .3s ease;
}
.slide-fade-leave-active {
  // transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  /*transform: translateX(10px);
  opacity: 0;*/
}
</style>
