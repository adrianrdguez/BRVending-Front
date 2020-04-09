<template>
  <div class="mt-10">
    <span class="icon-wrapper" data-date="2019-04-16">
      <img
        alt="Cardhop app icon"
        class="icon"
        width="128"
        height="128"
        :src="data.src"
        :srcset="data.srcset"
      /> </span
    ><br />
    <p class="name">{{ data.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
};
</script>

<style scoped>
.name {
  font-size: 50px;
  font-weight: 600;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.icon {
  border-radius: 20px;
}
</style>
