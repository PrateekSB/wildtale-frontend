<template>
  <article>
    <navbar/>
    <article class="tales mt-2">
      <article v-for="tale in tales" class="m-1 mx-auto">
        <div class="card" style="width: 18rem;">
          <img :src="tale.chapters[0].imageUrl"
               class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ tale.author }}</h5>
            <p class="card-text">{{ tale.tags }}</p>
          </div>
        </div>
      </article>
    </article>
  </article>
</template>

<script lang="ts">
import { Component, Vue }  from 'vue-property-decorator';
import { getTales } from '@/api/tales';

import Navbar from '@/components/Navbar.vue';

@Component({ components: { Navbar } })
export default class SelectedList extends Vue {
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
