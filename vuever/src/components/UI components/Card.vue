<template>
  <div class="card"  :class="{black: card.black}">
    <div class="icon">
      <img :src="card.link"  
      alt="" 
      />
    </div>
    <h2>{{ card.h2 }}</h2>
    <p>{{ card.p }}</p>
  </div>
</template>

<script scoped>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },

  mounted(){
    console.log(this.card.link, "link");
  }


};
</script>

<style scoped>
.card {
  padding: 20px 20px 40px 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 400px;
  min-width: 300px;
  width: 100%;
  flex: 1;
  height: 300px;
  flex-shrink: 0;
  background: #404956;
  border-radius: 12px;
}

.card.black {
  background: #535f6f !important;
}

.icon {
  display: flex;
  width: 92px;
  height: 92px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

h2 {
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

p {
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  opacity: 0.5;
}
</style>
