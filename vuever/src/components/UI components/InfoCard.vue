<template>
  <Heading2>{{ info.h2 }}</Heading2>
  <Heading1>{{ info.h1 }}</Heading1>
  <ul>
    <li v-for="list in info.lists">{{ list }}</li>
  </ul>
  <div :class="[{dNone: info.btn}]">
    <Btn :color="false">batafsil</Btn>
  </div>
</template>

<script scoped>
import Heading1 from "./Heading1.vue";
import Heading2 from "./Heading2.vue";
import Btn from "./Btn.vue";

export default {
  components: { Heading1, Heading2, Btn },
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>

.dNone{
    display: none;
    pointer-events: none;
    opacity: 0;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 50px 0px;
}

li {
  color: #d1d1d1;
  font-family: Montserrat;
  list-style: none;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 150% */
}
</style>
