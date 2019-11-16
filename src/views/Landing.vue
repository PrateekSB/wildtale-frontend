<template>
  <article class="landing">
    <section class="container">
      <article class="wwdc">
    <span class="spin">
      <!-- Large Circles -->
      <div class="large circle one"></div>
      <div class="large circle two"></div>
      <div class="large circle three"></div>
      <div class="large circle four"></div>
      <div class="large circle five"></div>
      <div class="large circle six"></div>
      <div class="large circle seven"></div>
      <div class="large circle eight"></div>
    </span>
        <span class="pulse">
      <!-- Small Shapes -->
      <div class="small circle one"></div>
      <div class="small squircle two"></div>
      <div class="small circle three"></div>
      <div class="small squircle four"></div>
      <div class="small circle five"></div>
      <div class="small squircle six"></div>
      <div class="small circle seven"></div>
      <div class="small squircle eight"></div>
    </span>
        <!-- Squircles -->
        <span class="spin-reverse">
        <div class="large squircle one"></div>
      </span>
        <div class="large squircle two">
          <div class="content">
            <h1 class="title">Wild Tales</h1>
          </div>
        </div>
      </article>
    </section>
    <section class="button_container">
      <a class="share_btn shtw">
        <i class="fa fa-twitter"></i>
      </a>
    </section>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { check } from '@/api/auth';
import { mdbContainer, mdbRow, mdbIcon, mdbCol, mdbBtn, mdbInput } from 'mdbvue';

@Component({ components: { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbBtn, mdbInput } })
export default class Login extends Vue {
  check: string = '';

  async getData() {
    this.check = await check();
  }

  login() {
    this.$router.push('/dashboard');
  }
}
</script>

<style lang="scss" scoped>
.landing {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-top: -5rem;
  @include desktop {
    margin-top: 0;
  }
  .container {
    @include desktop {
      width: 35%;
    }
    .title {
      color: white;
    }
    /deep/input[type=text]:focus:not([readonly]) {
      border-bottom: 1px solid green;
      box-shadow: 0 1px 0 0 green;
    }
    span {
      display: block;
      position: absolute;
      top: calc(50% - 10em);
      left: calc(50% - 10em);
      width: 20em;
      height: 20em;
    }

    span.spin {
      animation: spin 10s linear infinite;
    }

    span.spin-reverse {
      animation: spin 30s linear infinite;
    }

    span.pulse {
      animation: spin-pulse 20s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotateZ(0);
      }
      100% {
        transform: rotateZ(360deg);
      }
    }

    @keyframes spin-pulse {
      0% {
        transform: scale(1) rotateZ(0);
      }
      50% {
        transform: scale(0.9) rotateZ(180deg);
      }
      100% {
        transform: scale(1) rotateZ(360deg);
      }
    }

    body {
      background: #fff;
      font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      color: #fff;
      font-size: 24px;
    }

    .circle {
      border-radius: 50%;
      left: calc(50% - 6.25em);
      top: calc(50% - 12.5em);
      transform-origin: 50% 12.5em;
    }

    .squircle {
      border-radius: 25%;
    }

    .circle, .squircle {
      width: 12.5em;
      height: 12.5em;
      position: absolute;
      border-top: 0.1em solid rgba(255,255,255,0.4);
    }

    .large.circle {
      box-shadow: 0 1em 2em rgba(0,0,0,0.5);
    }

    .small {
      width: 4em;
      height: 4em;
      left: calc(50% - 2em);
      top: calc(50% - 15em);
      transform-origin: 50% 15em;
      box-shadow: 0 0.25em 0.5em rgba(0,0,0,0.2);
    }

    $transparency: 0.75;

    .one {
      background: rgba(16, 63, 236, $transparency);
      transform: rotateZ(225deg);
    }
    .two {
      background: rgba(37, 172, 162, $transparency);
      transform: rotateZ(180deg);
    }
    .three {
      background: rgba(233, 124, 32, $transparency);
      transform: rotateZ(135deg);
    }
    .four {
      background: rgba(235, 67, 35, $transparency);
      transform: rotateZ(90deg);
    }
    .five {
      background: rgba(190, 28, 65, $transparency);
      transform: rotateZ(45deg);
    }
    .six {
      background: rgba(208, 57, 159, $transparency);
      transform: rotateZ(0);
    }
    .seven {
      background: rgba(150, 32, 198, $transparency);
      transform: rotateZ(-45deg);
    }
    .eight {
      background: rgba(95, 33, 203, $transparency);
      transform: rotateZ(-90deg);
    }

    .small.squircle {
      background: none;
      box-shadow: none;

      &::after {
        content: "";
        border-radius: 25%;
        width: 100%;
        height: 100%;
        position: absolute;
        background: red;
        transform: rotateZ(-45deg);
        box-shadow: -0.25em 0.25em 0.5em rgba(0,0,0,0.2);
      }

      &.two::after {
        background: rgba(37, 172, 162, $transparency);
      }
      &.four::after {
        background: rgba(235, 67, 35, $transparency);
      }
      &.six::after {
        background: rgba(208, 57, 159, $transparency);
      }
      &.eight::after {
        background: rgba(95, 33, 203, $transparency);
      }
    }

    .large.squircle {
      position: absolute;
      background: rgba(30, 7, 66, 0.65);
      border: none;
      left: calc(50% - 7.5em);
      top: calc(50% - 7.5em);
      width: 15em;
      height: 15em;
      transform: none;

      &.one {
        transform: rotateZ(45deg);
      }
    }

    .content {
      position: absolute;
      left: calc(70% - 7.5em);
      top: calc(86% - 7.5em);
      svg {
        fill: #fff;
        width: 3em;
        margin: 1.25em auto 1em;
      }

      h1 {
        font-weight: lighter;
        font-size: 1.75em;
        margin: 0.25em auto 1em;
        max-width: 6em;
      }

    }

    .message {
      position: absolute;
      left: 1em;
      bottom: 1em;
      right: 0;
      color: #222;
      text-align: left;

      a {
        text-decoration: none;
        font-weight: bold;
        color: #999;
      }
    }
  }

  .button_container {
    .share_btn{
      display: inline-block;
      text-decoration: none;
      width: 50px;
      height: 50px;
      line-height: 50px;
      font-size: 23px;
      border-radius: 50%;
      text-align: center;
      vertical-align: middle;
      overflow: hidden;
      font-weight: bold;
      text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.66);
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.28);
      transition: .3s;
    }
    .share_btn .fa{
      line-height: 50px;
    }
    .shtw {
      color: #22b8ff;
      background-image: -webkit-linear-gradient(#aeecff 0%, #57c8ff 100%);
      background-image: linear-gradient(#aeecff 0%, #57c8ff 100%);
    }
  }
}

</style>
