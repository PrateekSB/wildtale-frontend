<template>
  <article class="dashboard">
    <article class="search-bar">
      <section class="text">
          <input type="text" id="exampleForm2" class="form-control" placeholder="Search">
      </section>
      <section class="multi-select">
        <multi-select
          v-model="value" :options="options" :multiple="true" :close-on-select="false"
          :clear-on-select="false" :preserve-search="true" placeholder="Select Tags"
          label="name" track-by="name">
        </multi-select>
      </section>
    </article>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mdbInput } from 'mdbvue';
import MultiSelect from 'vue-multiselect';

@Component({ components: { mdbInput, MultiSelect } })
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
  .search-bar {
    display: flex;
    justify-content: space-evenly;
    margin: 1rem;
    width: 100%;
    /deep/.multiselect__tag,
    /deep/.multiselect__option--highlight,
    /deep/.multiselect__option--highlight:after {
      background: $stack-wildlife-green;
    }
    .text, .multi-select {
      width: 40%;
    }
  }
}
.md-form {
  margin: 0 !important;
}
</style>
