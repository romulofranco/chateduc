const areasList = [
  {
    id: "1",
    name: "Área 1 - Envolvimento Profissional",
    icon: "",
    cor: "area1",
    img_url: "areas/area1.jpg",
    description: "A competência digital dos educadores é expressa pela sua capacidade para utilizar tecnologias digitais, não só para melhorar o ensino,  mas também para as interações profssionais com colegas, aprendentes, encarregados de educação e outras partes interessadas.É expressa, também, pela sua capacidade para utilizá - las para o seu desenvolvimento profssional individual e para o bem coletivo, e inovação contínua na insituição e no ensino. Este é o foco da Área 1. ",
    subareas: [
      {
        id: "1.1",
        name: "Comunicação institucional",
        cor: "subarea1",
        icon: "mdi-account-group-outline",
        description: "Usar tecnologias digitais para melhorar a comunicação institucional com os alunos, encarregados de educação e terceiros. Contribuir, colaborativamente, para desenvolver e melhorar as estratégias decomunicação institucional.",
        question: "Eu uso diferentes canais digitais para me comunicar com alunos e colegas sempre que apropriado, por ex. e-mails, blogs, mensagens instantâneas, site do departamento, Apps",
        options: [
          {
            id: 1,
            label: "Eu uso canais básicos de comunicação digital, por exemplo, e-mail, mensagens instantâneas"
          },
          {
            id: 2,
            label: "Identifico diferentes soluções digitais para comunicar"
          },
          {
            id: 3,
            label: "Eu combino diferentes canais de comunicação, por exemplo, e-mail, mensagens instantâneas ou o site da organização educacional"
          },
          {
            id: 4,
            label: "Analiso e avalio os canais de comunicação para escolher aqueles que considero mais eficazes para o meu propósito de comunicação"
          },
          {
            id: 5,
            label: "Reflito, programo e adapto minhas estratégias de comunicação"
          },
          {
            id: 6,
            label: "Eu planejo e adapto com confiança minha estratégia de comunicação digital usando uma variedade de tecnologias digitais para atender minhas necessidades de comunicação no contexto de meus interlocutores"
          },
          {
            id: 0,
            label: "Não utilizo canais de comunicação digitais"
          },
        ]
      },
      {
        id: "1.2",
        name: "Ambientes de aprendizagem online",
        cor: "subarea1",
        icon: "mdi-notebook-check-outline",
        description: "Gestão de ambientes de aprendizagem online tendo em conta a gestão de dados e a ética.",
        question: "Eu uso tecnologias digitais quando necessário para trabalhar em conjunto com outros colegas dentro e fora da minha organização educacional",
        options: [
          {
            id: 1,
            label: "Meus colegas e eu compartilhamos informações em drives compartilhados ou por e-mail"
          },
          {
            id: 2,
            label: "Além de e-mail e unidades compartilhadas, troco materiais e ideias com meus colegas em ambientes colaborativos em rede (por exemplo, por meio de videoconferência ou por meio de ambientes virtuais de aprendizagem e outras ferramentas on-line)"
          },
          {
            id: 3,
            label: "Troco ideias, experiências e materiais com colegas da minha instituição e de outras (por exemplo, numa rede profissional online)"
          },
          {
            id: 4,
            label: "Experimento ferramentas inovadoras para colaboração online com colegas de dentro e fora da minha instituição"
          },
          {
            id: 5,
            label: "Eu co-crio materiais com outros professores em uma rede online"
          },
          {
            id: 6,
            label: "Coletivamente, crio, reutilizo e compartilho materiais com outros professores e alunos em uma rede online."
          },
          {
            id: 0,
            label: "Não colaboro com outros professores"
          },
        ]
      },
      {
        id: "1.3",
        name: "Colaboração profissional",
        cor: "subarea1",
        icon: "mdi-account-group",
        description: "Usar tecnologias digitais para colaborar com outros educadores, partilhar e trocar conhecimento e experiência, bem como para inovar práticas pedagógicas de forma colaborativa.",
        question: "Eu desenvolvo ativamente minha competência digital para ensinar",
        options: [
          {
            id: 1,
            label: "Aprimoro minha competência digital para ensinar por meio da reflexão e da experimentação"
          },
          {
            id: 2,
            label: "Eu uso diferentes recursos para desenvolver minha competência digital de ensino"
          },
          {
            id: 3,
            label: "Aproveito a rede de pares para me inspirar na aplicação de diferentes práticas de ensino digital"
          },
          {
            id: 4,
            label: "Eu valido minhas práticas de ensino digital discutindo com meus colegas a melhor maneira de usar as tecnologias para inovar e melhorar minha prática educacional"
          },
          {
            id: 5,
            label: "Aproveito a minha rede de pares para obter ideias e validação das minhas práticas, bem como frequentar diferentes cursos de desenvolvimento de competências digitais, online ou presenciais, para melhorar e certificar as minhas práticas de ensino"
          },
          {
            id: 6,
            label: "Eu lidero inovação de ensino usando tecnologias digitais em minha instituição"
          },
          {
            id: 0,
            label: "Não estou trabalhando no desenvolvimento da minha competência digital para o ensino"
          },
        ]
      },
      {
        id: "1.4",
        name: "Tecnologias digitais e infraestrutura escolar",
        cor: "subarea1",
        icon: "mdi-desktop-mac-dashboard",
        description: "Tecnologias digitais e infraestrutura escolar. Utilização de tecnologias digitais (dispositivos, plataformas e software) e infraestruturas (acesso à Internet, rede local) disponíveis na minha escola para melhorar a educação.",
        question: "Estou ciente e participo de oportunidades de treinamento online, por exemplo cursos online, MOOCs, webinars, conferências virtuais",
        options: [
          {
            id: 1,
            label: "Ainda não, mas estou interessado em realizar algum treinamento"
          },
          {
            id: 2,
            label: "Já participei de treinamento online uma ou duas vezes"
          },
          {
            id: 3,
            label: "Eu tentei várias oportunidades de treinamento online"
          },
          {
            id: 4,
            label: "Participo de todos os tipos de treiname}nto online que podem me ajudar a melhorar minhas habilidades de ensino"
          },
          {
            id: 5,
            label: "Eu desenvolvo e ofereço treinamento online para meus colegas em minha instituição"
          },
          {
            id: 6,
            label: "Sou profissionalmente certificado no uso de diferentes tecnologias para ensino e aprendizagem."
          },
          {
            id: 0,
            label: "Isso é algo que eu ainda não considerei"
          }

        ]
      }, {
        id: "1.5",
        name: "Prática reflexiva",
        cor: "subarea1",
        icon: "mdi-reflect-vertical",
        description: "Refletir individual e coletivamente, avaliar criticamente e desenvolver ativamente a própria prática pedagógica digital e a da comunidade educacional.",
        question: "Reflexão sobre a atividade profissional individual e coletiva com a utilização de tecnologias digitais.",
        options: [
          {
            id: 1,
            label: "Ainda não, mas estou interessado em realizar algum treinamento"
          },
          {
            id: 2,
            label: "Já participei de treinamento online uma ou duas vezes"
          },
          {
            id: 3,
            label: "Eu tentei várias oportunidades de treinamento online"
          },
          {
            id: 4,
            label: "Participo de todos os tipos de treinamento online que podem me ajudar a melhorar minhas habilidades de ensino"
          },
          {
            id: 5,
            label: "Eu desenvolvo e ofereço treinamento online para meus colegas em minha instituição"
          },
          {
            id: 6,
            label: "Sou profissionalmente certificado no uso de diferentes tecnologias para ensino e aprendizagem."
          },
          {
            id: 0,
            label: "Isso é algo que eu ainda não considerei"
          },
        ]
      }, {
        id: "1.6",
        name: "Vida digital",
        cor: "subarea1",
        icon: "mdi-account-group-outline",
        description: "Contribuir de forma positiva e ética no mundo digital, considerando práticas digitais seguras e responsáveis.",
        question: "Contribuo de forma positiva e ética no mundo digital, tendo em consideração práticas digitais seguras e responsáveis.",
        options: [
          {
            id: 1,
            label: "Estou ciente de que minha atividade digital pode ter implicações em minha própria reputação e na de minha escola (por exemplo, compartilhamento de informações privadas, uso de linguagem imprópria)"
          },
          {
            id: 2,
            label: "Reconheço possíveis riscos e ameaças à minha reputação e à da minha escola em relação à minha atividade digital (por exemplo, privacidade, dados pessoais, bullying, desinformação)."
          },
          {
            id: 3,
            label: "Eu uso medidas de mitigação para manter um perfil digital positivo (por exemplo, entender os termos de uso fornecidos, rastrear minha pegada digital, gerenciar minhas configurações de privacidade)."
          },
          {
            id: 4,
            label: "Eu analiso e avalio minha pegada digital para ajustar meu comportamento e ajudar a curar minha própria reputação online e a de minha escola (por exemplo, rastrear minha pegada digital, gerenciar minhas configurações de privacidade,bloqueando conteúdo e pessoas suspeitas, aplicando as diretrizes da escola sobre atividades digitais)."
          },
          {
            id: 5,
            label: "Apoio e aconselho colegas na criação e curadoria de perfis digitais éticos e responsáveis (por exemplo, apresentações, workshops, material de apoio, atividades)."
          },
          {
            id: 6,
            label: "Eu inicio e promovo estratégias em nível de escola que encorajam funcionários e alunos a contribuir de forma positiva, responsável e ética em um mundo digital (por exemplo, fornecer dados transparentes e gerenciamento de conteúdo procedimentos, desenvolver um código de ética de conduta)."
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          }

        ]
      }, {
        id: "1.7",
        name: "Aprendizagem profissional (através de tecnologias digitais)",
        cor: "subarea1",
        icon: "mdi-account-group-outline",
        description: "Utilizar as tecnologias digitais para a própria aprendizagem profissional.",
        question: "Como você utiliza tecnologias digitais para a própria aprendizagem profissional?",
        options: [
          {
            id: 1,
            label: "Estou ciente de que as tecnologias digitais podem apoiar e aprimorar meu aprendizado profissional (por exemplo, ferramentas e recursos digitais, ambientes e cursos de aprendizado online)."
          },
          {
            id: 2,
            label: "Eu tentei usar tecnologias digitais para meu aprendizado profissional (por exemplo, pesquisar informações online, participar de cursos online, usar aplicativos de aprendizado online, visitar bibliotecas e repositórios online)."
          },
          {
            id: 3,
            label: "Eu uso várias tecnologias digitais para meu aprendizado profissional (por exemplo, discussões em um fórum, upload de material, dar e receber feedback, apresentar)."
          },
          {
            id: 4,
            label: "Eu analiso e seleciono recursos e atividades de aprendizagem online que melhor atendem às minhas necessidades de aprendizagem (por exemplo, webinars, cursos interativos online, comunidades de aprendizagem online)."
          },
          {
            id: 5,
            label: "Eu apoio e dou conselhos aos colegas sobre o uso de tecnologias digitais para sua aprendizagem profissional (por exemplo, comunidades de aprendizagem online, repositórios online, e-portfólios)."
          },
          {
            id: 6,
            label: "Eu inicio e promovo um plano para apoiar o aprendizado profissional aprimorado digitalmente de meus colegas (por exemplo, fornecer webinars, treinamento online, comunidades online, repositório de recursos, crachás digitais)"
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },

        ]
      }, {
        id: "1.8",
        name: "Aprendizagem profissional (sobre tecnologias digitais)",
        cor: "subarea1",
        icon: "mdi-account-group-outline",
        description: "Envolver-se em atividades de aprendizagem profissional para o desenvolvimento da competência digital dos professores.",
        question: "Como é seu envolvimento em atividades de aprendizagem profissional para o desenvolvimento de competências digitais?",
        options: [

          {
            id: 1,
            label: "Estou ciente de que participar de atividades de aprendizagem profissional sobre o uso de tecnologias digitais pode desenvolver minha competência digital (por exemplo, webinars ou workshops sobre o uso de tecnologias digitais em ensinando e aprendendo)."
          },
          {
            id: 2,
            label: "Frequentei atividades de aprendizagem profissional sobre o uso de tecnologias digitais para desenvolver minha competência digital (por exemplo, microensino, oficinas sobre o uso de tecnologias digitais no ensino e aprendizagem)."
          },
          {
            id: 3,
            label: "Eu participo de várias atividades formais e informais de aprendizagem profissional sobre o uso de tecnologias digitais para desenvolver minha competência digital (por exemplo, treinamento prático sobre o uso pedagógico de tecnologias digitais tecnologias, abordagens de aprendizagem online, avaliação digital)."
          },
          {
            id: 4,
            label: "Eu analiso e seleciono atividades de aprendizagem profissional sobre o uso de tecnologias digitais com base em minhas necessidades (por exemplo, uso uma ferramenta de autorreflexão sobre minha competência digital, defino metas de aprendizagem, planejo minha aprendizagem, refletir sobre meu aprendizado)."
          },
          {
            id: 5,
            label: "Eu ofereço atividades de aprendizagem sobre o uso de tecnologias digitais e apoio os colegas no desenvolvimento de sua competência digital (por exemplo, work hops, sessões informais com colegas, microensino sobre o uso de tecnologias digitais)."
          },
          {
            id: 6,
            label: "Eu contribuo para a concepção de programas de aprendizagem profissional que visam desenvolver a competência digital dos professores (por exemplo, aprendizagem baseada em projetos com o uso de tecnologias digitais, design de aprendizagem, intercâmbio de boas práticas)."
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },
        ]
      }, {
        id: "1.9",
        name: "Pensamento computacional",
        cor: "subarea1",
        icon: "mdi-account-group-outline",
        description: "Envolver-se com conceitos e processos de pensamento computacional como parte da competência digital do professor.",
        question: "Como é seu envolvimento em atividades de aprendizagem profissional para o desenvolvimento de competências digitais?",
        options: [

          {
            id: 1,
            label: "Estou ciente dos conceitos e processos de pensamento computacional e como eles se relacionam com a competência digital (por exemplo, analisando um problema para encontrar uma solução, reconhecendo aspectos do pensamento computacional em volta de nós)."
          },
          {
            id: 2,
            label: "Tentei usar processos de pensamento computacional para explorar soluções para um problema (por exemplo, decomposição de um problema, solução por meio de uma definição de etapas, análise de um conjunto de instruções aplicadas para uma solução)."
          },
          {
            id: 3,
            label: "Eu uso várias ferramentas digitais para explorar soluções para um problema seguindo processos de pensamento computacional (por exemplo, ferramentas de programação visual, ferramentas de autoria e editores)."
          },
          {
            id: 4,
            label: "Analiso e seleciono respostas geradas por algoritmos (por exemplo, classificação dos resultados de pesquisa, anúncios, como um robô pode responder)."
          },
          {
            id: 5,
            label: "Eu conduzo atividades de pensamento computacional na minha escola para apoiar o desenvolvimento da competência digital de colegas e alunos (por exemplo, aulas de programação, competições, hackathons)."
          },
          {
            id: 6,
            label: "Eu contribuo para o design e desenvolvimento de aplicativos digitais educacionais (por exemplo, jogos, aplicativos móveis, ferramentas de avaliação, personalização de ambientes virtuais)."
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },

        ]
      },
    ]
  },
  {
    id: "2",
    name: "Área 2 - Recursos Digitais",
    icon: "",
    img_url: "areas/area2.jpg",
    cor: "area2",
    description: "Os professores têm potencialmente uma ampla gama de recursos digitais disponíveis para eles. É importante que eles identifiquem efetivamente os recursos que melhor atendem às suas necessidades, seu estilo de ensino e seus alunos. Eles também podem precisar aprender a modificar e adaptar recursos para atender às suas necessidades exatas ou criar novos. Ao mesmo tempo, eles precisam aprender a compartilhar recursos digitais com responsabilidade, proteger dados confidenciais e gerenciar conteúdo com ética e respeitar as regras de direitos autorais. As declarações de nível de proficiência são organizadas aumentando o nível de engajamento com o digital recursos.",
    subareas: [
      {
        id: "2.1",
        name: "Pesquisa e seleção",
        description: "Usando critérios de busca e seleção para identificar recursos digitais para ensino e aprendizagem.",
        question: "Eu uso diferentes canais digitais para me comunicar com alunos e colegas sempre que apropriado, por ex. e-mails, blogs, mensagens instantâneas, site do departamento, Apps",
        options: [
          {
            id: 1,
            label: "Estou ciente de que posso pesquisar recursos online (por exemplo, usando um mecanismo de pesquisa, seguindo um link, visitando um repositório de recursos)."
          },
          {
            id: 2,
            label: "Tentei pesquisar online para encontrar recursos digitais (por exemplo, seguindo um link, usando palavras-chave em um mecanismo de pesquisa, filtrando recursos em repositórios online)."
          },
          {
            id: 3,
            label: "Utilizo várias ferramentas e portais online para pesquisar um conjunto alargado e diversificado de recursos digitais que respondam a necessidades educativas (e.g. seleção de recursos anotados, motores de busca, repositórios, bibliotecas digitais, redes sociais, comunidades de aprendizagem)."
          },
          {
            id: 4,
            label: "Eu analiso e seleciono recursos digitais com base em critérios que atendem a objetivos específicos de ensino e aprendizagem (por exemplo, valor pedagógico, relevância, confiabilidade, validade, qualidade, licenciamento)."
          },
          {
            id: 5,
            label: "Eu reflito sobre meus resultados de pesquisa e reajusto meus critérios de seleção (por exemplo, levando em consideração que meus resultados de pesquisa podem ser afetados por minha localização geográfica ou pesquisas e preferências anteriores)."
          },
          {
            id: 6,
            label: "Proponho estratégias e ferramentas para ajudar os colegas a pesquisar e selecionar recursos digitais de diversas fontes de acordo com os requisitos curriculares e objetivos de aprendizagem (por exemplo, conjuntos de palavras-chave, listas de verificação de seleção, rubricas de avaliação de recursos digitais, referências a portais de recursos)."
          },
          {
            id: 0,
            label: "Não utilizo canais de comunicação digitais"
          }
        ]
      },
      {
        id: "2.2",
        name: "Criação",
        description: "Criação de recursos educativos digitais que apoiem e melhorem os objetivos de ensino e aprendizagem.",
        question: "Criar recursos digitais que apoiem e aprimorem os objetivos de ensino e aprendizagem.",
        options: [
          {
            id: 1,
            label: "Estou ciente de que posso criar recursos em formato digital (por exemplo, texto digital, imagens, fotos, áudio, vídeo)."
          },
          {
            id: 2,
            label: "Eu tentei usar ferramentas digitais para criar recursos (por exemplo, editores de texto, ferramentas de edição de áudio e visual, ferramentas de autoria multimídia)."
          },
          {
            id: 3,
            label: "Eu uso várias ferramentas digitais de acordo com suas características para criar recursos digitais para atender às necessidades dos alunos (por exemplo, texto interativo, apresentações multimídia, questionários, jogos, atividades online e aulas)."
          },
          {
            id: 4,
            label: "Eu aplico princípios e processos de design para criar recursos digitais para atender aos objetivos de ensino e aprendizagem (por exemplo, identificar uma necessidade, projetar, desenvolver, implementar, avaliar, ajustar, compartilhar)."
          },
          {
            id: 5,
            label: "Compartilho os recursos digitais que crio e os reflito e reajusto de acordo com o feedback que recebo (por exemplo, incorporando abordagens pedagógicas centradas no aluno aprimoradas por tecnologias digitais possibilidades)."
          },
          {
            id: 6,
            label: "Eu inicio e contribuo para a cocriação de recursos educacionais digitais com pessoas e organizações fora da minha escola (por exemplo, pesquisadores, editores de conteúdo educacional, empresas de tecnologia educacional)"
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },
        ]
      },
      {
        id: "2.3",
        name: "Modificação",
        description: "Modificação de recursos digitais existentes para apoiar e melhorar os objetivos de ensino e aprendizagem, respeitando as regras de direitos de autor e de licenciamento.",
        question: "Modificar os recursos digitais existentes para apoiar e aprimorar os objetivos de ensino e aprendizagem, respeitando os direitos autorais e as regras de licenciamento.",
        options: [
          {
            id: 1,
            label: "Estou ciente de que, ao modificar recursos digitais existentes, preciso respeitar os direitos autorais e regras de licenciamento (por exemplo, adicionar uma imagem ao texto, adicionar novo conteúdo, editar ou excluir partes, adicionar hiperlinks)."
          },
          {
            id: 2,
            label: "Eu tentei maneiras de modificar os recursos digitais existentes, respeitando seus direitos autorais e atributos de licença (por exemplo, editar uma apresentação, modificar uma imagem, alterar o formato de um vídeo, editar questionários, adaptar configurações gerais)."
          },
          {
            id: 3,
            label: "Eu uso várias ferramentas digitais com base em seus recursos para modificar e redefinir os recursos digitais para atender às necessidades educacionais (por exemplo, personalizar o conteúdo de uma aula online, explorar os recursos de um ambiente virtual ambiente, use editores de eBook)."
          },
          {
            id: 4,
            label: "Eu seleciono recursos digitais existentes, levando em consideração direitos autorais e licenças de distribuição, para modificá-los e adaptá-los para atender aos objetivos de ensino e aprendizagem (por exemplo, recursos educacionais abertos, conteúdo sob Creative Common License, conteúdo livre de direitos autorais, recursos editáveis)."
          },
          {
            id: 5,
            label: "Eu reflito e redesenho os recursos digitais existentes para integrá-los em atividades interativas centradas no aluno (por exemplo, adaptação de recursos digitais e tarefas aprimoradas digitalmente em um curso de aprendizado online, avaliação online, projeto colaborativo online, um wiki, um blog, um espaço virtual de aprendizagem)."
          },
          {
            id: 6,
            label: "Eu inicio e contribuo com a orientação escolar para professores e alunos sobre como modificar os recursos digitais existentes de acordo com os requisitos curriculares e os objetivos de ensino e aprendizagem (por exemplo, estratégias para revisar, melhorar e redirecionar os recursos digitais da escola, licenças de direitos autorais a serem usadas, acordos com partes interessadas externas e editores)."
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },
        ]

      },
      {
        id: "2.4",
        name: "Gestão e proteção",
        description: "Organização de conteúdos digitais, permitindo um acesso fácil e seguro aos alunos, encarregados de educação e professores, protegendo simultaneamente os dados pessoais e sensíveis.",
        question: "Organizar o conteúdo digital, permitindo acesso fácil e seguro para alunos, pais e professores, protegendo dados confidenciais e pessoais.",
        options: [
          {
            id: 1,
            label: "Estou ciente de que as tecnologias digitais podem me ajudar a armazenar, organizar e fornecer acesso seguro a conteúdo digital (por exemplo, espaços de armazenamento local e online, proteção por senha, classificação de conteúdo)."
          },
          {
            id: 2,
            label: "Eu tentei maneiras de armazenar, gerenciar e acessar conteúdo digital em e de espaços de armazenamento locais e/ou online (por exemplo, discos rígidos, drives externos, nuvem, serviços online)."
          },
          {
            id: 3,
            label: "Eu uso várias ferramentas digitais para armazenar, organizar e facilitar o acesso a conteúdos digitais (por exemplo, estruturas em árvore, uso de metadados/tags)."
          },
          {
            id: 4,
            label: "Eu defino e aplico medidas de proteção e segurança para o armazenamento, gerenciamento e acesso de conteúdo digital (por exemplo, aplicação de senhas fortes a conteúdo sensível, atribuição de direitos de limitação de acesso, uso de protocolos de criptografia, backups regulares, armazenamento e serviços online selecionados com base em seus política de dados, termos de uso, segurança e proteção)."
          },
          {
            id: 5,
            label: "Eu desenho e desenvolvo uma estratégia para garantir gerenciamento fácil, equitativo e seguro e acesso a conteúdo digital para meus alunos e colegas (por exemplo, classificação de conteúdo, direitos de limitação de acesso para diferentes usuários-alvo, protocolos de criptografia, backups regulares)."
          },
          {
            id: 6,
            label: "Eu inicio e promovo um espaço digital comum ao nível da escola, que facilite o armazenamento seguro, a gestão e o acesso a conteúdos digitais para diferentes utilizadores-alvo (por exemplo, alunos, pais, professores, outros funcionários da escola)."
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },

        ]
      }, {
        id: "2.5",
        name: "Compartilhamento de conteúdos",
        description: "Partilha de conteúdos digitais cumprindo as regras de direitos de autor e de propriedade intelectual.",
        question: "Compartilhamento de conteúdo digital com relação à propriedade intelectual e regras de direitos autorais",
        options: [
          {
            id: 1,
            label: "Estou ciente de que as regras de direitos autorais se aplicam aos recursos digitais que uso para fins educacionais (por exemplo, imagens, texto, áudio, vídeo)."
          },
          {
            id: 2,
            label: "Eu tentei maneiras de atribuir ao criador os recursos que uso (por exemplo, citando o nome do autor, link para a fonte original)."
          },
          {
            id: 3,
            label: "Compartilho recursos digitais atribuindo os criadores originais e escolhendo os canais mais adequados para uso privado, limitado ou público (ex. metadados)."
          },
          {
            id: 4,
            label: "Eu seleciono e aplico licenças de direitos autorais ao compartilhar recursos digitais que crio, apoiando recursos educacionais abertos (por exemplo, licença Creative Commons)."
          },
          {
            id: 5,
            label: "Eu projeto e desenvolvo maneiras para que meus colegas e eu compartilhemos, organizemos e reutilizemos recursos digitais para garantir acesso fácil e igualitário (por exemplo, desenvolvendo uma ontologia para gerenciar recursos, especificando formas de curadoria de conteúdo, contextualizando o conteúdo curado)."
          },
          {
            id: 6,
            label: "Eu inicio e promovo um espaço online para compartilhar recursos educacionais digitais com a comunidade escolar (por exemplo, aplicando palavras-chave /tags/metadados, permitindo que outros comentem, avaliem, modifiquem ou cocriar)."
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },
        ]
      }, {
        id: "2.5",
        name: "Compartilhamento de conteúdos",
        description: "Partilha de conteúdos digitais cumprindo as regras de direitos de autor e de propriedade intelectual.",
        question: "Compartilhamento de conteúdo digital com relação à propriedade intelectual e regras de direitos autorais",
        options: [
          {
            id: 1,
            label: "Estou ciente de que as regras de direitos autorais se aplicam aos recursos digitais que uso para fins educacionais (por exemplo, imagens, texto, áudio, vídeo)."
          },
          {
            id: 2,
            label: "Eu tentei maneiras de atribuir ao criador os recursos que uso (por exemplo, citando o nome do autor, link para a fonte original)."
          },
          {
            id: 3,
            label: "Compartilho recursos digitais atribuindo os criadores originais e escolhendo os canais mais adequados para uso privado, limitado ou público (ex. metadados)."
          },
          {
            id: 4,
            label: "Eu seleciono e aplico licenças de direitos autorais ao compartilhar recursos digitais que crio, apoiando recursos educacionais abertos (por exemplo, licença Creative Commons)."
          },
          {
            id: 5,
            label: "Eu projeto e desenvolvo maneiras para que meus colegas e eu compartilhemos, organizemos e reutilizemos recursos digitais para garantir acesso fácil e igualitário (por exemplo, desenvolvendo uma ontologia para gerenciar recursos, especificando formas de curadoria de conteúdo, contextualizando o conteúdo curado)."
          },
          {
            id: 6,
            label: "Eu inicio e promovo um espaço online para compartilhar recursos educacionais digitais com a comunidade escolar (por exemplo, aplicando palavras-chave /tags/metadados, permitindo que outros comentem, avaliem, modifiquem ou cocriar)."
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },
        ]
      }
    ]
  },
  {
    id: "3",
    name: "Área 3 - Ensino e aprendizagem",
    icon: "",
    img_url: "areas/area3.jpg",
    cor: "area3",
    description: "As tecnologias digitais podem aprimorar e melhorar a prática de ensino e aprendizagem de várias maneiras. A habilidade chave dos professores é projetar a aprendizagem com o uso de tecnologias digitais para ajudar os alunos a engajar-se ativamente em autênticas experiências de aprendizagem. A prática avançada envolve uma mudança de prática liderada pelo professor para atividades centradas no aluno. As declarações de nível de proficiência são organizadas aumentando o nível de engajamento com as tecnologias digitais no ensino e a aprendizagem com foco no envolvimento ativo dos alunos no uso para seu aprendizado.",
    subareas: [
      {
        id: "3.1",
        name: "Ensino",
        description: "Conceção, desenvolvimento e implementação da aprendizagem com a utilização de tecnologias digitais para melhorar os resultados da aprendizagem.",
        question: "Projetar, desenvolver e implementar a aprendizagem com o uso de tecnologias digitais para melhorar os resultados da aprendizagem.",
        options: [
          {
            id: 1,
            label: "Estou ciente de que as tecnologias digitais podem apoiar e aprimorar o ensino e a aprendizagem (por exemplo, programas e suítes de software, aplicativos e ferramentas móveis, recursos on-line e baseados em nuvem)."
          },
          {
            id: 2,
            label: "Eu tentei usar tecnologias digitais para apoiar e/ou aprimorar minha prática de ensino (por exemplo, programas e suítes de software, aplicativos e ferramentas móveis, recursos on-line e baseados em nuvem, recursos interativos quadros brancos)."
          },
          {
            id: 3,
            label: "Eu uso várias tecnologias digitais que podem apoiar abordagens pedagógicas inovadoras, aumentando o envolvimento ativo de meus alunos em sua aprendizagem (por exemplo, aprendizagem baseada em investigação, aprendizagem baseada em projetos, aprendizagem baseada em jogos, avaliação de pares e autoavaliação, e-portfólios, treinadores de alunos)."
          },
          {
            id: 4,
            label: "Eu seleciono e uso tecnologias digitais em meus projetos de aprendizagem, de forma a atender aos objetivos de ensino e aprendizagem (por exemplo, simulações, jogos digitais, ferramentas interativas online, ambientes colaborativos)."
          },
          {
            id: 5,
            label: "Junto com meus alunos, reflito e (re)projeto o uso de tecnologias digitais para aprimorar práticas de ensino e abordagens inovadoras de aprendizado (por exemplo, alunos como treinadores, uso de tecnologias emergentes, modelagem e aconselhamento, estudo de aula)."
          },
          {
            id: 6,
            label: "Eu inicio e promovo a concepção e partilha de práticas inovadoras de ensino e aprendizagem com tecnologias digitais na minha escola e na sua comunidade em geral (por exemplo, workshops online, aprendizagem de design com o uso de tecnologias digitais, microensino e coensino, discussões reflexivas sobre a efetividade do uso de tecnologias digitais)."
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },
        ]

      },
      {
        id: "3.2",
        name: "Orientação",
        description: "Utilização de tecnologias digitais de modo a proporcionar feedback e oportunidades de reflexão que resultem na adaptação das práticas de ensino e aprendizagem, tanto para os professores como para os alunos.",
        question: "Usar tecnologias digitais para fornecer feedback e oportunidades de reflexão, levando a reajustamento das práticas de ensino e aprendizagem para professores e alunos.",
        options: [
          {
            id:1,
            label: "Estou ciente de que as tecnologias digitais podem ser usadas para fornecer e receber feedback e oportunidades para refletir sobre as práticas de ensino e aprendizagem (por exemplo, e-mail, bate-papo, resposta em vídeo)."
          },
          {
            id:2,
            label: "Eu tentei usar tecnologias digitais para fornecer feedback e suporte aos alunos (por exemplo, tutorias online, bate-papo, feedback automático/imediato, links para perguntas e respostas online)."
          },
          {
            id:3,
            label: "Eu uso várias tecnologias digitais para fornecer aos alunos feedback e oportunidades de reflexão na sua aprendizagem, em tempo real e/ou de forma assíncrona (por exemplo, chat, fóruns de discussão, respostas em vídeo, enquetes/votações em sala de aula)."
          },
          {
            id:4,
            label: "Eu seleciono e utilizo tecnologias digitais para oferecer oportunidades para os alunos se envolverem em autoavaliação e avaliação de pares e o design de sua aprendizagem (por exemplo, documentos compartilhados on-line, gravações de atividades de aprendizagem, reflexão em andaimes)."
          },
          {
            id:5,
            label: "Junto com meus alunos, reflito e (re)desenvolvo o ensino e a aprendizagem, com base em evidências capturados por meio de tecnologias digitais (por exemplo, resultados de pesquisas digitais, gravações de aprendizado das atividades, análise de aprendizagem)."
          },
          {
            id:6,
            label: "Eu inicio e promovo maneiras pelas quais as tecnologias digitais podem ser usadas para apoiar o feedback e reflexão para professores e alunos na minha escola e fora dela (por exemplo, fóruns de discussão, bate-papo, documentos, Perguntas Frequentes)."
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },
        ]
      },
      {
        id: "3.3",
        name: "Aprendizagem colaborativa",
        description: "Utilização de tecnologias digitais de modo a promover e melhorar a colaboração dos alunos na aprendizagem coletiva e individual.",
        question: "Usar tecnologias digitais para promover e aprimorar a colaboração do aluno para o desenvolvimento individual e coletivo do aprendizado.",
        options: [
          {
            id:1,
            label: "Estou ciente de que as tecnologias digitais podem ser usadas para promover e aprimorar a colaboração do aluno para a aprendizagem individual e coletiva (por exemplo, colaboração on-line, compartilhamento de recursos de aprendizagem)."
          },
          {
            id:2,
            label: "Eu tentei usar tecnologias digitais para apoiar e melhorar as atividades colaborativas dos alunos (por exemplo, documentos compartilhados, contribuição para fóruns, wikis)."
          },
          {
            id:3,
            label: "Eu uso várias tecnologias digitais para apoiar e melhorar a aprendizagem colaborativa dos alunos, em configurações presenciais ou online (por exemplo, documentos compartilhados, fóruns, wikis, blogs, co-autoria)."
          },
          {
            id:4,
            label: "Eu seleciono e utilizo tecnologias digitais em meus projetos de aprendizagem com base em suas características, de modo a melhorar e apoiar a aprendizagem colaborativa dos meus alunos, em ambientes presenciais ou online (por exemplo co-design, co-criação, avaliação de pares e reflexão em grupo, construção de projetos, compartilhamento)."
          },
          {
            id:5,
            label: "Junto com meus alunos, reflito e (re)desenvolvo o uso de tecnologias digitais para aprendizagem colaborativa (por exemplo, editar e desenvolver conteúdo, co-criar um artefato, participar de projetos colaborativos, trocas virtuais, uso de ferramentas digitais para gerenciamento de tarefas e tempo, comunicação e compartilhamento)."
          },
          {
            id:6,
            label: "Eu inicio e promovo o uso de tecnologias digitais na minha escola e na comunidade em geral, proporcionando oportunidades de colaboração para apoiar a aprendizagem individual e coletiva, dentro e fora do escola (por exemplo, usando ambientes e ferramentas on-line síncronas e assíncronas, encontros de ensino, projetos, co-organização de eventos de aprendizagem online, co-design e co-criação de material de aprendizagem)."
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },
        ]
      },
      {
        id: "3.4",
        name: "Aprendizagem autorregulada",
        description: "Utilização de tecnologias digitais para melhorar os processos de aprendizagem autorregulada dos alunos, promovendo a aprendizagem autónoma e ativa e tornando os alunos mais responsáveis pela sua própria aprendizagem, alterando assim do foco do ensino para a aprendizagem.",
        question: "Utilizar as tecnologias digitais para potencializar os processos de aprendizagem autorregulada dos alunos, fomentando uma aprendizagem ativa e autónoma tornando os alunos mais responsáveis pela sua própria aprendizagem r também de seu foco.",
        options: [
          {
            id:1,
            label: "Estou ciente de que as tecnologias digitais podem ser usadas para promover a aprendizagem ativa e autônoma (por exemplo, planejamento, estabelecimento de metas, registro do progresso)."
          },
          {
            id:2,
            label: "Eu tentei usar tecnologias digitais para apoiar os alunos no planejamento de sua própria aprendizagem (por exemplo, planejamento e programação usando calendários digitais, estabelecimento de metas usando diários digitais, registro do progresso)."
          },
          {
            id:3,
            label: "Utilizo várias tecnologias digitais para apoiar os alunos a planejar e regular a sua própria aprendizagem (por exmplo, ambientes de aprendizagem online, repositórios de recursos online, ferramentas e espaços colaborativos, aprendizagem periódicas e portfólios)."
          },
          {
            id:4,
            label: "Eu seleciono e uso tecnologias digitais em meus projetos de aprendizagem com base em suas características, de modo a facilitar as habilidades de aprendizagem autorreguladas e a autonomia do aluno (por exemplo, tomar iniciativas em relação à sua própria aprendizagem, ser criativo e receptivo a novas situações de aprendizagem, envolver-se em auto-reflexões para planejar e orientar seu progresso)."
          },
          {
            id:5,
            label: "Em conjunto com os meus alunos, reflito e apoio-os a (re)desenhar a sua aprendizagem, através e na utilização de tecnologias digitais, promovendo a sua aprendizagem auto-regulada e a autonomia do aluno (por exemplo identificar suas necessidades, definir suas metas de aprendizagem, descrever sua estratégia para atingir essas metas, implementar suas tarefas de aprendizagem, reunir evidências de sua aprendizagem, refletir sobre ela e compartilhar os seus resultados)."
          },
          {
            id:6,
            label: "Eu inicio e promovo estratégias e práticas sobre como as tecnologias digitais podem apoiar a aprendizagem auto-regulada na minha escola e na comunidade em geral (por exemplo, makerspaces, espaços de aprendizagem com tecnologias digitais para acomodar atividades práticas, treinamento de alunos)."
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },
        ]
      }, {
        id: "3.5",
        name: "Tecnologias emergentes",
        description: "Utilização de tecnologias emergentes de forma ética para explorar novas experiências e conteúdos de aprendizagem.",
        question: "Usar tecnologias emergentes de maneira ética para explorar novas experiências e conteúdos de aprendizagem",
        option: [
          {
            id:1,
            label: "Estou ciente das tecnologias emergentes que estão sendo usadas em ambientes educacionais (por exemplo, simulações, robótica, realidade virtual, Inteligência Artificial (IA))."
          },
          {
            id:2,
            label: "Eu tentei tecnologias emergentes para ver sua relevância para o meu ensino e meus alunos (por exemplo, realidade virtual e aumentada, robôs, IA)."
          },
          {
            id:3,
            label: "Eu uso várias tecnologias emergentes para fornecer aos meus alunos novas experiências de aprendizado e novas aprendizagens, fomentando o desenvolvimento de competências transversais (experiências de aprendizagem envolvendo por exemplo. simulação/modelagem, jogos, pensamento computacional, pensamento criativo e inovador, orientado a dados tomando uma decisão)."
          },
          {
            id:4,
            label: "Eu seleciono e uso tecnologias emergentes em meus projetos de aprendizagem para envolver meus alunos em novas oportunidades de aprendizagem, tendo em conta as implicações éticas (por exemplo, aprendizagem imersiva, pensamento computacional, abordar o aprendizado do aluno ao interagir com a IA)."
          },
          {
            id:5,
            label: "Juntamente com os meus alunos, reflito e (re)desenvolvo o ensino e a aprendizagem, envolvendo-os em co-design e co-criação de aplicativos usando tecnologias emergentes e abordando questões éticas (por exemplo, projetar cenários de realidade aumentada e expedições 3D, programar robôs, abordando dataficação e gerenciamento da IA na tomada de decisão)."
          },
          {
            id:6,
            label: "Eu inicio e promovo estratégias e práticas dentro da minha escola e sua comunidade mais ampla que podem apoiar colegas e alunos no uso de tecnologias emergentes para fornecer ensino inovador e experiências de aprendizagem e conteúdo, abordando as implicações éticas (por exemplo, personalizar mundos virtuais para atividades de aprendizagem, promovendo o aluno na tomada de decisão baseada em dados, colaboração com empresas de tecnologia)."
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },
        ]
      },
    ]
  },
  {
    id: "4",
    name: "Área 4 - Avaliação",
    icon: "",
    img_url: "areas/area4.jpg",
    cor: "area4",
    description: "As tecnologias digitais podem melhorar as práticas de avaliação existentes e facilitar novos e inovadores uns. Os professores podem usar tecnologias digitais para coletar dados para melhor apoiar e avaliar os alunos, enquanto permitindo-lhes refletir e adaptar a sua prática pedagógica. As declarações de nível de proficiência são organizadas aumentando o nível de engajamento com o digital avaliação e envolvimento dos alunos nas práticas de avaliação.",
    subareas: [
      {
        id: "4.1",
        name: "Estratégias de avaliação",
        description: "Utilização de tecnologias digitais para apoiar a avaliação sumativa e formativa da aprendizagem.",
        question: "Usar tecnologias digitais para apoiar a avaliação formativa e somativa da aprendizagem.",
        option: [
          {
            id:1,
            label: "Estou ciente de que as tecnologias digitais podem apoiar tanto a avaliação formativa quanto a somativa (por exemplo, questionários digitais, enquetes online)."
          },
          {
            id:2,
            label: "Eu tentei usar tecnologias digitais para apoiar a avaliação formativa e somativa (por exemplo, questionários online, jogos, formulários, aplicativos móveis)."
          },
          {
            id:3,
            label: "Eu uso várias tecnologias digitais para apoiar a avaliação formativa e somativa (por exemplo, criar um teste digital, usar plataformas de avaliação que ofereçam feedback oportuno aos alunos)."
          },
          {
            id:4,
            label: "Eu seleciono tecnologias digitais para apoiar aspectos específicos na avaliação “de”, “para” e “como” aprendizagem e capturar melhor a natureza do resultado de aprendizagem a ser avaliado (por exemplo, rubricas de auto-reflexão, tarefas que oferecem feedback oportuno aos alunos, documentos compartilhados que apóiam revisão e comentário)."
          },
          {
            id:5,
            label: "Eu reflito e envolvo meus alunos na elaboração de avaliações com suporte digital, selecionando tecnologias digitais que melhor apóiam o objetivo e o conteúdo da avaliação (por exemplo, decidir critérios e modalidade, co-criação de rubricas, design do formato de autoavaliação e avaliação de pares, formativa ou ferramentas de andaimes de avaliação somativa)."
          },
          {
            id:6,
            label: "Proponho e promovo estratégias e tecnologias digitais dentro da minha escola e no seu meio comunidade para apoiar a avaliação “de”, “para” e “como” aprendizagem (por exemplo, autoavaliação e avaliação de pares, promoção de competências transversais, avaliação baseada no trabalho, e portfólios)."
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },
        ]
      }, {
        id: "4.2",
        name: "Análise de evidências",
        description: "Utilização de tecnologias digitais para recolher e analisar evidências sobre os processos e resultados da aprendizagem dos alunos.",
        question: "Usando tecnologias digitais para coletar e analisar evidências sobre os processos de aprendizagem dos alunos e resultados.",
        option: [
          {
            id:1,
            label: "Estou ciente de que as tecnologias digitais podem capturar os processos e resultados de aprendizagem dos alunos (por exemplo, questionários digitais, enquetes online, formulários, plataformas de avaliação)."
          },
          {
            id:2,
            label: "Eu tentei usar tecnologias digitais para capturar evidências sobre as experiências individuais e atividades de aprendizagem em grupo (por exemplo, questionários digitais, enquetes online, pesquisas)."
          },
          {
            id:3,
            label: "Eu uso várias tecnologias digitais para coletar e analisar evidências individuais e resultados de aprendizagem em grupo e processos de aprendizagem (por exemplo, enquetes online, formulários, pesquisas, análise de aprendizagem, planilhas)."
          },
          {
            id:4,
            label: "Eu seleciono tecnologias digitais que facilitam a apresentação e análise de dados de aprendizagem para apoiar minhas reflexões sobre minha prática de ensino e sobre a aprendizagem dos meus alunos (por exemplo, gravar e representar dados visualmente, gráficos gerados automaticamente, ferramentas de mapeamento mental, painéis digitais)."
          },
          {
            id:5,
            label: "Eu reflito e envolvo meus alunos na captura e análise de seus dados de aprendizagem, que podem ser usado para planejar seu aprendizado futuro (por exemplo, registros de aprendizado reflexivo, software de definição de metas pessoais)."
          },
          {
            id:6,
            label: "Eu inicio e promovo estratégias e práticas para ajudar minha escola e sua comunidade em geral a usar tecnologias digitais para evidenciar o aprendizado e usar dados de avaliação para apoiar a tomada de decisões para intervenções direcionadas (por exemplo, decisões pedagógicas, decisões administrativas, como frequência e dados sobre a aprendizagem dos alunos, como notas)"
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },
        ]
      }, {
        id: "4.3",
        name: "Feedback e planificação",
        description: "Utilização de tecnologias digitais para dar feedback aos alunos, facilitando a planificação de ações adicionais.",
        question: "Usar tecnologias digitais para fornecer feedback aos alunos, facilitando o planejamento de ações futuras",
        option: [
          {
            id:1,
            label: "Estou ciente de que as tecnologias digitais podem ser usadas para fornecer feedback aos alunos, incluindo feedback automatizado (por exemplo, blogs, enquetes online, formulários online, aplicativos que usam Inteligência Artificial (IA))."
          },
          {
            id:2,
            label: "Eu tentei usar tecnologias digitais que suportam a integração de feedback e reflexão sobre aprendizagem dos alunos (por exemplo, blogs, wikis, feedback baseado em vídeo, anotação digital em tarefas)."
          },
          {
            id:3,
            label: "Eu uso várias tecnologias digitais para fornecer feedback oportuno para os alunos, (por exemplo, aplicativos de software com feedback automatizado, testes online com pontuação automatizada, enquetes online com representações visuais automatizadas dos resultados)."
          },
          {
            id:4,
            label: "Eu seleciono tecnologias digitais que podem ajudar a fornecer, receber e analisar feedback para informar o ensino e aprimorar o design do aprendizado de forma contínua (por exemplo, pesquisas on-line , painéis para gerenciamento de notas e feedback, portfólios, feedback dependente do contexto)."
          },
          {
            id:5,
            label: "Eu reflito e envolvo meus alunos no uso de tecnologias digitais para coleta e análise de feedback para planejar ações adicionais (por exemplo, documentos compartilhados, blogs, ferramentas de mapeamento mental, diários de aprendizagem e portfólios)."
          },
          {
            id:6,
            label: "Eu inicio e promovo uma estratégia dentro da minha escola e sua comunidade mais ampla sobre o uso de digital tecnologias que facilitam dar, receber e analisar feedback, para apoiar o planejamento para futuras ações (por exemplo, portfólios, feedback dependente do contexto, narrativa digital)."
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },
        ]
      },
    ]
  },
  {
    id: "5",
    name: "Área 5 - Capacitação dos aprendentes",
    icon: "",
    img_url: "areas/area5.jpg",
    cor: "area5",
    description: "O uso de tecnologias digitais pode ajudar os professores a criar experiências de aprendizagem inovadoras, resultando em alunos se tornando mais ativamente engajados. As tecnologias digitais podem ser usadas pelos professores para personalizar a aprendizagem e adaptá-la de acordo com os níveis, interesses e necessidades individuais dos alunos. No entanto, é importante evitar a amplificação da desigualdade, por exemplo, em termos de acesso do aluno à tecnologia ou falta de habilidades. A acessibilidade para todos os alunos é crucial, incluindo aqueles com necessidades educacionais especiais. As declarações de nível de proficiência são organizadas aumentando o foco na aprendizagem individual dos alunos que precisam.",
    subareas: [
      {
        id: "5.1",
        name: "Acessibilidade e inclusão",
        description: "Garantia de acesso a recursos digitais e atividades de aprendizagem para todos os alunos, tendo em consideração eventuais restrições contextuais, físicas ou cognitivas na sua utilização.",
        question: "Garantir o acesso a recursos digitais e atividades de aprendizagem para todos os alunos, levando em consideração quaisquer restrições contextuais, físicas ou cognitivas ao seu uso.",
        option: [
          {
            id:1,
            label: "Estou ciente das possíveis limitações e barreiras que os alunos podem encontrar em relação as tecnologias digitais (por exemplo, acesso limitado a dispositivos digitais e ligação à Internet, dificuldades de aprendizagem)."
          },
          {
            id:2,
            label: "Experimentei tecnologias digitais que podem ser adaptadas ao contexto e às necessidades dos alunos (por exemplo, dispositivos, acesso a infraestrutura, contexto familiar, necessidades especiais dos alunos)."
          },
          {
            id:3,
            label: "Eu uso várias tecnologias digitais para promover uma educação equitativa e inclusiva para todos os meus alunos (por exemplo, tecnologias adaptativas e assistivas como leitores de tela, tipos alternativos de teclados, construção de ferramentas de acessibilidade)."
          },
          {
            id:4,
            label: "Eu seleciono e utilizo tecnologias digitais em meu design de aprendizagem, para desenvolver uma aprendizagem inclusiva e recursos acessíveis de acordo com as necessidades e capacidades dos meus alunos (por exemplo, integrando diferentes ferramentas, utilizando layout, estrutura e linguagem acessíveis)."
          },
          {
            id:5,
            label: "Reflito e redesenho o ensino e a aprendizagem com o uso de tecnologias digitais para garantir abordagens acessíveis e inclusivas que atendem às necessidades e habilidades de todos os meus alunos, incluindo aqueles com necessidades especiais de aprendizagem (por exemplo, fornecendo apresentações multimodais de informações, ajustando recursos de acessibilidade como tamanho e layout da fonte, desenvolvendo as habilidades digitais dos alunos)."
          },
          {
            id:6,
            label: "Eu inicio e promovo estratégias para igualdade de acesso e inclusão à educação por meio de tecnologias digitais em minha escola e em sua comunidade em geral (por exemplo, laboratórios de tecnologia digital à tarde para alunos e pais, colaborações com a indústria para infraestrutura disponível)."
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },
        ]
      }, {
        id: "5.2",
        name: "Diferenciação e personalização",
        description: "Utilização de tecnologias digitais para dar resposta a diferentes necessidades e capacidades de aprendizagem, permitindo aos alunos evoluir a diferentes níveis e ritmos, bem como seguir percursos e objetivos individuais de aprendizagem.",
        question: "Usar tecnologias digitais para atender às diversas necessidades e capacidades de aprendizagem, permitindo que os alunos avancem em diferentes níveis e velocidades e siga caminhos e objetivos de aprendizagem individuais.",
        option: [
          {
            id:1,
            label: "Estou ciente de que as tecnologias digitais podem ser usadas para diferenciar e personalizar a aprendizagem (por exemplo, adaptar a instrução para atender às necessidades de diferentes grupos de alunos, fornecendo apoio individual para alunos)."
          },
          {
            id:2,
            label: "Já experimentei tecnologias digitais que permitem a diferenciação e personalização da aprendizagem (por exemplo, questionários online com feedback personalizado, jogos educativos com níveis de dificuldade, aprendizagem online de ambientes com material adaptativo)."
          },
          {
            id:3,
            label: "Eu uso várias tecnologias digitais no ensino e aprendizagem para acomodar a aprendizagem individual (por exemplo, criar listas de reprodução para atividades de aprendizagem autoguiadas, atividades práticas diferenciadas, feedback individual automatizado)."
          },
          {
            id:4,
            label: "Eu seleciono e utilizo tecnologias digitais em meus projetos de aprendizagem com base em suas características, para desenvolver ambientes de aprendizagem personalizados (por exemplo, ensino entre pares, rastreamento e gerenciamento dinâmico do necessidades de aprendizagem de todos os alunos)."
          },
          {
            id:5,
            label: "Eu reflito e (re)desenvolvo meu ensino para envolver meus alunos na concepção de sua própria aprendizagem, percursos que utilizam tecnologias digitais mais adequadas às suas necessidades de aprendizagem (por exemplo, os alunos utilizam ferramentas online para definir suas metas de aprendizagem, monitorar seu progresso e refletir sobre a aprendizagem e avaliações somativas demonstrando seu nível de domínio)."
          },
          {
            id:6,
            label: "Eu inicio e promovo o uso de tecnologias digitais de forma que permitam diferenciar e personalizar as experiências de aprendizagem dos alunos em minha escola e em sua comunidade mais ampla (por exemplo, grupo de interesse para professores compartilharem boas práticas, plataforma online com recursos e aulas ao vivo)."
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },
        ]
      }, {
        id: "5.3",
        name: "Envolvimento ativo dos aprendentes",
        description: "Utilização de tecnologias digitais para promover o envolvimento ativo e criativo dos alunos na respetiva aprendizagem.",
        question: "Usar tecnologias digitais para promover o envolvimento ativo e criativo dos alunos em seu aprendizado.",
        option: [
          {
            id:1,
            label: "Estou ciente de que posso usar tecnologias digitais para envolver os alunos na aprendizagem ativa (por exemplo, jogos, atividades interativas, mundos virtuais, simulações)."
          },
          {
            id:2,
            label: "Eu tentei usar tecnologias digitais para envolver os alunos na aprendizagem ativa (por exemplo, uso de blogs e wikis, portfólios, realidade virtual aumentada)."
          },
          {
            id:3,
            label: "Eu uso várias tecnologias digitais para envolver os alunos na aprendizagem ativa (por exemplo, alunos explorando objetos virtuais, revisão por pares, discussões de quebra-cabeças, debates online)."
          },
          {
            id:4,
            label: "Eu seleciono e utilizo tecnologias digitais em meus projetos de aprendizagem para promover o envolvimento ativo dos alunos. Envolvendo a aprendizagem individual e colaborativa (por exemplo, escrita colaborativa, jogos e simulações, realidade virtual e aumentada, aprendizado estruturado em equipe)."
          },
          {
            id:5,
            label: "Eu (re)desenvolvo atividades de aprendizagem com base no feedback dos alunos, co-criando novas formas de interagir e se envolver ativamente com as tecnologias digitais (por exemplo, envolvendo os alunos em atividades práticas, aprendizagem experiencial, discussões online, coaching e ensino entre pares, construindo sua aprendizagem e criação de artefatos)."
          },
          {
            id:6,
            label: "Eu inicio e promovo espaços de aprendizagem aprimorados digitalmente dentro da minha escola e sua comunidade, onde os alunos estão ativamente envolvidos em atividades de aprendizagem (por exemplo, ritmo makers, robótica, programação, aplicações de IA)."
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },
        ]
      }, {
        id: "5.4",
        name: "Aprendizagem mista",
        description: "Utilização de recursos e ferramentas digitais, ambientes e plataformas de aprendizagem online para assegurar a aprendizagem dos alunos dentro e fora da sala de aula.",
        question: "Utilizar recursos e ferramentas digitais, ambientes e plataformas de aprendizagem online para garantir aprendizagem dos alunos dentro e fora da sala de aula.",
        option: [
          {
            id:1,
            label: "Estou ciente de que as tecnologias digitais podem ser usadas para combinar no local e remoto, síncrono e aprendizagem assíncrona (por exemplo, recursos digitais, reuniões online, grupos em redes sociais)."
          },
          {
            id:2,
            label: "Eu tentei usar tecnologias digitais que facilitam a aprendizagem dentro e fora da sala de aula (por exemplo, ferramentas de reunião na web, ambientes de aprendizagem online, fóruns de discussão, chats, mundos virtuais)."
          },
          {
            id:3,
            label: "Eu uso várias ferramentas e plataformas digitais para apoiar abordagens de ensino a distância e misto, melhorar os processos e resultados de aprendizagem dos alunos (por exemplo, aulas em vídeo, aplicativos de mídia social, recursos de aprendizagem)."
          },
          {
            id:4,
            label: "Eu analiso tecnologias digitais com base em seus recursos e as emprego em meus projetos de aprendizagem para apoiar a aprendizagem a distância e mista (por exemplo, ferramentas colaborativas online, chats, fóruns, blogs e redes sociais)."
          },
          {
            id:5,
            label: "Eu reflito e redesenho o ensino e a aprendizagem para contextos de ensino a distância e misto para assegurar o envolvimento ativo dos meus alunos no processo de aprendizagem dentro e fora da sala de aula (por exemplo, aprendizagem online, aprendizagem híbrida, laboratórios virtuais, ferramentas colaborativas online, síncronas e assíncronas , trabalho individual e em equipe)."
          },
          {
            id:6,
            label: "Eu contribuo para o desenho de uma estratégia de aprendizagem a distância e mista para minha escola e apoio sua implementação para facilitar abordagens de aprendizagem inovadoras e inclusivas dentro e fora da escola (por exemplo, garantir o acesso à infraestrutura e dispositivos, suporte para pais e alunos, regular troca de informações, código de conduta para comportamento e normas online, gerenciamento de dados pessoais e segurança, práticas de comunicação)."
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },
        ]
      },
    ]
  }, {
    id: "6",
    name: "Área 6 - Ensino e aprendizagem",
    icon: "",
    img_url: "areas/area6.jpg",
    cor: "area6",
    description: "A competência digital dos professores é importante para apoiar e facilitar o desenvolvimento de seus alunos. As declarações de nível de proficiência são organizadas aumentando o nível de envolvimento dos alunos e complexidade da competência digital nas atividades de aprendizagem.",
    subareas: [
      {
        id: "6.1",
        name: "Literacia da informação e de dados",
        description: "Incorporação de atividades de aprendizagem que exigem dos alunos a utilização de tecnologias digitais para pesquisar, avaliar e gerir informações e dados em ambientes digitais.",
        question: "Incorporar atividades de aprendizagem, que exigem que os alunos usem tecnologias digitais para pesquisar, avaliar e gerenciar informações e dados em ambientes digitais.",
        option: [
          {
            id:1,
            label: "Estou ciente das atividades e recursos de aprendizagem que podem aprimorar as informações e os dados dos alunos alfabetizados (por exemplo, procurar informações digitais, avaliar as informações encontradas, ler gráficos, ler e entender os dados)."
          },
          {
            id:2,
            label: "Eu tentei atividades de aprendizagem que incentivam os alunos a pesquisar, avaliar e gerenciar informações e dados em ambientes digitais (por exemplo, definir critérios de pesquisa, comparar diferentes fontes, interpretando dados)."
          },
          {
            id:3,
            label: "Eu implemento várias atividades de aprendizado que exigem que os alunos pesquisem, avaliem e gerenciem as informações e os dados de diferentes ambientes digitais, de acordo com suas necessidades de aprendizagem (por exemplo, definir critérios de seleção, identificar imprecisões, falta de informações, verificação cruzada de diferentes fontes para julgar credibilidade, gestão de desinformação, racismo e xenofobia)."
          },
          {
            id:4,
            label: "Eu projeto o aprendizado para apoiar os alunos a pesquisar, avaliar e gerenciar informações e dados (por exemplo, analisando a escolha do meio de informação, a fonte, finalidade, transparência de algoritmos usados para decidir que tipo de informação e dados são retornados)."
          },
          {
            id:5,
            label: "Eu lidero iniciativas baseadas em projetos onde os alunos, como destinatários e criadores de conteúdo, vão através do processo de busca crítica, avaliação e gerenciamento de informações e dados (por exemplo, edição do boletim escolar, organizando informações e acesso a dados usando taxonomias e categorias)."
          },
          {
            id:6,
            label: "Meus alunos e eu contribuímos para a criação de estratégias que promovam maneiras de usar o tecnologias digitais para melhorar a alfabetização de informações e dados em toda a minha escola e sua comunidade em geral (por exemplo, oficinas, debates, atividades vivenciais)."
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },
        ]
      },
      {
        id: "6.2",
        name: "Comunicação e colaboração",
        description: "Implementação de atividades de aprendizagem que requerem que os alunos comuniquem e colaborem utilizando tecnologias digitais.",
        question: "implementando atividades de aprendizagem que exigem que os alunos se comuniquem e colaborem usando as tecnologias digitais.",
        option: [
          {
            id:1,
            label: "Estou ciente das atividades de aprendizagem que podem melhorar a comunicação digital dos alunos (por exemplo, usando e-mail, mensagens instantâneas, redes sociais, etc. Para se comunicar com os professores e colegas)."
          },
          {
            id:2,
            label: "Eu tentei atividades de aprendizagem que incentivam os alunos a se comunicar e colaborar com professores e entre si usando tecnologias digitais (por exemplo, usando reuniões online, fóruns de discussão)."
          },
          {
            id:3,
            label: "Eu implemento várias atividades de aprendizado que exigem que os alunos se comuniquem e colaborem em contextos digitais de acordo com suas necessidades de aprendizagem (por exemplo, uso de mídia apropriada para o aprendizado digital dos alunos). Comunicação, uso de ferramentas digitais que melhor a colaboração dos alunos, gestão de um ambiente online compartilhado, edição de documentos compartilhados online)."
          },
          {
            id:4,
            label: "Eu projeto a aprendizagem para apoiar os alunos a usar tecnologias digitais para comunicação e  colaboração respeitando as normas comportamentais e de comunicação (por exemplo, respeitando as ideias e diversidade enquanto contribui para o trabalho em equipe, compartilhando mensagens em redes multiculturais, criando conexões positivas e contatos de construção)."
          },
          {
            id:5,
            label: "Reflito sobre a adequação das minhas práticas pedagógicas com vista a fomentar o conhecimento digital dos alunos. Comunicação e colaboração e reajustá-los de acordo (por exemplo, trocar boas práticas com outros colegas, discuta com os alunos as necessidades de comunicação e colaboração, explorando novas ferramentas)."
          },
          {
            id:6,
            label: "Meus alunos e eu iniciamos e promovemos redes digitais de comunicação e colaboração com outras escolas e partes educacionais interessadas (nacionais e internacionalmente) para trocar aprendizado e experiências, atividades e perseguir projetos em comum (por exemplo, participação e co-criação de iniciativas educativas, concursos)."
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },
        ]
      },
      {
        id: "6.3",
        name: "Criação de conteúdo",
        description: "Incorporação de atividades de aprendizagem que requerem que os alunos se expressem através da criação de artefactos digitais.",
        question: "incorporando atividades de aprendizagem que exigem que os alunos se expressem criando artefatos.",
        option: [
          {
            id:1,
            label: "Tenho conhecimento de atividades de aprendizagem que estimulem os alunos a se expressarem por meio meios (por exemplo, na forma de texto, fotos, imagens, apresentações)."
          },
          {
            id:2,
            label: "Eu tentei atividades de aprendizagem que encorajam os alunos a criar e modificar conteúdo digital (por exemplo, texto, apresentações, áudios, vídeos)."
          },
          {
            id:3,
            label: "Eu implemento várias atividades de aprendizado que exigem que meus alunos expressem e transmitam suas ideias criativamente, usando ferramentas digitais apropriadas (por exemplo, visualizações, simulações, histórias digitais)."
          },
          {
            id:4,
            label: "Eu projeto a aprendizagem para envolver os alunos em processos criativos de design para (re)criar qualidade no conteúdo digital, respeitando as regras e licenças de direitos autorais (por exemplo, ajudar os alunos a passar por um processo de design para desenvolvimento de conteúdo, facilitando os alunos a selecionar ferramentas digitais apropriadas, orientando alunos a entenderem direitos autorais, atribuir licenças e dar créditos)."
          },
          {
            id:5,
            label: "Eu reflito e (re)desenvolvo atividades de aprendizagem para promover a expressão e o conteúdo digital dos alunos , encorajando práticas de partilha (por exemplo, histórias digitais e portfólios)."
          },
          {
            id:6,
            label: "Meus alunos e eu iniciamos e promovemos estratégias na escola e na comunidade em geral que permitem que os alunos se envolvam na concepção, desenvolvimento e publicação de suas (re)criações digitais, enquanto compartilhando-os de novas maneiras (por exemplo, co-criação de aplicativos móveis, manutenção de makerspaces, promoção de áudio e transmissões de vídeo)."
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },
        ]
      },
      {
        id: "6.4",
        name: "Segurança e bem-estar",
        description: "Capacitação dos alunos para a utilização de tecnologias digitais com segurança, atenuando simultaneamente os riscos, para assegurar o bem-estar físico, psicológico e social.",
        question: "Capacitar os alunos a usar tecnologias digitais com segurança, ao mesmo tempo em que reduz os riscos para garantir a segurança física, bem-estar psicológico e social.",
        option: [
          {
            id:1,
            label: "Estou ciente das atividades de aprendizagem que incentivam os alunos a usar as tecnologias digitais com segurança (por exemplo, como proteger a privacidade dos dados, ler os termos de uso, evitar a exclusão social e prevenir a violência no ambiente digital)."
          },
          {
            id:2,
            label: "Eu tentei atividades de aprendizagem que permitem aos alunos considerar as implicações de segurança e bem-estar de usar tecnologias digitais (por exemplo, identificar comportamento inadequado, discutir uso excessivo ou vício)."
          },
          {
            id:3,
            label: "Eu implemento várias atividades de aprendizagem para levar os alunos a agir de maneira responsável e ética ao criar e consumir informações digitais (por exemplo, ajustando as configurações de suas mídias sociais, proteger dados pessoais e privacidade, definir senhas fortes, bloquear e denunciar indivíduos que fazem eles se sentirem desconfortáveis)."
          },
          {
            id:4,
            label: "Eu planejo a aprendizagem para ajudar os alunos a desenvolver estratégias de uso responsável e ético de tecnologias, para salvar a sua reputação e promover o bem-estar social (por exemplo, equilíbrio online e atividades off-line, reconhecendo e enfrentando cyberbullying / sexting / racismo, em ambientes digitais)."
          },
          {
            id:5,
            label: "Reflito e (re)desenvolvo atividades de aprendizagem com base em desenvolvimentos contínuos sobre riscos online e ameaças, de modo a permitir que os alunos sigam e adotem práticas positivas em relação a si e aos seu bem-estar físico, psicológico e social dos pares (por exemplo, como as empresas coletam e usam dados sobre indivíduos, como as mídias sociais afetam as relações emocionais e sociais)."
          },
          {
            id:6,
            label: "Meus alunos e eu contribuímos para criar uma cultura em nossa escola e em sua comunidade mais ampla, na qual os usos negativos e positivos das tecnologias digitais são discutidos abertamente e as formas de evitar riscos e ameaças (por exemplo, oficinas experimentais de segurança on-line, treinamento de bem-estar digital para colegas, professores e pais)."
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },
        ]
      }, {
        id: "6.5",
        name: "Uso responsável",
        description: "Capacitação dos alunos para a utilização de tecnologias digitais de forma responsável e ética, gerindo a sua identidade digital, pegada digital e reputação digital.",
        question: "Capacitar os alunos a usar tecnologias digitais de forma responsável e ética, gerenciando sua identidade digital, presença e reputação digital.",
        option: [
          {
            id:1,
            label: "Estou ciente das atividades de aprendizagem para capacitar os alunos a entender os aspectos legais e éticos e implicações do uso de tecnologias digitais (por exemplo, compartilhamento de informações pessoais e confidenciais de outras pessoas, gerenciamento de configurações privadas em aplicativos online)."
          },
          {
            id:2,
            label: "Eu tentei atividades de aprendizagem que promovam a compreensão dos alunos sobre as implicações legais e éticas quando usando tecnologias digitais (por exemplo, compartilhamento de conteúdo digital protegido por direitos autorais, aceitando permissões quando estiver instalando um aplicativo)."
          },
          {
            id:3,
            label: "Eu implemento várias atividades de aprendizagem digital que exigem que os alunos atuem de forma responsável e de maneira ética, tanto como consumidores quanto criadores de informações e conteúdos digitais (por exemplo, avaliando criticamente informações, reagir à desinformação, comportar-se positivamente online, cumprir a proteção de dados e regras de direitos autorais, respeitando a diversidade e múltiplas opiniões)."
          },
          {
            id:4,
            label: "Eu planejo o aprendizado para oferecer oportunidades para os alunos gerenciarem suas identidades digitais e reputações (por exemplo, rastrear sua pegada digital, gerenciar sua identidade digital, estar ciente dos termos de uso de diferentes mídias e aplicativos, gerenciando as configurações do aplicativo)."
          },
          {
            id:5,
            label: "Eu reflito e (re)desenvolvo minhas atividades de aprendizagem para permitir que os alunos considerem a ética e impacto potencial de seus comportamentos digitais em situações autênticas (por exemplo, considerando como algo que eles postam online pode ser prejudicial, compartilhar respeitosamente uma diferença de opinião em um comentário, ativismo online)."
          },
          {
            id:6,
            label: "Meus alunos e eu iniciamos e promovemos estratégias na escola e na comunidade em geral que promovem o uso ético e responsável de tecnologias digitais por funcionários, alunos e pais (por exemplo, workshops, colegas de coaching, professores e pais)."
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },
        ]
      }, {
        id: "6.6",
        name: "Resolução de problemas",
        description: "Incorporação de atividades de aprendizagem, nas quais os alunos utilizam tecnologias digitais para compreender e resolver problemas.",
        question: "Incorporando atividades de aprendizagem, onde os alunos usam tecnologias digitais para entender e resolver problemas.",
        option: [
          {
            id:1,
            label: "Estou ciente das atividades de aprendizagem que incentivam os alunos a usar tecnologias digitais para entender e resolver problemas (por exemplo, usando um mecanismo de pesquisa, recursos de ajuda, aplicativos para registrar e organizar informações para análise)."
          },
          {
            id:2,
            label: "Eu tentei atividades de aprendizagem que encorajam os alunos a usar tecnologias digitais para entender e resolver problemas (por exemplo, brainstorming, mapeamento, uso de ferramentas de visualização, etc. Para analisar um problema e desenvolver uma possível solução)."
          },
          {
            id:3,
            label: "Eu implemento várias atividades de aprendizagem que permitem aos alunos aplicar processos de resolução de problemas apoiada por tecnologias digitais (por exemplo, encontrar e organizar informações, analisar, inferir, prever resultados, fazer analogias e formular ideias)."
          },
          {
            id:4,
            label: "Eu projeto a aprendizagem para permitir que os alunos busquem diferentes soluções inovadoras e criativas para serem aplicadas em novas situações e contextos (por exemplo, geração de novas ideias e soluções, simulação, modelagem)."
          },
          {
            id:5,
            label: "Reflito sobre o meu ensino e (re)desenvolvo atividades de ensino e aprendizagem para possibilitar a cocriação de processos de resolução de problemas com meus alunos e encontrar soluções que envolvam tecnologias digitais (por exemplo, representação de modelos abstratos, depuração, decomposição de problemas em pequenas partes)."
          },
          {
            id:6,
            label: "Meus alunos e eu contribuímos para explorar e desenvolver soluções inovadoras e criativas para o mundo real enfrentando desafios dentro e fora da nossa escola (por exemplo, desafios sociais, ambientais, tecnológicos)."
          },
          {
            id: 0,
            label: "Não estou ciente desta competência"
          },
        ]
      },
    ]
  },
];
export {
  areasList
};
