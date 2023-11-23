<template>
    <q-page padding>
        <div>
            <div class="q-pa-md">
                <div class="row">
                    <div class="col">
                        <p class="text-h5 text-left">Prompts para ChatEduc</p>
                    </div>
                    <div class="col text-right">
                        <q-btn-dropdown
                                color="orange-9"
                                icon="mdi-view-list"
                                label="Áreas"
                        >
                            <q-list>
                                <q-item clickable v-close-popup>
                                    <q-item-section avatar>
                                        <q-avatar icon="circle" color="primary" size="20px" text-color="primary"/>
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label>Engajamento Profissional</q-item-label>
                                    </q-item-section>
                                </q-item>

                                <q-item clickable v-close-popup>
                                    <q-item-section avatar>
                                        <q-avatar icon="circle" color="green-9" size="20px" text-color="green-9"/>
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label>Recursos Digitais</q-item-label>
                                    </q-item-section>
                                </q-item>

                                <q-item clickable v-close-popup>
                                    <q-item-section avatar>
                                        <q-avatar icon="circle" color="blue-9" size="20px" text-color="blue-9"/>
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label>Ensino e Aprendizagem</q-item-label>
                                    </q-item-section>
                                </q-item>

                                <q-item clickable v-close-popup>
                                    <q-item-section avatar>
                                        <q-avatar icon="circle" color="cyan-9" size="20px" text-color="cyan-9"/>
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label>Avaliação</q-item-label>
                                    </q-item-section>
                                </q-item>

                                <q-item clickable v-close-popup>
                                    <q-item-section avatar>
                                        <q-avatar icon="circle" color="purple-9" size="20px" text-color="purple-9"/>
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label>Capacitação dos Alunos</q-item-label>
                                    </q-item-section>
                                </q-item>

                                <q-item clickable v-close-popup>
                                    <q-item-section avatar>
                                        <q-avatar icon="circle" color="red-9" size="20px" text-color="red-9"/>
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label>Promoção da Competência Digital dos Estudantes</q-item-label>
                                    </q-item-section>
                                </q-item>


                            </q-list>
                        </q-btn-dropdown>
                        <q-btn-dropdown style="margin-left: 20px"
                                        color="orange-9"
                                        icon="mdi-view-list"
                                        label="Níveis de Competência"
                                        @click="onMainClick"
                        >
                            <q-list>
                                <q-item clickable v-close-popup>
                                    <q-item-section avatar>
                                        <q-avatar size="30px">
                                            <img src="levels/a1.png"/>
                                        </q-avatar>
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label>Iniciante</q-item-label>
                                    </q-item-section>
                                </q-item>

                                <q-item clickable v-close-popup>
                                    <q-item-section avatar>
                                        <q-avatar size="30px">
                                            <img src="levels/a2.png"/>
                                        </q-avatar>
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label>Explorador</q-item-label>
                                    </q-item-section>
                                </q-item>


                                <q-item clickable v-close-popup>
                                    <q-item-section avatar>
                                        <q-avatar size="30px">
                                            <img src="levels/b1.png"/>
                                        </q-avatar>
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label>Integrador</q-item-label>
                                    </q-item-section>
                                </q-item>

                                <q-item clickable v-close-popup>
                                    <q-item-section avatar>
                                        <q-avatar size="30px">
                                            <img src="levels/b2.png"/>
                                        </q-avatar>
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label>Especialista</q-item-label>
                                    </q-item-section>
                                </q-item>

                                <q-item clickable v-close-popup>
                                    <q-item-section avatar>
                                        <q-avatar size="30px">
                                            <img src="levels/c1.png"/>
                                        </q-avatar>
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label>Líder</q-item-label>
                                    </q-item-section>
                                </q-item>

                                <q-item clickable v-close-popup>
                                    <q-item-section avatar>
                                        <q-avatar size="30px">
                                            <img src="levels/c2.png"/>
                                        </q-avatar>
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label>Pioneiro</q-item-label>
                                    </q-item-section>
                                </q-item>


                            </q-list>
                        </q-btn-dropdown>
                    </div>

                </div>
            </div>
            <q-separator color="primary" class="full-width" style="margin-top: -15px"/>

            <div class="row  items-lg-start" style="margin-top: 10px">
                <div class="col-md-6 col-lg-4 col-sm-12 col-xs-12" v-for="item in data" :key="item.id">
                    <card-product :data="item"></card-product>
                </div>
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
        main_statement: "Estar ciente e fazer uso básico de tecnologias digitais para comunicação",
        chip: 'Discount 90%',
        chip_color: 'grey-4',
        chip_class: 'text-blue absolute-top-right'
    },
    {
        id: 2,
        title: 'Criação e modificação de conteúdo digital',
        caption: 'Como professor explorador devo estar ciente e fazer uso em nivel iniciante de tecnologias digitais para encontrar recursos digitais, como posso fazer isso?',
        main_statement: "Criar e modificar recursos usando ferramentas e estratégias básicas",
        rating: 4,
        amount: 'Explorador',
        img: 'levels/b1.png',
        header_color: "bg-green",
    },
    {
        id: 3,
        title: 'Alfabetização informacional e midiática',
        caption: 'Como professor especialista, eu uso uma variedade de diferentes estratégias pedagógicas para permitir que os alunos comparem criticamente e combinem de forma significativa informações de diferentes fontes. Eu ensino os alunos a citar fontes apropriadamente, como posso evoluir sobre esse tema?',
        main_statement: "Incentivar os alunos a usar tecnologias digitais para recuperação informacional",
        rating: 1,
        amount: 'Especialista',
        img: '../assets/products/giorgio-trovato-K62u25Jk6vo-unsplash.jpg',
        chip: 'Sold Out',
        chip_color: 'grey-8',
        chip_class: 'text-white absolute-top-right',
        header_color: "bg-red-9",
    },
    {
        id: 4,
        title: 'Aprendizagem colaborativa',
        caption: 'Como professor integrador, desenvolvo e implemento atividades colaborativas, nas quais as tecnologias digitais são usadas pelos alunos para a geração de conhecimento colaborativo, por exemplo, para obtenção e troca de informações. Exijo que os alunos documentem seus esforços colaborativos usando tecnologias digitais, por exemplo, apresentações digitais, vídeos, postagens em blogs. Como posso evoluir neste nível?',
        main_statement: "Implementação de tecnologias digitais no design de atividades colaborativas.",
        rating: 5,
        amount: 'Integrador',
        img: '../assets/products/jeroen-den-otter-iKmm0okt6Q4-unsplash.jpg',
        chip: 'Discount 50%',
        chip_color: 'grey-4',
        chip_class: 'text-blue absolute-top-right',
        header_color: "bg-blue",
    },
    {
        id: 5,
        title: 'Desenvolvimento Profissional Contínuo Digital',
        caption: 'Como um  professor líder, eu consulto uma variedade de possíveis oportunidades de treinamento online e seleciono aquelas que melhor se adaptam às minhas necessidades de desenvolvimento, estilo de aprendizagem e restrições de tempo. Participo ativamente de oportunidades de treinamento on-line e contribuo para melhorá-las e orientar outras pessoas a fazerem escolhas apropriadas, fornecendo feedback. Como posso aperfeiçoar neste nível?',
        rating: 2,
        amount: 'Líder',
        main_statement: "Explorando oportunidades on-line de CPD",
        img: '../assets/products/john-fornander-m2WpKnlLcEc-unsplash .jpg',
        header_color: "bg-orange-9",
    },
    {
        id: 6,
        title: 'Estratégias de avaliação',
        caption: 'Como professor pioneiro, desenvolvo novos formatos digitais de avaliação, que refletem abordagens pedagógicas inovadoras e permitem a avaliação de competências transversais.',
        main_statement: "Desenvolver formatos de avaliação inovadores , usando tecnologias digitais",
        rating: 4,
        amount: 'Pioneiro',
        img: '../assets/products/marek-szturc-0iIV1goIodE-unsplash.jpg',
        header_color: "bg-cyan",
    },
    {
        id: 7,
        title: 'Envolver os alunos ativamente',
        caption: 'Como professor especialista, eu uso uma variedade de tecnologias digitais para criar um ambiente de aprendizagem digital relevante, rico e eficaz, por exemplo, abordando diferentes canais sensoriais, estilos e estratégias de aprendizagem, variando metodologicamente tipos de atividades e composições de grupo. Eu reflito sobre a eficácia das estratégias de ensino empregadas para aumentar o envolvimento do aluno e o aprendizado ativo. Como posso me aperfeiçoar?',
        main_statement: "Usando tecnologias digitais para o envolvimento ativo dos alunos com o assunto",
        rating: 1,
        amount: 'Especialista',
        img: '../assets/products/giorgio-trovato-K62u25Jk6vo-unsplash.jpg',
        chip: 'Sold Out',
        chip_color: 'grey-8',
        chip_class: 'text-white absolute-top-right',
        header_color: "bg-purple",
    },
    {
        id: 8,
        title: 'Criação de conteúdo digital',
        caption: 'Como professor iniciante, não considero ou apenas muito raramente considero como promover a criação de conteúdo digital pelos alunos. Como posso me aperfeiçoar?',
        main_statement: "Fazendo pouco uso de estratégias que fomentem a criação de conteúdo digital pelos alunos",
        rating: 1,
        amount: 'Iniciante',
        img: '../assets/products/giorgio-trovato-K62u25Jk6vo-unsplash.jpg',
        chip: 'Sold Out',
        chip_color: 'grey-8',
        chip_class: 'text-white absolute-top-right',
        header_color: "bg-red-9",
    },
    {
        id: 9,
        title: 'Desenvolvimento Profissional Contínuo Digital',
        caption: 'Como professor integrador, Eu uso a internet para identificar cursos de treinamento adequados e outras oportunidades de desenvolvimento profissional (por exemplo, conferências). Como posso me aperfeiçoar?',
        main_statement: "Usando a internet para identificar oportunidades para CPD",
        rating: 1,
        amount: 'Integrador',
        img: '../assets/products/giorgio-trovato-K62u25Jk6vo-unsplash.jpg',
        chip: 'Sold Out',
        chip_color: 'grey-8',
        chip_class: 'text-white absolute-top-right',
        header_color: "bg-orange-9",
    },
];

export default defineComponent({
    name: "ProductCatalogues",
    components: {CardProduct: defineAsyncComponent(() => import('components/cards/CardProduct.vue'))},
    setup() {
        const search = ref('');
        const legendaDlg = ref(false);
        return {
            search,
            data,
            legendaDlg,
            toggleLegendaDlg() {
                legendaDlg.value = !legendaDlg.value;
            },
        }
    }
})
</script>

<style scoped>

</style>
