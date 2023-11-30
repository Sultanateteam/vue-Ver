<template>
  <h2><slot></slot></h2>
</template>
<script>
export default {};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&display=swap");

body {
  font-family: "IBM Plex Sans", sans-serif;
}
h2 {
  color: #d1d1d1;
  font-family: IBM Plex Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
</style>
