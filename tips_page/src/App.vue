<template>
  <PageHeader />
  <main>
    <ProfileCard :user="employeeCard.user" />
    <form>
      <SendCard :availableAmounts="employeeCard.options.availableAmounts" :merits="employeeCard.options.merits"/>
      <AdditionCard :gifts="employeeCard.options.gifts" />
      <SendButton />
    </form>
  </main>
  <PageFooter />
</template>

<script>
import { mockEmployeeCard } from './mockData';
import PageHeader from './components/PageHeader.vue';
import ProfileCard from './components/ProfileCard.vue';
import SendCard from './components/SendCard.vue';
import AdditionCard from './components/AdditionCard.vue';
import SendButton from './components/SendButton.vue'
import PageFooter from './components/PageFooter.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
    ProfileCard,
    SendCard,
    AdditionCard,
    SendButton,
    PageFooter
  },
  data() {
    return {
      employeeCard: mockEmployeeCard,
    };
  },
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'); */
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
