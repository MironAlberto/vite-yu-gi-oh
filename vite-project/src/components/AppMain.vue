<script>
    import AppCard from './AppCard.vue';
    import { store } from '../store.js';
    import Axios from 'axios';

    export default {
        data() {
            return {
                store,
            };
        },
        methods: {
            archetypeSelection(){
                if (store.archetypeName.length > 0){
                    let archetypeResearchApi = this.store.archetypeResearchApi + this.store.archetypeName;
                    this.store.archetypeName = '';
                    Axios.get(archetypeResearchApi)
                    .then((response) => {
                    this.store.cards = response.data.data;
                    })
                }
            },
            searchingReset(){
                this.store.api = this.store.api;
                
                Axios.get(this.store.api).then((response) => {
                this.store.cards = response.data.data; 
                });
            
            }

        },
        components: {
            AppCard
        },
    }
        
</script>

<template>
    <main>
        <div class="container">
            <form class="d-flex">
                <select class="form-select" v-model="store.archetypeName">
                    <option value='' disabled>Choose your Archetype</option>
                    <option :value="archetype.archetype_name" v-for="(archetype, index) in store.searchingArchetype" :key="index">
                        {{ archetype.archetype_name }}
                    </option>
                </select>
                <button type="button" class="btn btn-primary ms-3" @click="archetypeSelection()">
                    Search
                </button>
                <button type="button" class="btn btn-warning ms-3 text-white" @click="searchingReset()">
                    Reset
                </button>
            </form>

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
            max-width: 300px;
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