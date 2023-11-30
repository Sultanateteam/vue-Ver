<template>
  <div class="big-box" :class="[{ boxReserve: ASection.boxReserve }]">
    <div class="box-info">
      <span>{{ ASection.title }}</span>
      <h1>{{ ASection.h1 }}</h1>
      <ul>
        <li v-for="list in ASection.lists">{{ list }}</li>
      </ul>
      <Btn :color="true">batafsil</Btn>
    </div>
    <div
      class="box-photo"
      :class="[{ covToCam: ASection.id == 5 }, { covToBox: ASection.id == 6 }]"
    >
      <img :src="ASection.link" alt="" />
      <!-- <img -->
      <!-- src="../../assets/aboutSection/boxesPhoto/2e5b6431f692e276f997d79f44dfb698.png" -->
      <!-- alt="" -->
      <!-- /> -->
    </div>
  </div>
</template>

<script>
import Btn from "./Btn.vue";

export default {
  components: { Btn },
  props: {
    ASection: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.big-box {
  display: flex;
  gap: 50px;
  padding: 50px 0px 100px 0px;
}

.box-info {
  flex: 3;
  padding: 0px 10px 0px 20px;
}

.box-photo {
  flex: 2;
  /* padding: 0px 10px 0px 20px; */
  position: relative;
}

.box-info span {
  color: #d1d1d1;
  font-family: IBM Plex Sans;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
}

.box-info h1 {
  color: #fff;
  font-family: D-DIN;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.box-info li {
  color: #fff;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  font-size: 20px;
}

.box-info li::before {
  content: "◆ ";
  font-size: 25px;
}

.box-photo img {
  position: absolute;
  height: 100%;
  flex-shrink: 0;
  object-fit: cover;
}

.big-box.boxReserve {
  flex-direction: row-reverse;
}

.big-box.boxReserve .box-photo img {
  right: 0%;
  position: absolute;
}

.covToCam img {
  scale: 2.5;
}

.covToBox img {
  scale: 0.5;
  left: -150px;
}
</style>
