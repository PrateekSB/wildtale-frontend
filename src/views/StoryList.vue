<template>
  <article class="tales">
  <div class="movie_card" id="lion">
    <div class="info_section">
      <div class="movie_header">
        <img class="locandina" src="./../assets/animals/lion.jpg"/>
        <h1>Lion</h1>
        <h4>Panthera leo</h4>
        <span class="minutes">10 min read</span>
        <p class="type">Strong respect!</p>
      </div>
      <div class="movie_desc">
        <p class="text">
          Everything has its own value.<br>
          Treat everyone equally.
        </p>
      </div>
    </div>
    <div class="blur_back lion_back"></div>
  </div>

  <div class="movie_card" id="giraffe">
    <div class="info_section">
      <div class="movie_header">
        <img class="locandina" src="./../assets/animals/giraffe.jpg"/>
        <h1>Giraffe</h1>
        <h4>Giraffa</h4>
        <span class="minutes">12 min read</span>
        <p class="type">Unique Fantasy</p>
      </div>
      <div class="movie_desc">
        <p class="text">
          Dont get jealous of anyone.<br>
          Great potential end friendships.
        </p>
      </div>
    </div>
    <div class="blur_back giraffe_back"></div>
  </div>

  <div class="movie_card" id="panda">
    <div class="info_section">
      <div class="movie_header">
        <img class="locandina" src="./../assets/animals/panda.jpg"/>
        <h1>Panda</h1>
        <h4>Ailuropoda melanoleuca</h4>
        <span class="minutes">13 min read</span>
        <p class="type">Adventure Funny</p>
      </div>
      <div class="movie_desc">
        <p class="text">
          Find happiness in little things.<br>
          Treat everyone equally.
        </p>
      </div>
    </div>
    <div class="blur_back panda_back"></div>
  </div>

    <div class="movie_card" id="rhino">
      <div class="info_section">
        <div class="movie_header">
          <img class="locandina" src="./../assets/animals/rhino.jpg"/>
          <h1>Rhino</h1>
          <h4>Rhinoceros</h4>
          <span class="minutes">12 min read</span>
          <p class="type">Leadership Empathy</p>
        </div>
        <div class="movie_desc">
          <p class="text">
            Take charge.<br>
            Be the leader everyone wants.
          </p>
        </div>
      </div>
      <div class="blur_back rhino_back"></div>
    </div>

    <div class="movie_card" id="elephant">
      <div class="info_section">
        <div class="movie_header">
          <img class="locandina" src="./../assets/animals/elephant.png"/>
          <h1>Elephant</h1>
          <h4>Elephant</h4>
          <span class="minutes">13 min read</span>
          <p class="type">Perseverance</p>
        </div>
        <div class="movie_desc">
          <p class="text">
            Humility is a valued trait.<br>
            Treat everyone equally.
          </p>
        </div>
      </div>
      <div class="blur_back elephant_back"></div>
    </div>

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
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800');
  box-sizing: border-box;
  margin: 0;

  html, body{
    margin: 0;
    background: white;
    font-family: 'Montserrat', helvetica, arial, sans-serif;
    font-weight: 400;
  }

  .link{
    display: block;
    text-align: center;
    color: #777;
    text-decoration: none;
    padding: 10px;
  }

  .movie_card{
    position: relative;
    display: block;
    width: 800px;
    height: 350px;
    margin: 80px auto;
    overflow: hidden;
    border-radius: 10px;
    transition: all 0.4s;
    box-shadow: 0px 0px 120px -25px rgba(0,0,0, 0.5);
    &:hover{
      transform: scale(1.02);
      box-shadow: 0px 0px 80px -25px rgba(0,0,0, 0.5);
      transition: all 0.4s;
    }
    .info_section{
      position: relative;
      width: 100%;
      height: 100%;
      background-blend-mode: multiply;
      z-index: 2;
      border-radius: 10px;
      .movie_header{
        position: relative;
        padding: 25px;
        height: 40%;
        h1{
          color: black;
          font-weight: 400;
        }
        h4{
          color: #555;
          font-weight: 400;
        }
        .minutes{
          display: inline-block;
          margin-top: 15px;
          color: #555;
          padding: 5px;
          border-radius: 5px;
          border: 1px solid rgba(0,0,0,0.05);
        }
        .type{
          display: inline-block;
          color: #959595;
          margin-left: 10px;
        }
        .locandina{
          position: relative;
          float: left;
          margin-right: 20px;
          height: 120px;
          box-shadow: 0 0 20px -10px rgba(0,0,0,0.5);
        }
      }
      .movie_desc{
        padding: 25px;
        height: 50%;
        .text{
          color: #545454;
          font-size: 1.6rem;
        }
      }
    }
    .blur_back{
      position: absolute;
      top: 0;
      z-index: 1;
      height: 100%; right: 0;
      background-size: cover;
      border-radius: 11px;
    }
  }

  @media screen and (min-width: 768px) {
    .movie_header{
      width: 65%;
    }

    .movie_desc{
      width: 50%;
    }

    .info_section{
      background: linear-gradient(to right, #e5e6e6 50%, transparent 100%);
    }

    .blur_back{
      width: 80%;
      background-position: -100% 10% !important;
    }
  }

  @media screen and (max-width: 768px) {
    .movie_card{
      width: 95%;
      margin: 70px auto;
      min-height: 350px;
      height: auto;
    }

    .blur_back{
      width: 100%;
      background-position: 50% 50% !important;
    }

    .movie_header{
      width: 100%;
      margin-top: 85px;
    }

    .movie_desc{
      width: 100%;
    }

    .info_section{
      background: linear-gradient(to top, #e5e6e6 50%, transparent 100%);
      display: inline-grid;
    }
  }


  .lion_back{
    background: url("./../assets/animals/lion.jpg");
  }

  .giraffe_back{
    background: url("./../assets/animals/giraffe.jpg");
  }

  .panda_back{
    background: url("./../assets/animals/panda.jpg");
  }

  .rhino_back{
    background: url("./../assets/animals/rhino.jpg");
  }

  .elephant_back{
    background: url("./../assets/animals/elephant.png");
  }
}
</style>
