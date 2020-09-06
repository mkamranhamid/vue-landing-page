<template>
  <div id="app">
    <Header />
    <Welcome />
    <Packages />
    <ImportantInformation />
    <Advantages />
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />-->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import Welcome from "./components/Welcome.vue";
import Packages from "./components/Packages.vue";
import ImportantInformation from "./components/ImportantInformation.vue";
import Advantages from "./components/Advantages.vue";

@Options({
  components: {
    HelloWorld,
    Header,
    Welcome,
    Packages,
    ImportantInformation,
    Advantages
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
$color: red;
$blue: #25a8d8;
$black: #535554;
@font-face {
  font-family: Roboto;
  src: url(./assets/fonts/Roboto-Regular.ttf);
}
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
  // background-color: $color;
}
p {
  margin: 0;
}

h2 {
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 1.2rem;
  }
}
</style>
