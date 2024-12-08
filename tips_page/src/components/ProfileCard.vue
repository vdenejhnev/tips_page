<template>
  <section>
    <div id="payee_card" class="card_wrapper">
      <div class="card_inside">
        <div id="profile_card" class="card_piece">
          <div id="avatar_box">
            <img :src="require(`../assets/images/${user.avatar}`)" alt="Аватарка" />
          </div>
          <div id="name-job_box">
            <div class="card_regular__text">
              <h3>{{ user.name }}</h3>
            </div>
            <div class="card_hence__text">
              <h3>{{ user.job }}</h3>
            </div>
          </div>
        </div>
        <div id="mydream_card" class="card_piece">
          <svg width="370" height="93" viewBox="0 0 332 97" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.1"
              d="M116.767 -54.4674C183.931 -58.3462 306.329 23.4056 335.158 84.1914C365.697 148.585 316.432 215.724 249.547 228.601C166.455 244.598 58.1142 178.234 27.1254 96.7422C8.24105 47.082 33.9219 8.73961 85.1541 -1.14162C148.843 -13.4254 242.049 35.588 268.148 97.1868C285.663 138.525 259.407 170.694 215.356 167.945C139.214 163.192 101.377 82.9627 101.377 82.9627"
              stroke="#00B2FF" stroke-width="40" stroke-linecap="round" />
          </svg>
          <div class="thanks_container">
            <div class="thanks_inner">
              <div class="card_hence__text">
                <h3>Моя мечта</h3>
              </div>
              <div class="card_regular__text">
                <h3>
                  {{ user.dream }}
                </h3>
              </div>
            </div>
          </div>
          
        </div>
        <div id="savings_card" class="card_piece">
          <div id="left-box">
            <div class="card_regular__text">
              <h3>Осталось накопить</h3>
            </div>
            <div id="money-box">
              <span>{{ user.amountSaved }} ₽</span>
              <span> из {{ user.amountGoal }} ₽</span>
            </div>
          </div>
        </div>
        <div id="progress_card" class="card_piece">
          <div id="savings-box_progressbar">
            <progress value="107.5" max="120"></progress>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.profile-card {
  /* Добавьте стили для карточки профиля */
}
</style>