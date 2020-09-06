<template>
  <header class="header">
    <div class="logo">
      <img alt="logo" src="../assets/logo.svg" />
    </div>
    <div class="hamburger">
      <img alt="hamberger-icon" src="../assets/open-menu.svg" />
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Header"
})
export default class Header extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$blue: #25a8d8;
header {
  background-color: $blue;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  img {
    width: 100%;
    height: 100%;
  }
  .hamburger {
    width: 30px;
    height: 30px;
  }
  .logo {
    width: 62px;
  }
}
</style>
