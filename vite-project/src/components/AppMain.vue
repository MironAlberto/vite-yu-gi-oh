<script>
import AppCard from './AppCard.vue';
import { store } from '../store.js';

export default {
    data() {
        return {
            store
        };
    },
    methods: {

    },
    components: {
        AppCard
    }
}
</script>

<template>
    <main>
        <div class="container">
            <select class="form-select" aria-label="archetype">
                <option selected>Alien</option>
                <option value="1">Archfiend</option>
                <option value="2">Noble Knight</option>
                <option value="3">Infernoble Arms</option>
            </select>

            <section class="content">
                <div class="found">
                    Found {{ store.cards.length }} cards
                </div>
                <div class="row">
                    <div class="my-col" v-for="(card, i) in store.cards" :key="i">
                        <AppCard :card="card"/>
                    </div>
                </div>
            </section>

        </div>
    </main>
</template>

<style lang="scss" scoped>
main{
    background-color: #D48F38;

    .container{
        max-width: 1700px;
        margin: 0 auto;
        padding: 20px;

        .form-select{
            max-width: 150px;
        }

        .content{
            background-color: white;
            margin-top: 20px;

            .found{
                width: 100%;
                background-color: #212529;
                color: white;
                padding: 20px;
                font-weight: bold;
            }

            .my-col{
                width: calc(100% / 6);
            }
            
        }
    }
}
</style>