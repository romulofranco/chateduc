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
    <div class="q-pa-md row items-start " style="margin-top: -10px">
      <div v-for="item in data" :key="item.id">
        <q-card bordered class="my-card " >
          <q-item :class="item.header_color" style="min-height: 90px">
            <q-avatar rounded style="margin-top: 10px">
              <q-img :src="item.img" />
              <q-tooltip
                style="max-width: 330px;">
                <q-img :src="item.img" height="210px" width="210px"/>
              </q-tooltip>
            </q-avatar>
            <q-item-section >
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
          <q-card-section >
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
    caption: 'É crucial capacitar os professores com competências digitais para garantir uma educação relevante e inclusiva na era digital. Isso não só beneficia individualmente os educadores, mas também melhora diretamente a qualidade do ensino aos alunos. Nesse sentido, foram exploradas tecnologias como Inteligência Artificial e desenvolvimento de aplicativos móveis para criar o protótipo da plataforma ChatEduc. A plataforma ChatEduc, originada de estudos em Chatbots para Educação, visa promover Competências Digitais em professores.',
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
    caption: ' O desenvolvimento envolveu a análise de propostas de Chatbots durante o doutorado, resultando em um template implementável. A ChatEduc utiliza à IA Generativa como o ChatGPT e Google Bard para fornecer respostas, recomendações e sugestões que auxiliam os professores na melhoria de suas competências digitais. A ChatEduc utiliza a Matriz de Competências DigCompEdu, podendo adaptar outras no futuro. ',
    main_statement: "Criar e modificar recursos usando ferramentas e estratégias básicas",
    rating: 4,
    amount: 'Mestre em Computação, Desenvolvedor e Doutorando na FE-Unicamp',
    img: 'https://media.licdn.com/dms/image/C4E03AQF2wd5U02_GzQ/profile-displayphoto-shrink_800_800/0/1516337425213?e=1706140800&v=beta&t=Vbve_0-mi14v9YspAWzElhMe2UxuAwrJ-oG4Uh07-xI',
    header_color: "bg-green",
  },
  {
    id: 3,
    title: 'Sérgio Amaral',
    caption: 'Concluiu o doutorado pela Universidade Estadual de Campinas em 1992. Atualmente é Professor Titular Colaborador na Faculdade de Educação da Universidade Estadual de Campinas. Membro da Association for the Advancement of Artificial Intelligence - AAAI, Membro da Associação Internacional de Inteligência Artificial - I2AI e Membro da International Society for Technology in Education - ISTE.',
    main_statement: "Incentivar os alunos a usar tecnologias digitais para recuperação informacional",
    rating: 1,
    amount: 'Orientador, Pós-Doutor Professor Titular Colaborador FE-Unicamp',
    img: 'data:image/jpeg;base64,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',
    chip: 'Sold Out',
    chip_color: 'grey-8',
    chip_class: 'text-white absolute-top-right',
    header_color: "bg-red-9",
  },
  {
    id: 4,
    title: 'DigCompEdu',
    caption: 'O quadro DigCompEdu dirige-se a educadores de todos os níveis de ensino, desde a primeira infância até ao ensino superior e de adultos, incluindo formação geral e profissional, necessidades educativas especiais e contextos de aprendizagem não formal. Pretende fornecer um quadro de referência geral para os criadores de modelos de Competência Digital, ou seja, Estados-Membros, governos regionais, agências nacionais e regionais relevantes, as próprias organizações educativas e prestadores de formação profissional públicos ou privados. Referência: Punie, Y., editor(es), Redecker, C., Quadro Europeu para a Competência Digital de Educadores: DigCompEdu, EUR 28775 EN, Serviço de Publicações da União Europeia, Luxemburgo, 2017, ISBN 978-92-79-73718- 3 (imprimir),978-92-79-73494-6 (pdf), doi:10.2760/178382 (imprimir),10.2760/159770 (on-line), JRC107466.',
    main_statement: "Implementação de tecnologias digitais no design de atividades colaborativas.",
    rating: 5,
    amount: 'Matriz de Competências Digitais',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRSZGTBRG3RxOxZewK0ir5PcMD0XbxgiAL9ZOvyJfFKxlpvQAL-tIpmZ7znMgQIgLyqfQ&usqp=CAU',
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
