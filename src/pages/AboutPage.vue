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
        <div class="q-pa-md row items-center text-justify " style="margin-top: -10px">
            <div v-for="item in data" :key="item.id">
                <q-card bordered class="my-card" style="min-height: 520px">
                    <q-item :class="item.header_color">
                        <q-avatar rounded style="margin-top: 10px">
                            <q-img :src="item.img"/>
                            <q-tooltip
                                    style="max-width: 330px;">
                                <q-img :src="item.img" height="210px" width="210px"/>
                            </q-tooltip>
                        </q-avatar>
                        <q-item-section>
                            <q-item-label>
                                <div class="text-h6 text-white " style="margin-left: 20px">{{ item.title }}</div>
                            </q-item-label>
                            <q-item-label>
                                <div class="text-caption text-white " style="margin-left: 20px">
                                    {{ item.amount }}
                                </div>
                            </q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-card-section>
                        <type-writer-phrase
                                class=" rounded-borders text-weight-light text-body2  text-justify"
                                :content="item.caption"></type-writer-phrase>
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
        caption: 'É crucial capacitar os professores com competências digitais para garantir uma educação relevante e inclusiva na era digital. Isso não só beneficia individualmente os educadores, mas também melhora diretamente a qualidade do ensino aos alunos. Nesse sentido, foram exploradas tecnologias como Inteligência Artificial e desenvolvimento de aplicativos móveis para criar o protótipo da plataforma ChatEduc. A plataforma ChatEduc, originada de estudos em Chatbots para Educação, visa promover Competências Digitais em professores. O desenvolvimento envolveu a análise de propostas de Chatbots durante o doutorado, resultando em um template implementável. A ChatEduc utiliza à IA Generativa como o ChatGPT e Google Bard para fornecer respostas, recomendações e sugestões que auxiliam os professores na melhoria de suas competências digitais. A ChatEduc utiliza a Matriz de Competências DigCompEdu, podendo adaptar outras no futuro.',
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
        id: 4,
        title: 'DigCompEdu',
        caption: 'O quadro DigCompEdu dirige-se a educadores de todos os níveis de ensino, desde a primeira infância até ao ensino superior e de adultos, incluindo formação geral e profissional, necessidades educativas especiais e contextos de aprendizagem não formal. Pretende fornecer um quadro de referência geral para os criadores de modelos de Competência Digital, ou seja, Estados-Membros, governos regionais, agências nacionais e regionais relevantes, as próprias organizações educativas e prestadores de formação profissional públicos ou privados. Referência: Punie, Y., editor(es), Redecker, C., Quadro Europeu para a Competência Digital de Educadores: DigCompEdu, EUR 28775 EN, Serviço de Publicações da União Europeia, Luxemburgo, 2017, ISBN 978-92-79-73718-3,978-92-79-73494-6 (pdf), doi:10.2760/178382,10.2760/159770 (on-line), JRC107466.',
        main_statement: "Implementação de tecnologias digitais no design de atividades colaborativas.",
        rating: 5,
        amount: 'Matriz de Competências Digitais',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRSZGTBRG3RxOxZewK0ir5PcMD0XbxgiAL9ZOvyJfFKxlpvQAL-tIpmZ7znMgQIgLyqfQ&usqp=CAU',
        chip: 'Discount 50%',
        chip_color: 'grey-4',
        chip_class: 'text-blue absolute-top-right',
        header_color: "bg-blue",
    },
    {
        id: 2,
        title: 'Rômulo José Franco',
        caption: ' Possui graduação em Ciências da Computação pela PUC Minas (2007) e Mestrado pelo Instituto de Computação da Unicamp. Doutorando pela Faculdade de Educação da Unicamp com foco em pesquisas relacionadas a Tecnologias aplicadas à Educação. Atuou por mais de 20 anos no Mercado passando por grandes empresas do segmento de TI como Totvs, CPqD e IBM. Foi Professor pelo IF Sul de Minas atuando com disciplinas da Computação, no Ensino médio técnico e na graduação. Tem técnica e experiência no ciclo de vida de projetos de software podendo desempenhar diferentes papeis em diferentes atividades do ciclo. Além de possuir experiência técnica em tecnologias e plataformas de desenvolvimento como Java, Python, Interfaces de programação como IBM Watson e interfaces de Inteligência Artificial como ChatBots, Processamento de Linguagem Natural, Aprendizado de Máquina, Análise Sentimental e BigData. As suas àreas de interesse estão relacionadas com tecnologias da Educação e Inteligência Artificial. ',
        main_statement: "Criar e modificar recursos usando ferramentas e estratégias básicas",
        rating: 4,
        amount: 'Mestre em Computação, Desenvolvedor da Plataforma ChatEduc e Doutorando pela FE-Unicamp',
        img: 'romulo_franco.png',
        header_color: "bg-green",
    },
    {
        id: 3,
        title: 'Sérgio Amaral',
        caption: 'Concluiu o doutorado pela Universidade Estadual de Campinas em 1992. Atualmente é Professor Titular Colaborador na Faculdade de Educação da Universidade Estadual de Campinas. Membro da Association for the Advancement of Artificial Intelligence - AAAI, Membro da Associação Internacional de Inteligência Artificial - I2AI e Membro da International Society for Technology in Education - ISTE. Publicou 34 artigos em periódicos especializados e 48 trabalhos em anais de eventos. Possui 7 livros publicados. Possui 3 softwares, 1 processo ou técnica e outros 49 itens de produção técnica. Participou de 60 eventos no Brasil e Exterior. Orientou 31 dissertações de mestrado e 13 tese de doutorado e 06 supervisão de pós-doutorado, além de ter orientado 6 trabalho de iniciação científica e 34 trabalhos de conclusão de curso na área de Educação. Atua na área de Educação. Em suas atividades profissionais interagiu com 20 colaboradores em co-autorias de trabalhos científicos.',
        main_statement: "Incentivar os alunos a usar tecnologias digitais para recuperação informacional",
        rating: 1,
        amount: 'Orientador, Pós-Doutor Professor Titular Colaborador FE-Unicamp',
        img: 'sergio_amaral.png',
        chip: 'Sold Out',
        chip_color: 'grey-8',
        chip_class: 'text-white absolute-top-right',
        header_color: "bg-red-9",
    }
    ];

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
    max-width: 150px;
}
</style>
