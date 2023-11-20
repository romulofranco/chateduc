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
            <q-scroll-area class="col q-pa-sm text-justify" style="height: 450px" :visible="false">
              <div>
                <br />
                <p>A onipresença das tecnologias digitais provocou uma transformação significativa em praticamente todos os aspectos de nossas vidas: a maneira como nos comunicamos, trabalhamos, desfrutamos do nosso tempo de lazer, organizamos nossa vida e adquirimos conhecimento e informação. Ela alterou nossa forma de pensar e agir. Crianças e jovens estão crescendo em um mundo onde as tecnologias digitais são ubíquas. Eles não conhecem e não conseguem reconhecer outra forma de viver. No entanto, isso não significa que estejam naturalmente equipados com as habilidades adequadas para usar as tecnologias digitais de maneira eficaz e consciente.</p>
                <p>
                As políticas nacionais e internacionais reconhecem a necessidade de capacitar todos os cidadãos com as habilidades necessárias para usar as tecnologias digitais de maneira crítica e criativa. O Quadro de Competência Digital para Cidadãos (DigComp) atende a essa necessidade, oferecendo uma estrutura que permite aos cidadãos entender melhor o que significa ser digitalmente competente, além de avaliar e desenvolver sua própria competência digital.
                </p>
                <p>
                Para os estudantes no ensino obrigatório, há uma variedade de iniciativas em nível, nacional e internacional que fornecem orientações e conselhos, permitindo-lhes desenvolver sua competência digital, muitas vezes com foco na cidadania digital. Na maioria dos países que tem levado em debate sobre a importância do desenvolvimento da competência digital, os currículos foram ou estão sendo desenvolvidos para garantir que a geração jovem seja capaz de participar de forma criativa, crítica e produtiva em uma sociedade digital.
                </p>
                <p>
                Como resultado, há um interesse considerável em nível internacional e nacional em capacitar os educadores com as habilidades necessárias para explorar totalmente o potencial das tecnologias digitais para melhorar o ensino e a aprendizagem, preparando adequadamente os estudantes para viver e trabalhar em uma sociedade digital. Muitos países já desenvolveram ou estão atualmente no processo de desenvolver e revisar referenciais, ferramentas de autoavaliação e programas de formação para orientar a formação de educadores e o desenvolvimento profissional contínuo nesta área.
                </p>
                <p>
                O Quadro DigCompEdu reflete sobre os instrumentos existentes de competência digital para educadores, com o objetivo de sintetizá-los em um modelo coerente que permita aos educadores de todos os níveis de educação avaliar e desenvolver abrangentemente sua competência digital pedagógica. Ele não visa comprometer os esforços nacionais, regionais e locais para captar a competência digital dos educadores; pelo contrário, a diversidade de abordagens em diferentes estados membros contribui para um debate produtivo e é bem-vinda. O Quadro busca oferecer uma base comum para esse debate, fornecendo uma linguagem e lógica comuns como ponto de partida para desenvolver, comparar e discutir diferentes instrumentos para o desenvolvimento da competência digital dos educadores em nível nacional, regional ou local.
                </p>
                <p>
                Dessa forma, o valor acrescentado do Quadro DigCompEdu reside em fornecer:
                </p>
                <p>
                <ul>
                  <li>Uma base segura que pode orientar políticas em diferentes níveis;</li>
                  <li>Um modelo que permite às partes interessadas locais avançarem rapidamente com o desenvolvimento de um instrumento concreto, adaptado às suas necessidades, sem a necessidade de desenvolver uma base conceitual para esse fim;</li>
                  <li>Uma linguagem e uma lógica comuns que podem contribuir para a discussão e compartilhamento de boas práticas além das fronteiras;</li>
                  <li>Um ponto de referência para os estados membros e outras partes interessadas validarem a completude e a abordagem de suas próprias ferramentas e referenciais.</li>
                </ul>

                </p>
                O Quadro DigCompEdu é o resultado de discussões e deliberações com especialistas e profissionais, baseado em uma revisão inicial da literatura e na síntese de instrumentos existentes em níveis local, nacional e internacional. O objetivo dessas discussões foi chegar a um consenso sobre as principais áreas e elementos de competência digital dos educadores, decidir sobre elementos centrais e marginais, e sobre a lógica de progressão na competência digital em cada área. O modelo proposto poderia ter assumido uma forma e abordagem diferentes. Não se pretende comprometer os esforços empreendidos em âmbito nacional, regional e local para avaliar a competência digital dos educadores. Pelo contrário, a diversidade de abordagens observada nos diferentes estados membros é vista como uma contribuição valiosa para um debate produtivo e é recebida com apreço. O propósito do Quadro é fornecer uma base comum para esse debate, utilizando uma linguagem e lógica compartilhadas como ponto de partida para o desenvolvimento, comparação e discussão de diversos instrumentos voltados para o aprimoramento da competência digital dos educadores, tanto em nível nacional quanto regional ou local."
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
