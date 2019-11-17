<template>
  <article class="create-story">
    <section class="chapter">
      <div class="profile-card js-profile-card">
        <div class="profile-card__img">
          <img src="./../assets/one.gif" alt="profile card">
        </div>
        <div class="profile-card__cnt js-profile-cnt">
          <div class="profile-card__name">Chapter One</div>
          <div class="profile-card__txt">
            <input type="profile-card__txt" placeholder="Add author name" v-model="author"/>
            <input type="text" placeholder="Chapter 1 title" v-model="chapter1.title"/>
            <textarea class="form-control" aria-label="With textarea"
                      rows="10" v-model="chapter1.story"></textarea>
            <span class="input-group-text">
            <font-awesome-icon :icon="['fas', 'camera-retro']"/>
          </span>
            <input type="file" class="form-control"
                   accept="image/png, image/jpeg, image/jpg" @change="updateImagePathChapter1">
            <span v-if="imageLoading">Uploading image...</span>
          </div>
          <div class="profile-card-ctr">
            <button class="profile-card__button button--blue js-message-btn">Submit</button>
          </div>
        </div>
        </div>
    </section>
    <section class="chapter">
      <div class="profile-card js-profile-card">
        <div class="profile-card__img">
          <img src="./../assets/two.gif" alt="profile card">
        </div>
        <div class="profile-card__cnt js-profile-cnt">
          <div class="profile-card__name">Chapter Two</div>
          <div class="profile-card__txt">
            <input type="profile-card__txt" placeholder="Add author name" v-model="author"/>
            <input type="text" placeholder="Chapter 2 title" v-model="chapter2.title"/>
            <textarea class="form-control" aria-label="With textarea"
                      rows="10" v-model="chapter2.story"></textarea>
            <span class="input-group-text">
            <font-awesome-icon :icon="['fas', 'camera-retro']"/>
          </span>
            <input type="file" class="form-control"
                   accept="image/png, image/jpeg, image/jpg" @change="updateImagePathChapter1">
            <span v-if="imageLoading">Uploading image...</span>
          </div>
          <div class="profile-card-ctr">
            <button class="profile-card__button button--blue js-message-btn">Submit</button>
          </div>
        </div>
      </div>
    </section>
    <section class="chapter">
      <div class="profile-card js-profile-card">
        <div class="profile-card__img">
          <img src="./../assets/three.gif" alt="profile card">
        </div>
        <div class="profile-card__cnt js-profile-cnt">
          <div class="profile-card__name">Chapter Three</div>
          <div class="profile-card__txt">
            <input type="profile-card__txt" placeholder="Add author name" v-model="author"/>
            <input type="text" placeholder="Chapter 2 title" v-model="chapter3.title"/>
            <textarea class="form-control" aria-label="With textarea"
                      rows="10" v-model="chapter3.story"></textarea>
            <span class="input-group-text">
            <font-awesome-icon :icon="['fas', 'camera-retro']"/>
          </span>
            <input type="file" class="form-control"
                   accept="image/png, image/jpeg, image/jpg" @change="updateImagePathChapter1">
            <span v-if="imageLoading">Uploading image...</span>
          </div>
          <div class="profile-card-ctr">
            <button class="profile-card__button button--blue js-message-btn">Submit</button>
          </div>
        </div>
      </div>
    </section>
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
  background: $stack-wildlife-green-light;
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
  .chapter {
    html {
      position: relative;
    }

    * {
      box-sizing: border-box;
    }

    body {
      font-family: 'Quicksand', sans-serif;
      color: #324e63;
    }

    a, a:hover {
      text-decoration: none;
    }

    .profile-card {
      margin-top: 20%;
      margin-left: 5%;
      width: 90%;
      min-height: 460px;
      box-shadow: 0px 8px 60px -10px rgba(13,28,39,0.6);
      background: #fff;
      border-radius: 12px;
      max-width: 700px;
      position: relative;

      &.active {
        .profile-card__cnt {
          filter: blur(6px);
        }

        .profile-card-message,
        .profile-card__overlay {
          opacity: 1;
          pointer-events: auto;
          transition-delay: .1s;
        }

        .profile-card-form {
          transform: none;
          transition-delay: .1s;
        }
      }

      &__img {
        width: 150px;
        height: 150px;
        margin-left: auto;
        margin-right: auto;
        transform: translateY(-50%);
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        z-index: 4;
        box-shadow: 0px 5px 50px 0px $stack-wildlife-green-light, 0px 0px 0px 7px $stack-wildlife-green;

        @media screen and (max-width: 576px) {
          width: 120px;
          height: 120px;
        }

        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

      }

      &__cnt {
        margin-top: -35px;
        text-align: center;
        padding: 0 20px;
        padding-bottom: 40px;
        transition: all .3s;
      }

      &__name {
        font-weight: 700;
        font-size: 24px;
        color: $stack-wildlife-green;
        margin-bottom: 15px;
      }

      &__txt {
        font-size: 18px;
        font-weight: 500;
        color: #324e63;
        margin-bottom: 15px;

        strong {
          //color: #ff2846;
          font-weight: 700;
        }

      }

      &-loc {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: 600;

        &__icon {
          display: inline-flex;
          font-size: 27px;
          margin-right: 10px;
          //color: #6944ff;
        }

      }

      &-inf {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: flex-start;
        margin-top: 35px;

        &__item {
          padding: 10px 35px;
          min-width: 150px;

          @media screen and (max-width: 768px) {
            padding: 10px 20px;
            min-width: 120px;
          }

        }

        &__title {
          font-weight: 700;
          font-size: 27px;
          //color: #6944ff;
          color: #324e63;
        }

        &__txt {
          font-weight: 500;
          margin-top: 7px;
        }

      }

      &-social {
        margin-top: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        &__item {
          display: inline-flex;
          width: 55px;
          height: 55px;
          margin: 15px;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          color: #fff;
          background: #405de6;
          box-shadow: 0px 7px 30px rgba(43,98,169,0.5);
          position: relative;
          font-size: 21px;
          flex-shrink: 0;
          transition: all .3s;

          @media screen and (max-width: 768px) {
            width: 50px;
            height: 50px;
            margin: 10px;
          }

          @media screen and (min-width: 768px){
            &:hover {
              transform: scale(1.2);
            }
          }
        }

        .icon-font {
          display: inline-flex;
        }

      }

      &-ctr {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;

        @media screen and (max-width: 576px) {
          flex-wrap: wrap;
        }

      }

      &__button {
        background: none;
        border: none;
        font-family: 'Quicksand', sans-serif;
        font-weight: 700;
        font-size: 19px;
        margin: 15px 35px;
        padding: 15px 40px;
        min-width: 201px;
        border-radius: 50px;
        min-height: 55px;
        color: #fff;
        cursor: pointer;
        backface-visibility: hidden;
        transition: all .3s;

        @media screen and (max-width: 768px) {
          min-width: 170px;
          margin: 15px 25px;
        }

        @media screen and (max-width: 576px) {
          min-width: inherit;
          margin: 0;
          margin-bottom: 16px;
          width: 100%;
          max-width: 300px;

          &:last-child {
            margin-bottom: 0;
          }
        }

        &:focus {
          outline: none!important;
        }

        @media screen and (min-width: 768px) {
          &:hover {
            transform: translateY(-5px);
          }
        }

        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }

        &.button--blue {
          background: linear-gradient(45deg, $stack-wildlife-green-light, $stack-wildlife-green);
          box-shadow: 0px 4px 30px rgba(19, 127, 212, 0.4);

          &:hover {
            box-shadow: 0px 7px 30px rgba(19, 127, 212, 0.75);
          }

        }

        &.button--orange {
          background: linear-gradient(45deg, #d5135a, #f05924);
          box-shadow: 0px 4px 30px rgba(223, 45, 70, 0.35);

          &:hover {
            box-shadow: 0px 7px 30px rgba(223, 45, 70, 0.75);
          }

        }

        &.button--gray {
          box-shadow: none;
          background: #dcdcdc;
          color: #142029;
        }

      }

      &-message {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        padding-top: 130px;
        padding-bottom: 100px;
        opacity: 0;
        pointer-events: none;
        transition: all .3s;
      }

      &-form {
        box-shadow: 0 4px 30px rgba(15, 22, 56, 0.35);
        max-width: 80%;
        margin-left: auto;
        margin-right: auto;
        height: 100%;
        background: #fff;
        border-radius: 10px;
        padding: 35px;
        transform: scale(.8);
        position: relative;
        z-index: 3;
        transition: all .3s;

        @media screen and (max-width: 768px) {
          max-width: 90%;
          height: auto;
        }

        @media screen and (max-width: 576px) {
          padding: 20px;
        }

        &__bottom {
          justify-content: space-between;
          display: flex;

          @media screen and (max-width: 576px) {
            flex-wrap: wrap;
          }

        }

      }

      textarea {
        width: 100%;
        resize: none;
        height: 210px;
        margin-bottom: 20px;
        border: 2px solid #dcdcdc;
        border-radius: 10px;
        padding: 15px 20px;
        color: #324e63;
        font-weight: 500;
        font-family: 'Quicksand', sans-serif;
        outline: none;
        transition: all .3s;

        &:focus {
          outline: none;
          border-color: #8a979e;
        }

      }

      &__overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        opacity: 0;
        background: rgba(22, 33, 72, 0.35);
        border-radius: 12px;
        transition: all .3s;
      }

    }
  }
  .chapter {

     }
}
</style>
