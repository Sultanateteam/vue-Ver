<template>
  <div class="stepCard" :class="[{reserve: step.reserve}, {blue: step.blue}, {bords: step.number===5}]">
    <div class="informations">
      <div class="num">{{ step.number }}</div>
      <div class="image">
        <img src="../../assets/steps/user-add.png" alt="" />
      </div>
      <div class="info">{{step.info}}</div>
    </div>
    <span class="bord"></span>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;800;900&display=swap");

.stepCard {
  /* background-color: #fff; */
  display: flex;
  align-items: end;
}

.stepCard.reserve {
  justify-content: end;
  flex-direction: row-reverse;
}

.informations {
  width: 560px;
  height: 140px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #404956;
  position: relative;
  display: flex;
  align-items: center;
  gap: 30px;
  padding-left: 70px;
}

.blue .informations {
  background: #535f6f;
}

.num {
  color: #fff;
  font-family: Inter;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 72px;
  height: 72px;
  flex-shrink: 0;
  border-radius: 60px;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  background: #404956;
  left: -35px;
  top: 25%;
  z-index: 8;
}

.blue .num {
  background: #20b2ff;
}

.info {
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.bord {
  width: 406px;
  height: 64.631px;
  position: relative;
  outline: none;
  overflow: hidden;
  /* background-color: #fff; */
}

.bord::after {
  content: "";
  border: 13px dashed #404956;
  border-radius: 40px;
  left: -48%;
  top: 0;
  width: 600px;
  height: 500px;
  position: absolute;
}

.reserve .bord::after {
  left: 0%;
  top: 0;
}

.blue .bord::after {
  border-color: #20b2ff;
}

.bords .bord::after{
  border: none;
}
</style>
