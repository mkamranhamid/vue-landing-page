<template>
  <div class="packages-container">
    <h2>{{packages.title}}</h2>
    <div class="packages">
      <div class="package" v-for="pkg in packages.list" :key="pkg.duration">
        <div class="popular" v-bind:class="{'popular-border':pkg.popular}">
          <p v-if="pkg.popular">BELIEBT</p>
        </div>
        <div class="package-wrap" v-bind:class="{'package-borderless-top':pkg.popular}">
          <p>{{pkg.duration}}</p>
          <p>{{pkg.fees}}</p>
        </div>
        <p v-if="pkg.note" class="saving">{{pkg.note}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import data from "@/data";

@Options({
  name: "Packages"
})
export default class Packages extends Vue {
  packages = data.packages;
}
</script>

<style lang="scss" scoped>
$blue: #40b4e0;
$black: #535554;
.packages-container {
  color: $black;
  .packages {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .package {
      width: 20%;
      margin: 0 1rem;
      font-weight: bold;
      @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
        width: 70%;
        margin: 1rem 1rem;
      }
      .package-wrap {
        background-color: $blue;
        border-radius: 5px;
        padding: 2rem 0;
        color: #fff;
        box-shadow: 0px 3px 6px #0000003d;
        border-radius: 4px;
      }
      .package-borderless-top {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
      .saving {
        font-size: 0.8rem;
        color: $blue;
        margin: 0.4rem;
      }
      .popular-border {
        border: 2px solid $blue;
        border-radius: 5px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }
      .popular {
        height: 24px;
        p {
          font-size: 1rem;
          height: 100%;
          vertical-align: middle;
          color: $blue;
          padding: 3px;
        }
      }
    }
  }
}
</style>