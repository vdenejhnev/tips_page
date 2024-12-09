<template>
  <section>
    <div id="send_card" class="card_wrapper">
      <div class="card_inside">
        <div class="card_piece">
          <div class="inner_piece">
            <div class="card_header__text">
              <h3>Отправить на мечту</h3>
            </div>
            <div id="output_price">
              <h3>0₽</h3>
            </div>
          </div>
        </div>
        <div class="card_piece">
          <div class="inner_piece">
            <div class="card_regular__text">
              <h3>Быстрый выбор</h3>
            </div>
            <ul id="fast_choice" data-simplebar class="choice has_scroll">
              <li class="option" v-for="amount in availableAmounts" :key="amount">
                <input type="radio" name="choice" :value="amount" />
                <div class="option_price">
                  <h3>{{ amount }}₽</h3>
                </div>
                <svg width="102" height="100" viewBox="0 0 102 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.1"
                    d="M30.9146 10.3397C62.793 8.49872 120.888 47.3012 134.571 76.1524C149.066 106.716 125.683 138.583 93.9368 144.695C54.4984 152.287 3.07563 120.788 -11.6328 82.1095C-20.596 58.5389 -8.40695 40.3402 15.9098 35.6502C46.139 29.8198 90.3782 53.0834 102.766 82.3206C111.079 101.941 98.6169 117.21 77.7087 115.905C41.5687 113.649 23.61 75.5692 23.61 75.5692"
                    stroke="white" stroke-width="20" stroke-linecap="round" />
                </svg>
              </li>
            </ul>
          </div>
          <div class="inner_piece">
            <div class="card_regular__text">
              <h3>Введите свою сумму (₽)</h3>
            </div>
            <input type="number" name="" min="1" id="total_textarea" placeholder="Например 50₽" />
            <div class="container">
              <SetRating />
              <SetCompliment :merits="merits"/>
            </div>
          </div>
          <div class="inner_piece">
            <div class="card_regular__text">
              <h3>Ваш комментарий</h3>
            </div>
            <textarea name="" type="text" spellcheck id="comment_textarea" placeholder="Все было замечательно! "
              rows="5"></textarea>
            <div class="container">
              <button type="reset" id="delete_btn">
                <h3>Стереть</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
  import SetCompliment from './SetCompliment.vue';
  import SetRating from './SetRating.vue';

  export default {
    components: {
      SetRating,
      SetCompliment,
    },
    props: {
      availableAmounts: {
        type: Array,
        required: true,
      },
      merits: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        selectedAmount: null,
      };
    },
  };
</script>
  
<style scoped></style>