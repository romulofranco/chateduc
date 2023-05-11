<template>
  <q-page class="row no-wrap">
    <div class="col q-ma-md">
      <div class="full-height">
        <div>
          <p class="col-12 text-h5 text-left">Introdução ao DigCompEdu</p>
        </div>
        <q-separator color="primary" class="full-width" />
        <br />

        <q-card class="full-width full-height">
          <q-card-section dense class="text-h5 text-bold text-title text-center bg-blue-2">
            <q-item-label>
              Sobre a necessidade de formação de competências digitais nos Educadores
            </q-item-label>
          </q-card-section>
          <q-card-section class="text-justify text-body2">
            <q-separator />
            <q-scroll-area class="col q-pa-sm" style="height: 450px" :visible="false">
              <div>
                <br />
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
              </div>
            </q-scroll-area>
            <!-- </q-scroll-area> -->
          </q-card-section>
          <q-card-section>
            <q-expansion-item label="DigCompEdu Video" class="text-body text-bold bg-secondary shadow-1">
              <q-item-section>
                <q-video
                  src="https://audiovisual.ec.europa.eu/embed/index.html?ref=I-201854&lg=PT/EN&subtitles=1&cc=PT"
                  :ratio="16 / 9"
                >
                </q-video>
              </q-item-section>
            </q-expansion-item>
            <q-expansion-item label="DigCompEdu Áreas" class="text-body text-bold bg-primary shadow-1">
              <q-item-section>
                <q-img src="areas/digcompedu1.jpg" fit="contain">
                  <div class="absolute-bottom text-overline">
                    <div class="text-caption">Áreas do DigCompEdu</div>
                  </div>
                </q-img>
              </q-item-section>
            </q-expansion-item>
          </q-card-section>
        </q-card>
      </div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "PageIntro",

  setup() {
    return {};
  }
});
</script>
