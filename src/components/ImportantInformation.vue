<template>
  <div class="important-information">
    <p>
      <strong>{{information.heading}}</strong>
    </p>
    <p
      class="note"
    >{{information.minDescripton}}</p>
    <p>
      {{information.description}}
    </p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import data from "@/data";

@Options({
  name: "ImportantInformation"
})
export default class ImportantInformation extends Vue {
  information = data.information;
}
</script>

<style lang="scss" scoped>
$blue: #25a8d8;
$black: #535554;
.important-information {
  text-align: center;
  width: 55%;
  margin: 1rem auto;
  margin-bottom: 1.5rem;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 90%;
  }
  .note {
    margin: 1rem auto;
    margin-bottom: 1.5rem;
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      width: 80%;
    }
  }
}
</style>