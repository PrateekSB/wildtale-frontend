<template>
  <article>
    <navbar/>
    <section>
      <p>Chapter {{ currentChapter }}</p>
      <textarea placeholder="Write chapter"></textarea>
      <p>Upload image</p>
      <p>Upload video</p>
    </section>
    <section v-if="currentChapter <3 ">
      <button class="btn btn-primary" @click="incrementChapter()">
        Go to next chapter
      </button>
      <p>Chapter {{ currentChapter + 1 }}</p>
    </section>
    <section v-else>
      <button class="btn btn-primary">
        Submit Story
      </button>
    </section>
  </article>
</template>

<script type="ts">
import { Component, Vue } from 'vue-property-decorator';

import Navbar from '@/components/Navbar.vue';

@Component({ components: { Navbar } })
export default class CreateStory extends Vue {
currentChapter = 1;

incrementChapter() {
  this.currentChapter += 1;
}
}
</script>

<style lang="scss" scoped>

</style>
