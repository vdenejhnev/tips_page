<template>
    <div class="card_piece" id="expand_menu">
            <div class="inner_piece">
                <div class="card_regular__text">
                    <h3>Оцените качество работы</h3>
                </div>
            </div>
            <div class="inner_piece">
            <div id="star_box__container" :style="{ border: borderStyle }">
                <div id="quality_of_work">
                    <h3 id="quality_of_work__text">{{ qualityText }}</h3>
                </div>
                <div id="stars">
                    <i class="fa-solid fa-star" v-for="(star, index) in stars" :key="index" @click="setRating(index)">
                        <input type="checkbox" ref="rating_checkboxes" name="stars" :value="index"/>
                    </i>
                </div>
            </div>
        </div>
    </div>
</template> 

<script>
export default {
    data() {
        return {
            GOOD_WORDS: ['Плохо', 'Приемлемо', 'Нормально', 'Здорово', 'Великолепно'],
            stars: [1, 2, 3, 4, 5],
            rating: 0,
            borderStyle: 'none',
        };
    },
    computed: {
        qualityText() {
            return this.GOOD_WORDS[this.rating - 1] || '';
        },
    },
    methods: {
        setRating(index) {
            this.rating = index + 1;
            this.borderStyle = 'solid 1px var(--main-color)';

            this.$refs.rating_checkboxes.forEach((checkbox, idx) => {
                if (idx <= index) {
                    checkbox.setAttribute('checked', 'true');
                } else {
                    checkbox.setAttribute('checked', 'false');
                }
            });
        },
    },
};
</script>

<style scoped></style>