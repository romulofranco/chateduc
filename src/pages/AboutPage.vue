<template>
    <q-page>

        <div class="q-pa-md">
            <div class="row">
                <div class="col">
                    <p class="text-h5 text-left">Sobre a ChatEduc</p>
                </div>
            </div>
        </div>
        <q-separator color="primary" class="full-width" style="margin-top: -15px"/>
        <div class="q-pa-md row items-start q-gutter-md " style="margin-top: 10px">
            <div v-for="item in data" :key="item.id">
                <q-card bordered class="my-card" style="min-height: 550px">
                    <q-img :src="item.img" style="max-height: 150px;">
                        <q-item>
                            <q-item-section class="text-left">
                                <q-item-label>
                                    <div class="text-h6 text-white text-left">{{ item.title }}</div>
                                </q-item-label>
                                <q-item-label>
                                    <q-chip dense :class="item.header_color" text-color="white" icon="star">
                                        {{ item.amount }}
                                        <q-tooltip class="text-body1 text-black bg-yellow-7 text-wrap"
                                                   style="max-width: 330px;">
                                            {{ item.main_statement }}
                                        </q-tooltip>
                                    </q-chip>
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-img>
                    <q-card-section horizontal>


                        <type-writer-phrase
                                class=" rounded-borders text-weight-light text-body1  text-center justify-center"
                                :content="item.caption"></type-writer-phrase>
                        <q-separator/>


                    </q-card-section>
                </q-card>
            </div>
        </div>


    </q-page>
</template>

<script>
import {defineComponent} from "vue";
import userAuthUser from "../composables/UserAuthUser";
import TypeWriterPhrase from "../components/TypeWriterPhrase.vue";

const data = [
    {
        id: 1,
        title: 'ChatEduc',
        caption: 'A necessidade crítica de preparar os professores para enfrentar os desafios e tirar proveito das oportunidades oferecidas pela era digital. Fomentar competências digitais nos educadores é crucial para garantir uma educação relevante, inclusiva e adaptada aos desafios do mundo contemporâneo. Essas competências não apenas beneficiam os educadores individualmente, mas também têm um impacto direto na qualidade da educação oferecida aos alunos. Por trás desta necessidade de aperfeiçoamento docente, exploramos diversas tecnologias digitais incluindo Inteligência Artificial e desenvolvimento de apps móveis para desenvolver o protótipo da plataforma ChatEduc. ' +
            'Esta plataforma é fruto de estudos de Chatbots voltados para a Educação e tem uma proposta de fomentar Competências Digitais nos professores a partir de uma perspectiva do mapeamento das Competências digitais dividas por áreas e subáreas contendo os níves de competências necessários para a progressão. Nós utilizamos a Matriz de Competências DigCompEdu, porém outras podem ser adaptadas futuramente.',
        rating: 2,
        amount: 'Plataforma de Chatbot',
        img: "https://uploads.laborx.com/avatars/thumb_resized_100x100_4TtosT2qJm9_JHIoAU59OdZ3RxOFL9ZM.png",
        header_color: "bg-purple",
        main_statement: "Estar ciente e fazer uso básico de tecnologias digitais para comunicação",
        chip: 'Discount 90%',
        chip_color: 'grey-4',
        chip_class: 'text-blue absolute-top-right'
    },
    {
        id: 2,
        title: 'Rômulo José Franco',
        caption: 'O estudo observou várias propostas de Chatbot durante a etapa de Estado da Arte do doutorado e obteve como resultado, um template de Chatbot e como poderia ser implementado. ',
        main_statement: "Criar e modificar recursos usando ferramentas e estratégias básicas",
        rating: 4,
        amount: 'Desenvolvedor e Doutorado',
        img: 'https://media.licdn.com/dms/image/C4E03AQF2wd5U02_GzQ/profile-displayphoto-shrink_800_800/0/1516337425213?e=1706140800&v=beta&t=Vbve_0-mi14v9YspAWzElhMe2UxuAwrJ-oG4Uh07-xI',
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
    }];

export default defineComponent({
    name: "AboutPage",
    components: {
        TypeWriterPhrase
    },
    setup() {
        const {user} = userAuthUser();
        return {
            user,
            data
        };
    },
});
</script>
<style>
.my-card {
    width: 100%;
    max-width: 350px;
}
</style>
