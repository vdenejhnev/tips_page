<template>
    <div class="dream-card">
      <h3>Моя мечта</h3>
      <p>{{ dream }}</p>
    </div>
</template>
  
<script>
  export default {
    props: {
      dream: {
        type: String,
        required: true,
      },
    },
  };
</script>
  
<style scoped>
  .dream-card {
    /* Добавьте стили для карточки мечты */
  }
</style>