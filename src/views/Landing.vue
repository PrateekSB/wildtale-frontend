<template>
  <article class="landing">
    <article class="cards">
      <section class="card" @click="navigate('post-story')">
        Post story
      </section>
      <section class="card">
        Read stories
      </section>
    </article>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { check } from '@/api/auth';
import { mdbContainer, mdbRow, mdbIcon, mdbCol, mdbCard, mdbBtn, mdbInput } from 'mdbvue';

@Component({ components: { mdbContainer, mdbRow, mdbCol, mdbCard, mdbIcon, mdbBtn, mdbInput } })
export default class Landing extends Vue {
  navigate(name: string) {
    this.$router.push(name);
  }
}
</script>

<style lang="scss" scoped>
.landing {
  display: flex;
  margin: 1rem;
  justify-content: center;
  align-content: center;
  .cards {
    display: flex;
    flex-direction: column;
    .card {
      margin: 1rem;
      height: 40vh;
      width: 80vw;
      background-image: -webkit-linear-gradient(left, #ffecd2 0%, $stack-wildlife-green 100%);
      text-align: center;
      color: white;
    }
  }
}
</style>
