<template>
  <div class="popup add_info" id="additional_details_bouquet" v-for="gift in gifts" :key="gift">
    <div class="popup_container">
      <div class="popup_content__container">
        <div class="card_piece">
          <div class="inner_piece">
            <div class="card_header__text">
              <h3>{{ gift.name }}</h3>
            </div>
          </div>
          <div class="inner_piece">
            <div class="sponsor_box">
              <h3>Floww партнёр</h3>
            </div>
          </div>
        </div>
        <div class="slider_container">
          <div class="slider"><img src="src/slider1.png" /></div>
          <div class="nav_dots__container">
            <div class="dot active"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
        <div class="card_piece">
          <div id="popup_header">
            <h3>{{ gift.value }}</h3>
          </div>
          <div data-simplebar class="popup_text">
            <h3>
              Официанты часто остаются незамеченными героями ресторанного
              мира, ежедневно сталкиваясь с множеством вызовов и трудностей.
              Они не только обслуживают клиентов, но и создают атмосферу уюта
              и гостеприимства. Поэтому иногда хочется выразить благодарность
              и признательность за их труд и профессионализм.
            </h3>
            <p></p>
            <h3>
              Одним из способов выразить благодарность может стать небольшой
              знак внимания в виде букета цветов. Этот жест не только порадует
              официанта, но и поднимет ему настроение на весь день.
            </h3>
          </div>
        </div>
        <div class="card_piece">
          <button class="close_popup">Закрыть</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      gifts: {
        type: Array,
        required: true,
      },
    },
  };
</script>
  
<style scoped></style>