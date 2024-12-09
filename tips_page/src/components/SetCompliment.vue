<template>
    <div class="card_piece">
        <div class="inner_piece">
            <div class="card_regular__text">
                <h3>За что похвалить сотрудника</h3>
            </div>
        </div>
        <div class="inner_piece">
            <ul data-simplebar id="merits" class="has_scroll">
                <li class="merit" v-for="(merit, index) in merits" :key="index" @click="toggleChecked(index)">
                    <div class="merit_container">
                        <input type="checkbox" ref="compliment_checkboxes" name="merits" v-model="merit.checked"/>
                        <img :src="require(`../assets/images/${ merit.icon}`)" />
                        <div class="merit_title">
                            <h3>{{ merit.name }}</h3>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
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
    methods: {
        toggleChecked(index) {
            this.$refs.compliment_checkboxes[index].toggleAttribute('checked');
        },
    },
  };
</script>

<style scoped></style>