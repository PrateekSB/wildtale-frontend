<template>
  <article>
    <navbar></navbar>
    <span v-if="tales">{{ tales }}</span>
  </article>
</template>

<script lang="ts">
import { Component, Vue }  from 'vue-property-decorator';
import { getTales } from '@/api/tales';

import Navbar from '@/components/Navbar.vue';

@Component({ components: { Navbar } })
export default class ReadStory extends Vue {
	tales;

	async mounted() {
		this.tales = await getTales();
  }
}
</script>

<style lang="scss" scoped>

</style>
