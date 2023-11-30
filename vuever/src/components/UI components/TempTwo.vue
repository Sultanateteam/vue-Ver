<template>
  <div
    class="tepm-box_1"
    :class="[{ tepmBox1TL: tempTwo.tl }, { tepmBox1BR: tempTwo.br }]"
  >
    <div class="container innerTemp">
      <ul class="serv-tool tempInfo">
        <ServiceList v-for="li in tempTwo.lists" :li="li" />
      </ul>
      <div class="tempPhoto">
        <img :src="tempTwo.link" alt="Photo" />
      </div>
    </div>
  </div>
</template>

<script>
import ServiceList from "./ServiceList.vue";

export default {
  components: { ServiceList },
  props: {
    tempTwo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.tepm-box_1 {
  background-size: cover;
  background-size: 800px;
  background-repeat: no-repeat;
}

.tepmBox1TL {
  background: url("../../assets/service/korxona/img/FrameLT.png");
  background-repeat: no-repeat;
  background-position: top left;
}

.tepmBox1BR {
  background: url("../../assets/service/korxona/img/FrameBR.png");
  background-repeat: no-repeat;
  background-position: bottom right;
}

.tepmBox1BR > div {
  flex-direction: row-reverse;
}

.innerTemp {
  height: 600px;
  display: flex;
  padding: 0;
}

.serv-tool.tempInfo {
  flex: 1;
  flex-direction: column;
}

.tempPhoto {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tempPhoto img {
  transform: translateY(-30%);
  width: 80%;
  object-fit: cover;
}

.tepmBox1BR .tempPhoto {
  display: flex;
  justify-content: center;
  align-items: start;
}

.tepmBox1BR img {
  height: 500px;
  width: auto;
  transform: translateY(10%);
}
</style>
