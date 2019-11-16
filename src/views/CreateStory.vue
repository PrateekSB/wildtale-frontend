<template>
  <article>
    <navbar/>
    <section>
      Chapter {{ currentChapter }}
    </section>
    <section v-if="currentChapter <3 ">
      <button class="btn btn-primary" @click="incrementChapter()">
        Go to next chapter
      </button>
      Chapter {{ currentChapter + 1 }}
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
