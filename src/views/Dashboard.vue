<template>
  <article class="dashboard">
    <navbar/>
    <article class="search-bar">
      <section class="multi-select">
        <multi-select
          v-model="value" :options="options" :multiple="true" :close-on-select="false"
          :clear-on-select="false" :preserve-search="true" placeholder="Select Tags"
          label="name" track-by="name">
        </multi-select>
      </section>
    </article>
    <article class="story-list">
      <section class="first-story">
        <sequential-entrance fromTop>
          <div class="box" v-for="index in 5" :key="index">{{ app }}</div>
        </sequential-entrance>
      </section>
    </article>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Navbar from '@/components/Navbar.vue';

@Component({ components: { Navbar } })
export default class Dashboard extends Vue {
  value = [];
  options = [
    { name: 'Wildlife', code: 'wildlife' },
    { name: 'Crops', code: 'crops' },
    { name: 'Livestock', code: 'livestock' },
  ];
}
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  .search-bar {
    display: flex;
    justify-content: space-evenly;
    margin: 1rem;
    width: 100%;

    /deep/ .multiselect__tag,
    /deep/ .multiselect__option--highlight,
    /deep/ .multiselect__option--highlight:after {
      background: $stack-wildlife-green;
    }

    .text, .multi-select {
      width: 40%;
    }

    .story-list {
      display: flex;
      justify-content: center;
      margin: 1rem;
      width: 100%;
      .first-story {

      }
    }
  }
}
.box {
  border-radius: 10px;
  background-color: $stack-wildlife-green;
  width: 100px;
  height: 100px;
  margin: 1rem;
}
.md-form {
  margin: 0 !important;
}
</style>
