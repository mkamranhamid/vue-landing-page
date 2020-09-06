<template>
  <div class="welcome">
    <img alt="logo" src="../assets/bikersos-logo.svg" />
    <p class="main-heading">
      <span class="company">BikerSOS</span> Premium
    </p>
    <h2>In nur 2 Schritten zu mehr Sicherheit biem Motorradfahren</h2>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Welcome"
})
export default class Welcome extends Vue {}
</script>

<style lang="scss" scoped>
$blue: #25a8d8;
$black: #535554;
.welcome {
  color: $black;
  margin: 1rem 0;
  .main-heading {
    font-size: 2.5rem;
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      font-size: 1.5rem;
    }
    .company {
      color: $blue;
    }
  }
  h2 {
    margin: 0;
  }
}
</style>