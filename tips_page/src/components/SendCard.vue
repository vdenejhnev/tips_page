<template>
    <div class="send-card">
      <h3>Отправить на мечту</h3>
      <ul>
        <li v-for="amount in availableAmounts" :key="amount">
          <input type="radio" :value="amount" v-model="selectedAmount" />
          <label>{{ amount }} ₽</label>
        </li>
      </ul>
      <h4>Выберите подарок:</h4>
      <ul>
        <li v-for="gift in gifts" :key="gift.value">
          <input type="radio" :value="gift.value" v-model="selectedGift" />
          <label>{{ gift.text }}</label>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      availableAmounts: {
        type: Array,
        required: true,
      },
      gifts: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        selectedAmount: null,
        selectedGift: null,
      };
    },
  };
  </script>
  
  <style scoped>
  .send-card {
    /* Добавьте стили для карточки отправки */
  }
  </style>