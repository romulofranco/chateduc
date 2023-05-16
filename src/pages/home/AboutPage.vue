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

    <div class="justify-center items-center  ">
      <q-item-label class="text-h5 text-bold text-weight-light text-white">
        <q-icon name="web_stories" color="white" size="1.2em"></q-icon>
        Sobre a plataforma
        <q-separator class="bg-primary shadow-4" style="height:2px;max-width: 400px;margin-top: 5px" />
      </q-item-label>
    </div>
    <div class="row" style="margin-top: 5px">
      <q-card class="col-lg-12 no-margin full-height full-width ">
        <q-img src="teachers5.jpg" fit="cover" height="290px">
          <div class="absolute-bottom text-white text-weight-light text-h6 text-left bg-secondary">
            Sobre a necessidade de formação de competências digitais nos Educadores
          </div>
        </q-img>
        <q-card-section class="text-justify text-body2">
          <q-scroll-area class="col q-pa-lg" style="height:32dvb;" :visible="false">
            A ubiquidade das tecnologias digitais mudou profundamente quase todos os
            aspetos das nossas vidas: a forma como comunicamos, como trabalhamos, como
            aproveitamos o nosso tempo de lazer, como organizamos a nossa vida, e como
            obtemos conhecimento e informação. Mudou a forma como pensamos e nos
            comportamos. As crianças e os jovens estão a crescer num mundo onde as
            tecnologias digitais são ubíquas. Não conhecem, nem conseguem reconhecer outra
            forma de viver. Isto não significa, porém, que estejam naturalmente equipados
            com as competências adequadas para usar tecnologias digitais de forma eficaz e
            consciente.
            <p>
              As políticas nacionais e europeias reconhecem a necessidade de equipar todos
              os cidadãos com as competências necessárias para usarem tecnologias digitais
              de forma crítica e criativa. O Quadro Europeu de Competência Digital para
              Cidadãos (DigComp) responde a esta necessidade, fornecendo uma estrutura que
              permite aos cidadãos europeus perceberem melhor o que significa ser
              digitalmente competente e avaliarem e desenvolverem mais a sua própria
              competência digital.
            </p>
            Para aprendentes abrangidos pelo ensino obrigatório, existe uma série de
            iniciativas, a nível europeu, nacional e local, que oferecem orientações e
            conselhos que lhes possibilitam desenvolver a sua competência digital, muitas
            vezes com um enfoque na cidadania digital. Na maioria dos estados membros, os
            currículos foram ou estão a ser desenvolvidos de modo a garantir que a geração
            jovem seja capaz de participar numa sociedade digital de forma criativa,
            crítica e produtiva.
            <p>
              Consequentemente, existe a nível internacional, europeu e nacional, um
              interesse considerável em equipar os educadores com as competências
              necessárias para explorar plenamente o potencial das tecnologias digitais
              para melhorar o ensino e a aprendizagem e preparar adequadamente os
              aprendentes para viver e trabalhar numa sociedade digital. Muitos estados
              membros já desenvolveram ou estão atualmente no processo de desenvolvimento
              e revisão de referenciais, ferramentas de autoavaliação e programas de
              formação para orientar a formação de educadores e o desenvolvimento
              profissional contínuo nesta área.
            </p>
            O Quadro DigCompEdu reflete sobre instrumentos existentes de competência
            digital para educadores. O seu objetivo é sintetizá-los num modelo coerente
            que permita a educadores, de todos os níveis de educação, avaliar e
            desenvolver de forma abrangente a sua competência digital pedagógica. Não se
            destina a comprometer esforços nacionais, regionais e locais para captar a
            competência digital dos educadores. Pelo contrário, a diversidade das
            abordagens em diferentes estados membros contribui para um debate produtivo e
            é bem-vinda. O Quadro tem como objetivo oferecer uma base comum para este
            debate, com uma linguagem e lógica comuns como ponto de partida para
            desenvolver, comparar e discutir diferentes instrumentos para o
            desenvolvimento da competência digital dos educadores, a nível nacional,
            regional ou local. Assim, o valor acrescentado do Quadro DigCompEdu é que
            disponibiliza: Q uma base segura que pode orientar políticas em diferentes
            níveis; Q um modelo que permite às partes locais interessadas avançarem
            rapidamente com o desenvolvimento de um instrumento concreto, adaptado às suas
            necessidades, sem terem que desenvolver uma base conceptual para esse fim; Q
            uma linguagem e uma lógica comuns que podem contribuir para a discussão e
            partilha de boas práticas além-fronteiras; Q um ponto de referência para os
            estados membros e outras partes interessadas validarem a completude e
            abordagem das suas próprias ferramentas e referenciais. O Quadro DigCompEdu é
            o resultado de uma série de discussões e deliberações com especialistas e
            profissionais, com base numa revisão inicial da literatura e na síntese de
            instrumentos existentes a nível local, nacional, europeu e internacional. O
            objetivo destas discussões foi chegar a um consenso sobre as principais áreas
            e elementos de competência digital dos educadores, para decidir sobre
            elementos centrais e marginais e sobre a lógica de progressão na competência
            digital em cada área. O modelo proposto poderia ter tomado uma forma e um
            enfoque diferente. Não se destina a comprometer ou questionar a validade e a
            relevância de modelos semelhantes que
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
      abreDlgVideo: ref(false)
    };
  }
});
</script>
