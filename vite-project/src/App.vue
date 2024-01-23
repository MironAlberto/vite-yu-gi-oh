<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import Axios from 'axios';
import { store } from './store.js';

export default {
    data() {
        return {
            store
        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },  
    methods: {

    },
    created(){
        Axios.get(this.store.api).then((response) => {
            this.store.cards = response.data.data;
        });
        Axios.get(this.store.archetypeApi).then((response) => {
            this.store.searchingArchetype = response.data;
        });
    }
    
}
</script>

<template>
    <AppHeader/>

    <AppMain/>

    <AppFooter/>
</template>

<style lang="scss">
@use "assets/scss/main" as *;
</style>
