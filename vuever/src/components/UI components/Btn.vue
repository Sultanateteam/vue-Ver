<template>
  <button :class="[{ backBlack: color }]"><slot></slot></button>
</template>
<script>
export default {
  props: {
    color: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;800;900&display=swap");

body {
  font-family: "Inter", sans-serif;
}
body {
  font-family: "Montserrat", sans-serif;
}
button {
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 6px;
  border: 2px solid #20b2ff;
  background: #20b2ff;
  box-shadow: 0px 0px 0px 0px rgba(22, 25, 29, 0.1),
    0px 2px 4px 0px rgba(22, 25, 29, 0.1),
    0px 7px 7px 0px rgba(22, 25, 29, 0.09),
    0px 15px 9px 0px rgba(22, 25, 29, 0.05),
    0px 26px 10px 0px rgba(22, 25, 29, 0.01),
    0px 41px 11px 0px rgba(22, 25, 29, 0);
  transition: background-color 0.3s, border-color 0.3s ease;
}

button:hover {
  color: white;
  border-color: #1292d7;
  background-color: #1292d7;
}

.backBlack {
  display: flex;
  width: 123px;
  height: 48px;
  padding: 10px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 2px solid #fff;
  background-color: black;

  /* Orange Shadow */
  box-shadow: 0px 0px 0px 0px rgba(191, 87, 18, 0.1),
    0px 3px 6px 0px rgba(191, 87, 18, 0.1),
    0px 10px 10px 0px rgba(191, 87, 18, 0.09),
    0px 23px 14px 0px rgba(191, 87, 18, 0.05),
    0px 42px 17px 0px rgba(191, 87, 18, 0.01),
    0px 65px 18px 0px rgba(191, 87, 18, 0);
}

.backBlack:hover{
  background-color: white;
  color: black;
  scale: 1.05;
  border-color: white;
}
</style>
