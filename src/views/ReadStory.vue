<template>
  <article>
    <navbar/>
    <article class="tales">
      {{ tales }}
      <article v-for="tale in tales">
        {{ tale.author }}
        {{ tale.tags }}
        <section v-for="chapter in tale.chapters">
          {{ chapter.title }}
          {{ chapter.story }}
          {{ chapter.imageUrls }}
        </section>
      </article>
    </article>
  </article>
</template>

<script lang="ts">
import { Component, Vue }  from 'vue-property-decorator';
import { getTales } from '@/api/tales';

import Navbar from '@/components/Navbar.vue';

@Component({ components: { Navbar } })
export default class ReadStory extends Vue {
	tales = [];

	async mounted() {
		this.tales = await getTales();
  }
}
</script>

<style lang="scss" scoped>
.tales {
  display: flex;
  flex-direction: column;
}
</style>
