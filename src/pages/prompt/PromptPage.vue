<template>
    <q-page class="q-pa-sm">
        <div >
            <q-card class="no-border no-shadow bg-transparent">
                <q-card-section class="q-pa-sm">
                    <q-input rounded v-model="search" outlined placeholder="Buscar por prompts por área, subárea ou nível de progressão">
                        <template v-slot:append>
                            <q-icon v-if="search === ''" name="search"/>
                            <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''"/>
                        </template>
                    </q-input>
                </q-card-section>
            </q-card>
        </div>
        <div class="row q-col-gutter-sm items-lg-start">
            <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12" v-for="item in data" :key="item.id">
                <card-product :data="item"></card-product>
            </div>
        </div>
    </q-page>
</template>

<script>
import {defineComponent, defineAsyncComponent} from 'vue';
import {ref} from 'vue';

const data = [
    {
        id: 1,
        title: 'Comunicação Organizacional',
        caption: 'Como Educador tenho feito pouco uso de tecnologias digitais para comunicação, o que posso fazer para utilizar mais as tecnologias digitais?',
        rating: 2,
        amount: 'Iniciante',
        img: "levels/a1.png",
        header_color: "bg-purple",
        chip: 'Discount 90%',
        chip_color: 'grey-4',
        chip_class: 'text-blue absolute-top-right'
    },
    {
        id: 2,
        title: 'Criação e modificação de conteúdo digital',
        caption: 'Como Educador devo estar ciente e fazer uso em nivel iniciante de tecnologias digitais para encontrar recursos digitais, como posso fazer isso?',
        rating: 4,
        amount: 'Explorador',
        img: 'levels/b1.png',
        header_color: "bg-green",
    },
    {
        id: 3,
        title: 'Our Changing Planet',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        rating: 1,
        amount: 'levels/a1.png',
        img: '../assets/products/giorgio-trovato-K62u25Jk6vo-unsplash.jpg',
        chip: 'Sold Out',
        chip_color: 'grey-8',
        chip_class: 'text-white absolute-top-right',
        header_color: "bg-blue",
    },
    {
        id: 4,
        title: 'Our Changing Planet',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        rating: 5,
        amount: 'levels/a1.png',
        img: '../assets/products/jeroen-den-otter-iKmm0okt6Q4-unsplash.jpg',
        chip: 'Discount 50%',
        chip_color: 'grey-4',
        chip_class: 'text-blue absolute-top-right',
        header_color: "bg-cyan",
    },
    {
        id: 5,
        title: 'Our Changing Planet',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        rating: 2,
        amount: 'levels/a1.png',
        img: '../assets/products/john-fornander-m2WpKnlLcEc-unsplash .jpg',
        header_color: "bg-green",
    },
    {
        id: 6,
        title: 'Our Changing Planet',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        rating: 4,
        amount: 'levels/a1.png',
        img: '../assets/products/marek-szturc-0iIV1goIodE-unsplash.jpg',
        header_color: "bg-orange",
    },
];

export default defineComponent({
    name: "ProductCatalogues",
    components: {CardProduct: defineAsyncComponent(() => import('components/cards/CardProduct.vue'))},
    setup() {
        const search = ref('');
        return {
            search,
            data
        }
    }
})
</script>

<style scoped>

</style>
