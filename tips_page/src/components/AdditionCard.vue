<template>
    <div class="addition-card">
      <h3>Дополнительно</h3>
      <ul>
        <li v-for="merit in merits" :key="merit.name">
          <img :src="merit.icon" alt="Icon" />
          <span>{{ merit.name }}</span>
        </li>
      </ul>
    </div>
</template>
  
<script>
  export default {
    props: {
      merits: {
        type: Array,
        required: true,
      },
    },
  };
</script>
  
<style scoped>
  .addition-card {
    /* Добавьте стили для карточки дополнений */
  }
</style>