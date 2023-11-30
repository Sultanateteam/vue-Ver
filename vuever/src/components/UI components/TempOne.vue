<template>
  <div class="serv-bottom">
    <div class="container">
      <div class="service-info">
        <h1>{{ temp.title }}</h1>
        <ul class="serv-tool">
          <ServiceList v-for="li in temp.lists" :li="li" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceList from "./ServiceList.vue";

export default {
  props: {
    temp: {
      type: Object,
      required: true,
    },
  },
  components: { ServiceList },
};
</script>

<style scoped>
.serv-bottom {
  background: url("../../assets/service/korxona/img/Frame.png");
  background-size: 800px;
  background-repeat: no-repeat;
  background-position: right top;
  padding: 100px 0px;
}

.service-info {
  color: #fff;
  font-family: Montserrat;
  font-size: 54px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  padding: 100px 0px;
}

.serv-tool {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>
