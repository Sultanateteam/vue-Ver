<template>
  <h1><slot></slot></h1>
</template>
<script>
export default {};
</script>
<style scoped>
h1 {
  color: #fff;

  /* Button Shadow */
  text-shadow: 0px 0px 0px rgba(22, 25, 29, 0.1),
    0px 2px 4px rgba(22, 25, 29, 0.1), 0px 7px 7px rgba(22, 25, 29, 0.09),
    0px 15px 9px rgba(22, 25, 29, 0.05), 0px 26px 10px rgba(22, 25, 29, 0.01),
    0px 41px 11px rgba(22, 25, 29, 0);
  font-family: IBM Plex Sans;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
</style>
