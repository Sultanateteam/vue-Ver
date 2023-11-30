<template>
  <div>
    <img
      src="../../assets/partners/907bd8f0f60a75b1356a412d68437a8a.png"
      alt=""
    />
    <img
      src="../../assets/partners/129a14b808ca4bda44daf92b584cefeb.png"
      alt=""
    />
    <img
      src="../../assets/partners/c09f46b96ce0a87783f41252e4cc0ae9.png"
      alt=""
    />
    <img
      src="../../assets/partners/eb793324d150992402812620a25484d4.png"
      alt=""
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-evenly;
  position: relative;
}

div::after{
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
}

div img {
  max-width: 200px;
  width: 100%;
  object-fit: contain;
}

img:nth-child(4) {
  max-width: 300px;
}
</style>
