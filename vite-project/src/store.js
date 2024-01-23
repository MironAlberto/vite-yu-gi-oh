import { reactive } from 'vue';

export const store = reactive({
    api: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=114&offset=0',
    archetypeApi: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    archetypeResearchApi: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=',
    cards: [],
    searchingArchetype: [],
    archetypeName: '',
});