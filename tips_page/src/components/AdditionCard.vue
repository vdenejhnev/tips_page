<template>
  <section>
    <div id="addition_card" class="card_wrapper">
      <div class="card_inside">
        <div class="card_piece">
          <div class="inner_piece">
            <div class="card_regular__text">
              <h3>Дополнительно</h3>
            </div>
            <ul id="add_choice" class="choice has_scroll">
              <li class="option" v-for="gift in gifts" :key="gift.value">
                <input type="radio" name="add choice"  :value="gift.value" v-model="selectedGift" />
                <div class="option_price">
                  <h3>{{ gift.value }}₽</h3>
                </div>
                <div class="option_box">
                  <div class="option_info">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10 9.08333V13.6667M10 18.25C5.44365 18.25 1.75 14.5564 1.75 10C1.75 5.44365 5.44365 1.75 10 1.75C14.5564 1.75 18.25 5.44365 18.25 10C18.25 14.5564 14.5564 18.25 10 18.25ZM10.0457 6.33333V6.425L9.95435 6.42518V6.33333H10.0457Z"
                        stroke="#00B2FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div class="option_text">
                    <h3>{{ gift.text }}</h3>
                  </div>
                </div>
                <svg width="115" height="150" viewBox="0 0 116 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.1"
                    d="M30.9146 10.3397C62.793 8.49872 120.888 47.3012 134.571 76.1524C149.066 106.716 125.683 138.583 93.9368 144.695C54.4984 152.287 3.07563 120.788 -11.6328 82.1095C-20.596 58.5389 -8.40695 40.3402 15.9098 35.6502C46.139 29.8198 90.3782 53.0834 102.766 82.3206C111.079 101.941 98.6169 117.21 77.7087 115.905C41.5687 113.649 23.61 75.5692 23.61 75.5692"
                    stroke="white" stroke-width="20" stroke-linecap="round" />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
  export default {
    props: {
      gifts: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        selectedGift: null,
      };
    },
  };
</script>
  
<style scoped></style>