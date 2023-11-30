<template>
  <div class="ShImg">
    <div><img :src="link" alt="Shadow" />sdbvdsvs</div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.ShImg {
  position: relative;
}
div img {
  max-height: 100%;
  width: 100%;
  object-fit: cover;
}

.ShImg div::after {
  position: absolute;
  /* height: 100%; */
  content: "";
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(63, 65, 71, 0) 10%,
    rgba(0, 0, 0, 1) 100%
  );
}
</style>
