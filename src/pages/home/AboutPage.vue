<template>
  <q-page padding style="padding-top: 65px;">

    <q-dialog v-model="abreDlgArea" @click="abreDlgArea = false" auto-close>

      <div class="no-margin col-12">
        <q-card flat>
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Diagrama de Áreas do DigCompEdu</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>
          <q-card-section>
            <q-img src="areas/digcompedu2.jpg" @click="abreDlgArea = true" />
          </q-card-section>
          <q-card-section>
            <div class="text-right">
              <div class="text-caption">
                Fonte: Lucas, M., & Moreira, A. (2018). DigCompEdu: quadro europeu de
                competência digital para educadores. Aveiro: UA
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

    </q-dialog>

    <q-dialog v-model="abreDlgNiveis" @click="abreDlgNiveis = false" auto-close>

      <div class="no-margin col-12">
        <q-card flat>
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Diagrama de Níveis de Progressão do DigCompEdu</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>
          <q-card-section>
            <q-img src="areas/digcompedu_level.jpg" @click="abreDlgNiveis = true" />
          </q-card-section>
          <q-card-section>
            <div class="text-right">
              <div class="text-caption">
                Fonte: Lucas, M., & Moreira, A. (2018). DigCompEdu: quadro europeu de
                competência digital para educadores. Aveiro: UA
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

    </q-dialog>

    <div class="justify-center items-center  ">
      <q-item-label class="text-h5 text-bold text-weight-light text-white">
        <q-icon name="web_stories" color="white" size="1.2em"></q-icon>
        Sobre a plataforma
        <q-separator class="bg-primary shadow-4" style="height:2px;max-width: 400px;margin-top: 5px" />
      </q-item-label>
    </div>
    <div class="justify-center items-center col-lg-12 ">
      <q-card class="col-lg-8 no-margin full-height ">
        <q-img src="teachers5.jpg" fit="cover" height="290px">
          <div class="absolute-bottom text-white text-weight-light text-h6 text-left bg-secondary">
            Sobre a necessidade de formação de competências digitais nos Educadores
          </div>
        </q-img>
        <q-card-section class="text-justify text-body2" >
          <q-scroll-area class="col " style="height:32dvb;" :visible="false">
            Atualmente testemunhamos transformações sociais profundas, impulsionadas pela interconexão da sociedade através das tecnologias digitais com as nossas vidas. Essas mudanças
            trazem impactos muito significativos na sociedade, elas estão reconfigurando as estruturas sociais. A mais preocupante destas transformações é à obsolescência de diversas
            ocupações e posições de trabalho. Se a tecnologia transforma a relação que temos com a vida em sociedade, não temos a mesma capacidade de mudar a nós mesmos na mesma
            velocidade, ou seja, capacitar suficientemente rápido para uma adequação equilibrada em contraponto a evolução tecnológica.

            Assim, a crescente adoção das tecnologias digitais está gerando uma expectativa de redução das atividades manuais e rotineiras. Em contrapartida, há uma demanda crescente
            por indivíduos com habilidades voltadas para a inovação, criatividade, resolução de problemas complexos, adaptabilidade, flexibilidade e colaboração. Essa evolução reflete
            a necessidade de se adaptar a um mundo cada vez mais digital e em constante mudança.
            Como estas transformações têm grande impacto em vários setores na sociedade, elas passam a redefinir nossa relação com o conhecimento. Em âmbito educacional, surge a necessidade
            de estabelecer relações mais dinâmicas entre escola, professor e aluno, com a tecnologia desempenhando um papel central como mediadora. A aprendizagem não se limita mais a processos
            estruturados, com carteiras serializadas em sala, com horários pré-definidos de aulas e disciplinas estritas. Toda a educação é remodelada para incorporar elementos abertos e informais.
            Isso ocorre devido a natureza do acesso ubíquo à tecnologia que se prolifera pautando a vida em sociedade em todos os aspectos. Ao mesmo tempo que o domínio do conhecimento e da informação
            não é mais propriedade exclusiva dos professores, já que a tecnologia a coloca ao alcance de todos, alterando o papel das escolas para que elas desenvolvam nos alunos competências socioemocionais e criativas.
            Para que eles aprendam a empreender e a lidar de forma cooperativa no mercado de trabalho. A passos largos ocorre uma transformação da sociedade de um modelo industrial para um modelo orientado pela tecnologia.

            <p>
              As políticas nacionais reconhecem a necessidade de equipar todos
              os Educadores com as competências necessárias para explorarem e se apropriarem das tecnologias digitais
              de forma crítica e criativa. O Quadro Europeu de Competência Digital para
              Educadores (DigCompEduc) responde a esta necessidade, fornecendo uma estrutura que
              permite aos educadores perceberem melhor o que significa ser
              digitalmente competente e avaliarem e desenvolverem mais a sua própria
              competência digital. Este Quadro ou Matriz de Competência permite com que o educador explore o potencial das tecnologias digitais
              para melhorar o ensino e a aprendizagem e preparar adequadamente os alunos para viver e trabalhar em sociedade digital.
            </p>

            <p> O DigCompEdu contém 6 grandes áreas, dentro de cada uma destas 6 áreas há subáreas especificando quais as competências digitais são exigidas e como elas podem ser desenvolvidas na formação contínua do educador.
             A Matriz de Competências ainda fornece níveis de progressão, de maneira que o educador possa compreender o caminho para sua evolução dentro das diferentes áreas, dominando as competências digitais de forma gradativa.
              A ChatEduc explora a Matriz de Competências digitais, o DigCompEdu para apoiar os educadores na sua formação continuada. A partir de um processo de auto-avaliação privativo,
            no qual o professor poderá realizar e refletir consigo mesom sobre seu momento na sua carreira e quais são os níveis de progressão para cada área.
            Ao final da auto-avaliação, a ChatEduc elabora um conjunto de postagens com o intuito de trazer ao Educador, recomendações, trilhas e videos promovendo as
            competências digitais para cada área de acordo com seu nível detectado durante a auto-avaliação.
            </p>

          </q-scroll-area>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn class="bg-primary text-white" style="margin-bottom: 10px" type="a" target="_blank"
                 href="https://youtu.be/cIDOrZuJzVU">DigCompEdu
            video
          </q-btn>
          <q-btn class="bg-primary text-white" style="margin-bottom: 10px" @click="abreDlgArea = true">Diagrama de Áreas
            do DigCompEdu
          </q-btn>
          <q-btn class="bg-primary text-white" style="margin-bottom: 10px" @click="abreDlgNiveis = true">Diagrama de Níves de Progressão
            do DigCompEdu
          </q-btn>
        </q-card-actions>
      </q-card>
    </div>


  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AboutPage",

  setup() {
    return {
      abreDlgArea: ref(false),
      abreDlgNiveis: ref(false),
      abreDlgVideo: ref(false)
    };
  }
});
</script>
