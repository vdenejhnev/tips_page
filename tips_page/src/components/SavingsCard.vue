<template>
    <div class="savings-card">
      <h3>Осталось накопить</h3>
      <p>{{ amountSaved }} ₽ из {{ amountGoal }} ₽</p>
    </div>
</template>
  
<script>
  export default {
    props: {
      amountSaved: {
        type: Number,
        required: true,
      },
      amountGoal: {
        type: Number,
        required: true,
      },
    },
  };
</script>
  
<style scoped>
  .savings-card {
    /* Добавьте стили для карточки накоплений */
  }
</style>