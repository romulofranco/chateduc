<template>
  <q-page padding style="padding-top: 65px">
    <Features :data="features" />
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import Features from "../../components/Features";

export default defineComponent({
  name: "FeaturesPage",
  components: {
    Features
  },

  setup() {
    return {
      features: [
        {
          title: "Promover competências digitais utilizando IA",
          icon: "teachers9.png",
          text:
            "A capacitação dos educadores em competências digitais engloba a habilidade de efetivamente utilizar tecnologias educacionais, integrando-as ao ensino. Isso abrange o domínio de softwares, aplicativos e recursos online, além do desenvolvimento da capacidade de ensinar de maneira inovadora, fomentando a criatividade, colaboração e pensamento crítico dos alunos por meio das ferramentas digitais disponíveis.\n" +
            "\n" +
            "A plataforma ChatEduc se dedica a aprimorar as competências digitais dos educadores a partir de uma avaliação do perfil atual de cada professor. Por meio de mecanismos de Inteligência Artificial, a ChatEduc oferece recomendações específicas e sugestões personalizadas para áreas que precisam de desenvolvimento. Isse permite que os professores incorporem essas sugestões em suas práticas diárias de ensino, aprimorando suas habilidades digitais de forma mais direcionada e eficaz."
        },
        {
          title: "Autoavaliação e autoreflexão",
          icon: "teachers6.gif",
          text:
            "A autoavaliação e autoreflexão da ChatEduc é uma ferramenta baseada no referencial de competências digitais para educadores. Ela ajuda os professores a avaliar suas habilidades digitais, identificar pontos fortes e áreas a aprimorar. Isso permite a ChatEduc compreender o Perfil do Educador considerando os níveis de progressão em cada área, e a partir desta compreensão os educadores podem criar planos de desenvolvimento pessoal, auxiliando gestores educacionais na criação de programas de formação mais direcionados e eficazes. É uma ferramenta valiosa para promover o desenvolvimento profissional contínuo em um mundo educacional cada vez mais digital."
        },
        {
          title: "Perfil de Educador Inovador",
          icon: "teachers2.jpg",
          text:
            "Um educador inovador e preparado para a transformação digital é alguém que reconhece as suas próprias necessidades e desafios além de valorizar o equilíbrio entre o uso da tecnologia e o bem-estar seu e de seus colegas e alunos. Esse perfil busca capacitar-se com habilidades tecnológicas, apoiar sua adaptação a novas tecnologias, proporcionar recursos e ferramentas para tornar o ensino mais eficaz e envolvente. Esses educadores também incentivam a colaboração entre colegas e o compartilhamento de conhecimento, promovendo uma comunidade de aprendizado. Além disso, estão conscientes das dimensões socioemocionais dos professores, apoiando seu desenvolvimento pessoal e profissional e encorajando a busca contínua por aprimoramento, enquanto mantêm o foco no bem-estar de todos os envolvidos no processo educacional."
        }
      ]
    };
  }
});
</script>
