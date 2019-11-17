<template>
  <article class="create-story">
    <navbar/>
    {{ currentChapter }}
    <article class="chapter" v-if="currentChapter === 1">
      <section class="input-group p-3">
        <input type="text" placeholder="Add author name" v-model="author"/>
      </section>
      <section class="input-group p-3">
        <input type="text" placeholder="Chapter 1 title" v-model="chapter1.title"/>
      </section>
      <article class="input-group p-3">
        <section class="input-group-prepend">
          <span class="input-group-text">Chapter 1</span>
        </section>
        <textarea class="form-control" aria-label="With textarea"
          rows="10" v-model="chapter1.story"></textarea>
      </article>
      <article class="input-group p-3">
        <section class="input-group-prepend">
          <span class="input-group-text">
            <font-awesome-icon :icon="['fas', 'camera-retro']"/>
          </span>
          <input type="file" class="form-control"
            accept="image/png, image/jpeg, image/jpg" @change="updateImagePathChapter1">
          <span v-if="imageLoading">Uploading image...</span>
        </section>
      </article>
      <article class="next-chapter">
        <section @click="incrementChapter(2)">
          Proceed to chapter 2
        </section>
      </article>
    </article>
    <article class="chapter" v-if="currentChapter === 2">
      <section class="input-group p-3">
        <input type="text" placeholder="Chapter 2 title" v-model="chapter2.title"/>
      </section>
      <article class="input-group p-3">
        <section class="input-group-prepend">
          <span class="input-group-text">Chapter 2</span>
        </section>
        <textarea class="form-control" aria-label="With textarea"
                  rows="10" v-model="chapter2.story"></textarea>
      </article>
      <article class="input-group p-3">
        <section class="input-group-prepend">
          <span class="input-group-text">
            <font-awesome-icon :icon="['fas', 'camera-retro']"/>
          </span>
          <input type="file" class="form-control"
                 accept="image/png, image/jpeg, image/jpg" @change="updateImagePathChapter2">
          <span v-if="imageLoading">Uploading image...</span>
        </section>
      </article>
      <article class="next-chapter">
        <section @click="incrementChapter(3)">
          Proceed to chapter 3
        </section>
      </article>
    </article>
    <article class="chapter" v-if="currentChapter === 3">
      <section class="input-group p-3">
        <input type="text" placeholder="Chapter 3 title" v-model="chapter3.title"/>
      </section>
      <article class="input-group p-3">
        <section class="input-group-prepend">
          <span class="input-group-text">Chapter 3</span>
        </section>
        <textarea class="form-control" aria-label="With textarea"
                  rows="10" v-model="chapter3.story"></textarea>
      </article>
      <article class="input-group p-3">
        <section class="input-group-prepend">
          <span class="input-group-text">
            <font-awesome-icon :icon="['fas', 'camera-retro']"/>
          </span>
          <input type="file" class="form-control"
                 accept="image/png, image/jpeg, image/jpg" @change="updateImagePathChapter3">
          <span v-if="imageLoading">Uploading image...</span>
        </section>
        <section class="input-group p-3">
          <input type="text" placeholder="Tags" v-model="tags"/>
        </section>
      </article>
      <section>
        <button class="btn btn-primary" @click="postStory()">
          Submit Story
        </button>
      </section>
    </article>
  </article>
</template>

<script type="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText } from 'mdbvue';

import Navbar from '@/components/Navbar.vue';
import { postFileLink, postStory } from '@/api/tales';

@Component({ components: { Navbar, mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText } })
export default class CreateStory extends Vue {
	story;
	author = '';
	chapters = [];
	tags = '';
  currentChapter = 1;
  imageLoading = false;
	chapter1 = {
		title: '',
		order: 1,
		story: '',
		imageUrls: '',
		videoUrls: '',
	};
	chapter2 = {
		title: '',
		order: 2,
		story: '',
		imageUrls: '',
		videoUrls: '',
	};
	chapter3 = {
		title: '',
		order: 3,
		story: '',
		imageUrls: '',
		videoUrls: '',
	};

  incrementChapter(index) {
    this.currentChapter = index;
		console.log('incrementing chapter to', index);
    console.log(this.chapter1);
  }

  async getImagePath(e) {
		let file = e.target.files || e.dataTransfer.files;
		if (!file.length) return;
		this.imageLoading = true;
		const link = await postFileLink(file);
		this.imageLoading = false;
		return link;
  }

	async updateImagePathChapter1(e) {
		this.chapter1.imageUrls = (await this.getImagePath(e)).url;
  }

	async updateImagePathChapter2(e) {
		this.chapter2.imageUrls = (await this.getImagePath(e)).url;
	}

	async updateImagePathChapter3(e) {
		this.chapter3.imageUrls = (await this.getImagePath(e)).url;
	}

	async postStory() {
  	const chapters = [this.chapter1, this.chapter2, this.chapter3];
    this.story = {
			chapters,
      author: this.author,
			tags: [this.tags],
    };
    await postStory(this.story);
    console.log(this.story);
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
