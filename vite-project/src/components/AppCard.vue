<script>
export default {
    data() {
        return {
        };
    },
    props: {
        card: Object
    }
}
</script>

<template>
    <div class="cards-container">
        <div class="card text-center">
            <div class="img-box">
                <img :src="card.card_images[0].image_url" alt="card-image">
            </div>
            <h6 class="pt-3 text-white">
                {{ card.name }}
            </h6>
            <h4 class="pt-2">
                {{ card.archetype }}
            </h4>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cards-container{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;

    .card{
        height: 400px;
        background-color: #D48F38;
        .img-box{
            max-width: 200px;
        }

        img{
            width: 100%;
        }
    }
}
</style>