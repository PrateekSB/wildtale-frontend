<template>
  <article>
    <navbar/>
    <article class="tales">
      <article v-for="tale in tales">
        <section>Author: {{ tale.author }}</section>
        <section>Tags: {{ tale.tags }}</section>
        <article v-for="chapter in tale.chapters">
          <section>Title: {{ chapter.title }}</section>
          <section>Story: {{ chapter.story }}</section>
          <section>Images: {{ chapter.imageUrls }}</section>
        </article>
        <hr/>
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
