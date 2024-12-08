<template>
  <ProfileCard :user="employeeCard.user" />
  <SavingsCard :amountSaved="employeeCard.user.amountSaved" :amountGoal="employeeCard.user.amountGoal" />
  <SendCard :availableAmounts="employeeCard.options.availableAmounts" :gifts="employeeCard.options.gifts" />
  <AdditionCard :merits="employeeCard.options.merits" />
</template>

<script>
import { mockEmployeeCard } from './mockData';
import ProfileCard from './components/ProfileCard.vue';
import SavingsCard from './components/SavingsCard.vue';
import SendCard from './components/SendCard.vue';
import AdditionCard from './components/AdditionCard.vue';

export default {
  name: 'App',
  components: {
    ProfileCard,
    SavingsCard,
    SendCard,
    AdditionCard
  },
  data() {
    return {
      employeeCard: mockEmployeeCard,
    };
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
