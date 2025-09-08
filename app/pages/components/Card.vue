<template>
  <div class="card-item my-4">
    <div class="card-image-placeholder"></div>
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    title: String,
    description: String,
  },
};
</script>

<style scoped>
.card-item {
  text-align: center;
}
.card-image-placeholder {
  width: 100%;
  height: 150px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  margin-bottom: 1rem;
}
</style>
