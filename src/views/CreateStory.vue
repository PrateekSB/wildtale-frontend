<template>
  <article class="create-story">
    <navbar/>
    <article class="current-chapter">
      <div class="input-group p-3" v-if="currentChapter === 1">
        <input type="text" placeholder="Add title for story"/>
      </div>
      <div class="input-group p-3" v-if="currentChapter === 1">
        <input type="text" placeholder="Add author name"/>
      </div>
      <div class="input-group p-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Chapter {{ currentChapter }}</span>
        </div>
        <textarea class="form-control" aria-label="With textarea" rows="10"></textarea>
      </div>
      <div class="input-group p-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            <font-awesome-icon :icon="['fas', 'image']"/>
          </span>
          <input type="file" class="form-control"
            accept="image/png, image/jpeg, image/jpg" @change="updateImagePath">
          <span v-if="imageLoading">Uploading image...</span>
        </div>
        <div>
          <button class="btn btn-primary" @click="uploadImage()">
            Submit Story
          </button>
        </div>
      </div>
    </article>
    <article v-if="currentChapter < 3" class="next-chapter">
      <section @click="incrementChapter()">
        Proceed to chapter {{ currentChapter + 1 }}
      </section>
    </article>
    <section v-else>
      <button class="btn btn-primary">
        Submit Story
      </button>
    </section>
  </article>
</template>

<script type="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText } from 'mdbvue';

import Navbar from '@/components/Navbar.vue';
import { getFileLink } from '@/api/tales';

@Component({ components: { Navbar, mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText } })
export default class CreateStory extends Vue {
  currentChapter = 1;
  imageLoading = false;

  incrementChapter() {
    this.currentChapter += 1;
  }

	async updateImagePath(e) {
		let file = e.target.files || e.dataTransfer.files;
		if (!file.length) return;
		this.imageLoading = true;
    await getFileLink(file);
		this.imageLoading = false;
  }
}
</script>

<style lang="scss" scoped>
.create-story {
  display: flex;
  justify-content: center;
  flex-direction: column;
  .current-chapter {
    margin: 1rem 0.2rem 0.2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .next-chapter {
    position: absolute;
    width: 100%;
    bottom: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    > section {
      width: 80%;
      border-bottom: 0;
      padding: 0.5rem;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      color: white;
      text-align: center;
      font-weight: bold;
      background-image: linear-gradient($stack-wildlife-green-light, $stack-wildlife-green);
    }
  }
}
</style>
