<template>
  <div>
    <span class="icon-wrapper" data-date="2019-04-16">
      <img
        alt="Cardhop app icon"
        class="icon"
        width="128"
        height="128"
        :src="data.src"
        :srcset="data.srcset"
      />
      {{ data.name }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
};
</script>

<style lang="scss" scoped></style>
