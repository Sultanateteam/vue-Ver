<template>
  <li key="{{ li.id }}">
    <img :src="li.link" />
    <p>{{ li.p }}</p>
  </li>
</template>

<script>
export default {
  props: {
    li: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
li {
  display: flex;
  max-width: 500px;
  min-width: 300px;
  width: 100%;
  height: 65px;
}

li img {
  flex: 2;
  object-fit: contain;
}

li p {
  flex: 6;
  display: flex;
  justify-content: center;
  padding: 0px 5px 0px 10px;
  align-items: center;
  text-transform: none;
  font-size: 16px;
}
</style>
