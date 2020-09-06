<template>
  <div class="advantages">
    <h2>{{advantages.title}}</h2>
    <div class="verions">
      <div class="verion">
        <div class="heading">Funktionen</div>
        <div class="grayspace">
          <p></p>
        </div>
        <div class="text" v-for="feature in advantages.list.features" :key="feature">
          <p>{{feature}}</p>
        </div>
      </div>
      <div class="verion basic-verion">
        <div class="heading">Basisversion</div>
        <div class="grayspace">
          <p></p>
        </div>
        <div class="text" v-for="basic in advantages.list.basic" :key="basic">
          <img
            alt="check-mark"
            :src="getBasicImgUrl(basic)"
            class="icon"
            v-bind:class="{'icon-orange':basic,'icon-gray':!basic}"
          />
        </div>
        <div class="grayspace">
          <div class="stores">
            <img alt="app-store" src="../assets/app-store.png" />
            <img alt="google-play" src="../assets/google-play.png" />
          </div>
        </div>
      </div>
      <div class="verion premium-verion">
        <div class="heading">Bikersos Premium</div>
        <div class="grayspace">
          <p class>
            <span class="pricing">
              <sup>ab €</sup>
              <span class="significant">3</span>
              <sup class="decimal">33</sup>
              <sub>/ Monat</sub>
            </span>
          </p>
        </div>
        <div class="text" v-for="premium in advantages.list.premium" :key="premium">
          <img
            alt="check-mark"
            :src="getBasicImgUrl(premium)"
            class="icon"
            v-bind:class="{'icon-blue':premium,'icon-gray':!premium}"
          />
        </div>
        <div class="grayspace">
          <button class="btn btn-primary">Premium Mitglied Werden</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import data from "@/data";

@Options({
  name: "Advantages"
})
export default class Advantages extends Vue {
  advantages = data.advantages;
  getBasicImgUrl(hasFeature: string) {
    if (hasFeature) {
      return require("../assets/check-mark.svg");
    }
    return require("../assets/x-mark.svg");
  }
}
</script>

<style lang="scss" scoped>
$tableBg: #f8f8f8;
$tableBorder: #ededed;
$blue: #5baac7;
.advantages {
  margin: 1rem 0;
  .verions {
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    margin: 0 auto;
    background-color: $tableBg;
    padding: 0.4rem;
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      width: 80%;
    }
    .verion {
      width: calc(100% / 3.2);
      @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
        width: 100%;
      }
      .text,
      .heading {
        border: 1px solid $tableBorder;
        background-color: #fff;
        padding: 0.8rem;
      }
      .grayspace {
        border: 1px solid $tableBorder;
        background-color: $tableBg;
        padding: 0.6rem;
        .stores {
          padding-top: 0.4rem;
          img {
            width: 100px;
          }
        }
      }
    }
    .premium-verion {
      width: calc(111% / 3);
      box-shadow: 0px 3px 6px #0000003d;
      margin-top: -0.4rem;
      @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
        margin-top: 0;
        width: 100%;
      }
      .heading {
        font-weight: bold;
      }
      .grayspace {
        .pricing {
          font-size: 2.5rem;
          .decimal,
          .significant {
            color: #5ba9c6;
            font-weight: bold;
          }
          sup {
            font-size: 40%;
          }
          sub {
            font-size: 30%;
            font-style: italic;
            color: #909090;
          }
        }
      }
    }
  }
  .btn {
    border-width: 0;
    border-radius: 0.2rem;
    color: #fff;
    padding: 0.6rem;
    text-transform: uppercase;
    &-primary {
      background-color: $blue;
    }
  }
  .icon {
    border: 1px solid transparent;
    border-radius: 55%;
    width: 12px;
    // padding: 1px;
    &-orange {
      background-color: #e17b58;
    }
    &-blue {
      background-color: #5baac7;
    }
    &-gray {
      background-color: #747474;
    }
  }
}
</style>