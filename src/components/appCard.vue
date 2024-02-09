<script>
export default{
    data(){
        return{
            logo: 'src/assets/img/boolean-logo.png',
            brands: [
                {
                    id: 1,
                    image: "src/assets/img/1.webp",
                    imageHover: "src/assets/img/1b.webp",
                    brand: "Levi's",
                    kind: "Relaxed Fit",
                    price: 29.99,
                    favHeart : true,
                    badges: [
                        {
                            type: "tag",
                            value: "Sostenibilità"
                        },
                        {
                            type: "discount",
                            value: "-50%"
                        }
                        ]
                },
                {
                    id: 2,
                    image: "src/assets/img/2.webp",
                    imageHover: "src/assets/img/2b.webp",
                    brand: "Guess",
                    kind: "Roses Tee",
                    price: 20.99,
                    favHeart : true,
                    badges: [
                    {
                        type: "discount",
                        value: "-30%"
                    }
                    ]
                },
                {
                    id: 3,
                    image: "src/assets/img/3.webp",
                    imageHover: "src/assets/img/3b.webp",
                    brand: "Come Zucchero Filato",
                    kind: "Voglia di colori pastello",
                    price: 129.99,
                    favHeart : false,
                    badges: [
                    {
                        type: "discount",
                        value: "-30%"
                    }
                    ]
                },
                {
                    id: 4,
                    image: "src/assets/img/4.webp",
                    imageHover: "src/assets/img/4b.webp",
                    brand: "Levi's",
                    kind: "Tee Unisex",
                    price: 14.99,
                    favHeart : false,
                    badges: [
                    {
                        type: "tag",
                        value: "Sostenibilità"
                    },
                    {
                        type: "discount",
                        value: "-50%"
                    }
                    ]
                },
                {
                    id: 5,
                    image: "src/assets/img/5.webp",
                    imageHover: "src/assets/img/5b.webp",
                    brand: "Maya Deluxe",
                    kind: "Stripe Bodice",
                    price: 99.99,
                    favHeart : true,
                    badges: [
                    {
                        type: "tag",
                        value: "Sostenibilità"
                    },
                    {
                        type: "discount",
                        value: "-50%"
                    }
                    ]
                },
                {
                    id: 6,
                    image: "src/assets/img/6.webp",
                    imageHover: "src/assets/img/6b.webp",
                    brand: "Esprit",
                    kind: "Maglione - Black",
                    price: 29.99,
                    favHeart : true,
                    badges: [
                    {
                        type: "tag",
                        value: "Sostenibilità"
                    }
                    ]
                }
            ],
    methods: {

    }
}
    }
}


</script>


<template>
    <div class="card" v-for="(brands,index) in brands" :key="brands.id">
        <img :src="brands.image" alt="">
        <img :src="brands.imageHover" alt="" class="hovederimg">
        <div class="card-info">
            <p>{{ brands.brand }}</p>
            <h3>{{ brands.kind }}</h3>
            <small class="price">{{ brands.price }} €</small>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
.card-info{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
}
.hovederimg{
    display: none;
}
.hovederimg:hover{
    
}


.price{
    color: $price-color;
    font-weight: bold;
}
</style>