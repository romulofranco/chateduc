const levelList = [
    {
        id: "1",
        name: "Iniciante",
        icon: "",
        cor: "",
        img_url: "levels/a1.png",
        description: "Os recém-chegados estão cientes do potencial das tecnologias digitais para aprimorar a prática pedagógica e profissional. No entanto, eles tiveram muito pouco contato com as tecnologias digitais e as utilizam principalmente para preparação de aulas, administração ou comunicação organizacional.",
        subdesc: "Os recém-chegados precisam de orientação e incentivo para expandir seu repertório e aplicar sua competência digital existente no domínio pedagógico.",
        sigla: "A1",
        areas: [
            {
                id: "1.1",
                name: "Comunicação Organizacional",
                cor: "area1",
                icon: "mdi-account-group-outline",
                main_statement: "Fazendo pouco uso de tecnologias digitais para comunicação",
                proficient_statement: "Raramente uso tecnologias digitais para a comunicação."
            }, {
                id: "1.2",
                name: "Colaboração Profissional",
                cor: "area1",
                icon: "mdi-notebook-check-outline",
                main_statement: "Fazendo pouco uso de tecnologias digitais para colaboração",
                proficient_statement: "Raramente uso tecnologias digitais para colaborar com colegas."
            }, {
                id: "1.3",
                name: "Prática reflexiva",
                cor: "area1",
                icon: "mdi-account-group",
                main_statement: "Estar inseguro sobre as próprias necessidades de desenvolvimento",
                proficient_statement: "Sei que preciso aprimorar minhas habilidades digitais, mas não tenho certeza de como e por onde começar."
            }, {
                id: "1.4",
                name: "Desenvolvimento Profissional Contínuo Digital",
                cor: "area1",
                icon: "mdi-desktop-mac-dashboard",
                main_statement: "Fazendo pouco uso da internet para atualização de conhecimento",
                proficient_statement: "Raramente uso a internet para atualizar meus conhecimentos ou habilidades."
            }, {
                id: "2.1",
                name: "Seleção de recursos digitais",
                cor: "area2",
                icon: "mdi-reflect-vertical",
                main_statement: "Fazendo pouco uso da internet para encontrar recursos",
                proficient_statement: "Raramente uso a internet para encontrar recursos de ensino e aprendizagem."
            }, {
                id: "2.2",
                name: "Criação e modificação de conteúdo digital",
                cor: "area2",
                icon: "mdi-account-group-outline",
                main_statement: "Abster-se de modificar recursos digitais",
                proficient_statement: "Posso fazer uso de recursos digitais, mas não costumo modificá-los ou criar meus próprios recursos."
            }, {
                id: "2.3",
                name: "Gerenciar, proteger e compartilhar recursos digitais",
                cor: "area2",
                icon: "mdi-account-group-outline",
                main_statement: "Não empregar estratégias de compartilhamento de recursos.",
                proficient_statement: "Eu armazeno e organizo recursos digitais para meu próprio uso futuro."
            }, {
                id: "3.1",
                name: "Ensino",
                cor: "area3",
                icon: "mdi-account-group-outline",
                main_statement: "Fazendo pouco uso de tecnologias digitais para instrução",
                proficient_statement: "Não utilizo ou utilizo muito raramente dispositivos ou conteúdos digitais no meu ensino."
            }, {
                id: "3.2",
                name: "Orientação",
                cor: "area3",
                icon: "mdi-account-group-outline",
                main_statement: "Fazendo pouco uso de tecnologias digitais para interagir com os alunos",
                proficient_statement: "Não me comunico ou apenas muito raramente comunico com os alunos através de meios digitais, por exemplo, e-mail."
            }, {
                id: "3.3",
                name: "Aprendizagem colaborativa",
                cor: "area3",
                icon: "mdi-account-group-outline",
                main_statement: "Fazendo pouco uso de tecnologias digitais em atividades de aprendizagem colaborativa",
                proficient_statement: "Eu não considero ou apenas muito raramente considero como os alunos podem usar tecnologias digitais em atividades ou tarefas colaborativas."
            }, {
                id: "3.4",
                name: "Aprendizagem autorregulada",
                cor: "area3",
                icon: "mdi-account-group-outline",
                main_statement: "Fazendo pouco uso de tecnologias digitais para aprendizagem autorregulada",
                proficient_statement: "Eu não considero ou apenas muito raramente considero como os alunos poderiam usar tecnologias digitais em atividades ou tarefas autorreguladas."
            }, {
                id: "4.1",
                name: "Estratégias de avaliação",
                cor: "area4",
                icon: "mdi-account-group-outline",
                main_statement: "Fazendo pouco uso de tecnologias digitais para avaliação",
                proficient_statement: "Não uso ou raramente uso formatos de avaliação digital."
            }, {
                id: "4.2",
                name: "Análise de evidências",
                cor: "area4",
                icon: "mdi-account-group-outline",
                main_statement: "Fazendo pouco uso de dados digitais para monitorar o progresso",
                proficient_statement: "Não me refiro ou apenas muito raramente me refiro a dados gravados digitalmente para entender a posição de meus alunos."
            }, {
                id: "4.3",
                name: "Feedback e Planejamento",
                cor: "area4",
                icon: "mdi-account-group-outline",
                main_statement: "Fazendo pouco uso de dados digitais para feedback e planejamento",
                proficient_statement: "Não sei como as tecnologias digitais podem me ajudar a fornecer feedback aos alunos ou adaptar minhas estratégias de ensino."
            }, {
                id: "5.1",
                name: "Capacitando os Alunos",
                cor: "area5",
                icon: "mdi-account-group-outline",
                main_statement: "Preocupar- se com acessibilidade e inclusão",
                proficient_statement: "Receio que o uso de tecnologias digitais no ensino torne ainda mais difícil para alunos já desfavorecidos participar e acompanhar os demais."
            }, {
                id: "5.2",
                name: "Diferenciação e personalização",
                cor: "area5",
                icon: "mdi-account-group-outline",
                main_statement: "Estar incerto sobre o potencial das tecnologias digitais para diferenciação e personalização",
                proficient_statement: "Não sei como as tecnologias digitais podem me ajudar a oferecer oportunidades de aprendizagem personalizadas."
            }, {
                id: "5.3",
                name: "Envolver os alunos ativamente",
                cor: "area5",
                icon: "mdi-account-group-outline",
                main_statement: "Fazendo pouco uso de tecnologias digitais para o envolvimento do aluno",
                proficient_statement: "Só muito raramente, se é que o uso, uso tecnologias digitais para motivar ou envolver os alunos."
            }, {
                id: "6.1",
                name: "Alfabetização informacional e midiática",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Fazer pouco uso de estratégias que promovam a alfabetização informacional dos alunos",
                proficient_statement: "Eu não considero ou apenas muito raramente considero como eu poderia promover a alfabetização informacional e midiática dos alunos."
            }, {
                id: "6.2",
                name: "Comunicação e colaboração digital",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Fazer pouco uso de estratégias que promovam a comunicação e colaboração digital dos alunos",
                proficient_statement: "Eu não considero ou apenas muito raramente considero como eu poderia promover a comunicação e colaboração digital dos alunos."
            }, {
                id: "6.3",
                name: "Criação de conteúdo digital",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Fazendo pouco uso de estratégias que fomentem a criação de conteúdo digital pelos alunos",
                proficient_statement: "Eu não considero ou apenas muito raramente considero como promover a criação de conteúdo digital pelos alunos."
            }, {
                id: "6.4",
                name: "Uso responsável",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Fazendo pouco uso de estratégias que promovem o bem-estar digital dos alunos",
                proficient_statement: "Estou ciente de que as tecnologias digitais podem afetar positiva e negativamente o bem-estar dos alunos."
            }, {
                id: "6.5",
                name: "Resolução de problemas digitais",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Fazendo pouco uso de estratégias que promovem a resolução de problemas digitais dos alunos",
                proficient_statement: "Eu não considero ou apenas muito raramente considero como promover a resolução de problemas digitais dos alunos."
            },
        ]
    },
    {
        id: "2",
        name: "Explorador ",
        icon: "",
        cor: "",
        img_url: "levels/a2.png",
        description: "Os exploradores estão cientes do potencial das tecnologias digitais e estão interessados ​​em explorá-las para aprimorar a prática pedagógica e profissional. Eles começaram a usar tecnologias digitais em algumas áreas de competência digital, sem, no entanto, seguir uma abordagem abrangente ou consistente.",
        subdesc: "Os exploradores precisam de encorajamento, discernimento e inspiração, por exemplo, através do exemplo e orientação de colegas, inseridos em uma troca colaborativa de práticas.",
        sigla: "A2",
        areas: [
              {
                id: "1.1",
                name: "Comunicação Organizacional",
                cor: "area1",
                icon: "mdi-account-group-outline",
                main_statement: "Estar ciente e fazer uso básico de tecnologias digitais para comunicação",
                proficient_statement: "Eu faço uso de tecnologias digitais para comunicação, por exemplo, com alunos, pais, colegas ou equipe de apoio."
            }, {
                id: "1.2",
                name: "Colaboração Profissional",
                cor: "area1",
                icon: "mdi-notebook-check-outline",
                main_statement: "Estar ciente e fazer uso básico de tecnologias digitais para colaboração",
                proficient_statement: "Eu uso tecnologias digitais para colaborar com colegas em minha organização, por exemplo, em um projeto conjunto dedicado, ou para trocar conteúdo, conhecimento e opiniões."
            }, {
                id: "1.3",
                name: "Prática reflexiva",
                cor: "area1",
                icon: "mdi-account-group",
                main_statement: "Estar ciente das próprias necessidades de desenvolvimento",
                proficient_statement: "Estou ciente dos limites da minha própria competência digital e das minhas necessidades de formação."
            }, {
                id: "1.4",
                name: "Desenvolvimento Profissional Contínuo Digital",
                cor: "area1",
                icon: "mdi-desktop-mac-dashboard",
                main_statement: "Utilização da internet para atualização de conhecimentos",
                proficient_statement: "Eu uso a internet para atualizar meus conhecimentos específicos ou pedagógicos."
            }, {
                id: "2.1",
                name: "Seleção de recursos digitais",
                cor: "area2",
                icon: "mdi-reflect-vertical",
                main_statement: "Estar ciente e fazer uso básico de tecnologias digitais para encontrar recursos",
                proficient_statement: "Utilizo estratégias simples de busca na internet para identificar conteúdos digitais relevantes para o ensino e aprendizagem. Estou ciente de plataformas educacionais comuns que fornecem recursos educacionais."
            }, {
                id: "2.2",
                name: "Criação e modificação de conteúdo digital",
                cor: "area2",
                icon: "mdi-account-group-outline",
                main_statement: "Criar e modificar recursos usando ferramentas e estratégias básicas",
                proficient_statement: "Eu uso software de escritório para projetar e modificar, por exemplo, planilhas e questionários. Eu crio apresentações digitais para fins educacionais."
            }, {
                id: "2.3",
                name: "Gerenciar, proteger e compartilhar recursos digitais",
                cor: "area2",
                icon: "mdi-account-group-outline",
                main_statement: "Gerenciando recursos usando estratégias básicas",
                proficient_statement: "Eu compartilho conteúdo educacional por meio de anexos de e-mail ou links. Estou ciente de que alguns recursos distribuídos na Internet são protegidos por direitos autorais."
            }, {
                id: "3.1",
                name: "Ensino",
                cor: "area3",
                icon: "mdi-account-group-outline",
                main_statement: "Eu uso as tecnologias disponíveis em sala de aula, por exemplo, quadros brancos digitais, projetores, PCs.",
                proficient_statement: "Eu escolho as tecnologias digitais de acordo com o objetivo e contexto de aprendizagem."
            }, {
                id: "3.2",
                name: "Orientação",
                cor: "area3",
                icon: "mdi-account-group-outline",
                main_statement: "Empregando estratégias digitais básicas para interagir com os alunos",
                proficient_statement: "Eu uso tecnologias digitais, por exemplo, e-mail ou bate-papo, para responder às perguntas ou dúvidas dos alunos, por exemplo, nas tarefas de casa."
            }, {
                id: "3.3",
                name: "Aprendizagem colaborativa",
                cor: "area3",
                icon: "mdi-account-group-outline",
                main_statement: "Incentivar os alunos a usar tecnologias digitais em suas atividades colaborativas",
                proficient_statement: "Ao implementar atividades ou projetos colaborativos, incentivo os alunos a usar tecnologias digitais para apoiar seu trabalho, por exemplo, para pesquisa na Internet ou para apresentar seus resultados."
            }, {
                id: "3.4",
                name: "Aprendizagem autorregulada",
                cor: "area3",
                icon: "mdi-account-group-outline",
                main_statement: "Incentivar os alunos a usar tecnologias digitais em atividades de aprendizagem autorreguladas",
                proficient_statement: "Eu encorajo os alunos a usar tecnologias digitais para apoiar suas atividades e tarefas individuais de aprendizado, por exemplo, para recuperação de informações ou apresentação de resultados."
            }, {
                id: "4.1",
                name: "Estratégias de avaliação",
                cor: "area4",
                icon: "mdi-account-group-outline",
                main_statement: "Integrando tecnologias digitais em estratégias de avaliação tradicionais",
                proficient_statement: "Eu uso tecnologias digitais para criar tarefas de avaliação que são administradas em formato de papel. Eu planejo o uso de tecnologias digitais pelos alunos em tarefas de avaliação, por exemplo, em apoio a tarefas."
            }, {
                id: "4.2",
                name: "Análise de evidências",
                cor: "area4",
                icon: "mdi-account-group-outline",
                main_statement: "Avaliando dados básicos  sobre a atividade e o desempenho do aluno",
                proficient_statement: "Eu avalio dados administrativos (por exemplo, frequência) e dados sobre o desempenho do aluno (por exemplo, notas) para feedback individual e intervenções direcionadas. Estou ciente de que as ferramentas de avaliação digital (por exemplo, questionários, sistemas de votação) podem ser usadas no processo de ensino para me fornecer feedback oportuno sobre o progresso dos alunos."
            }, {
                id: "4.3",
                name: "Feedback e Planejamento",
                cor: "area4",
                icon: "mdi-account-group-outline",
                main_statement: "Usando tecnologias digitais para informar o feedback",
                proficient_statement: "Eu uso tecnologias digitais para compilar uma visão geral sobre o progresso dos alunos, que eu uso como base para oferecer feedback e conselhos. "
            }, {
                id: "5.1",
                name: "Capacitando os Alunos",
                cor: "area5",
                icon: "mdi-account-group-outline",
                main_statement: "Estar ciente das questões de acessibilidade e inclusão",
                proficient_statement: "Entendo a importância de garantir acesso igualitário às tecnologias digitais usadas para todos os alunos. Estou ciente de que as tecnologias digitais podem dificultar ou melhorar a acessibilidade."
            }, {
                id: "5.2",
                name: "Diferenciação e personalização",
                cor: "area5",
                icon: "mdi-account-group-outline",
                main_statement: "Estar ciente do potencial das tecnologias digitais para diferenciação e personalização",
                proficient_statement: "Estou ciente de que as tecnologias digitais podem apoiar a diferenciação e personalização, por exemplo, fornecendo atividades em diferentes níveis e velocidades."
            }, {
                id: "5.3",
                name: "Envolver os alunos ativamente",
                cor: "area5",
                icon: "mdi-account-group-outline",
                main_statement: "Usando tecnologias digitais para envolver os alunos",
                proficient_statement: "Eu uso tecnologias digitais para visualizar e explicar novos conceitos de forma motivadora e envolvente, por exemplo, empregando animações ou vídeos. Eu emprego atividades de aprendizagem digital que são motivadoras e envolventes, por exemplo, jogos, questionários."
            }, {
                id: "6.1",
                name: "Alfabetização informacional e midiática",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Incentivar os alunos a usar tecnologias digitais para recuperação informacional",
                proficient_statement: "Encorajo os alunos a usar tecnologias digitais para recuperação de informações, por exemplo, em tarefas."
            }, {
                id: "6.2",
                name: "Comunicação e colaboração digital",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Incentivar os alunos a usar tecnologias digitais para comunicação e colaboração",
                proficient_statement: "Encorajo os alunos a usar tecnologias digitais para interagir com outros alunos, com seus educadores, equipe de gerenciamento e terceiros."
            }, {
                id: "6.3",
                name: "Criação de conteúdo digital",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Incentivar os alunos a usar tecnologias digitais para criar conteúdo",
                proficient_statement: "Eu encorajo os alunos a se expressarem usando tecnologias digitais, por exemplo, produzindo textos, imagens, vídeos."
            }, {
                id: "6.4",
                name: "Uso responsável",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Incentivar os alunos a usar tecnologias digitais com segurança e responsabilidade ",
                proficient_statement: "Eu promovo a conscientização dos alunos sobre como as tecnologias digitais podem afetar positiva e negativamente a saúde e o bem-estar, por exemplo, incentivando-os a identificar comportamentos (próprios ou de outros) que os deixam felizes ou tristes. Eu promovo a conscientização dos alunos sobre os benefícios e as desvantagens da abertura da Internet."
            }, {
                id: "6.5",
                name: "Resolução de problemas digitais",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Incentivar os alunos a usar tecnologias digitais para resolver problemas",
                proficient_statement: "Encorajo os alunos a resolver problemas técnicos usando tentativa e erro. Encorajo os alunos a transferir sua competência digital para novas situações."
            },
        ]
    },
    {
        id: "3",
        name: "Integrador ",
        icon: "",
        cor: "",
        img_url: "levels/b1.png",
        description: "Os integradores experimentam tecnologias digitais em diversos contextos e para diversos propósitos, integrando-os em muitas de suas práticas. Eles os usam de forma criativa para aprimorar diversos aspectos de seu envolvimento profissional. Eles estão ansiosos para expandir seu repertório de práticas. Eles estão, no entanto, ainda trabalhando para entender quais ferramentas funcionam melhor em quais situações e para adequar as tecnologias digitais às estratégias e métodos pedagógicos.",
        subdesc: "Os integradores só precisam de mais tempo para experimentação e reflexão, complementados por incentivo colaborativo e troca de conhecimento para se tornarem especialistas .",
        sigla: "B1",
        subareas: [
            {
                id: "1.1",
                name: "Comunicação Organizacional",
                cor: "area1",
                icon: "mdi-account-group-outline",
                main_statement: "Utilizar as tecnologias digitais para a comunicação de forma eficaz e responsável",
                proficient_statement: "Utilizo diferentes canais e ferramentas de comunicação digital, dependendo do objetivo e contexto de comunicação. Eu me comunico de forma responsável e ética com as tecnologias digitais, por exemplo, respeitando a netiqueta e as políticas de uso aceitável (AUP)."
            }, {
                id: "1.2",
                name: "Colaboração Profissional",
                cor: "area1",
                icon: "mdi-notebook-check-outline",
                main_statement: "Usando tecnologias digitais para compartilhar e trocar práticas",
                proficient_statement: "Eu uso comunidades digitais para explorar novos recursos ou métodos pedagógicos e obter novas ideias. Eu uso tecnologias digitais para compartilhar e trocar os recursos que uso, meu conhecimento e opinião, com colegas dentro e fora da minha organização.   "
            }, {
                id: "1.3",
                name: "Prática reflexiva",
                cor: "area1",
                icon: "mdi-account-group",
                main_statement: "Usando a experimentação e a aprendizagem entre pares como fonte de desenvolvimento",
                proficient_statement: "Procuro melhorar e atualizar a minha competência pedagógica digital através da experimentação e da aprendizagem entre pares. Experimento e reflito criativamente sobre novas abordagens pedagógicas, possibilitadas pelas tecnologias digitais. "
            }, {
                id: "1.4",
                name: "Desenvolvimento Profissional Contínuo Digital",
                cor: "area1",
                icon: "mdi-desktop-mac-dashboard",
                main_statement: "Usando a internet para identificar oportunidades para CPD",
                proficient_statement: "Eu uso a internet para identificar cursos de treinamento adequados e outras oportunidades de desenvolvimento profissional (por exemplo, conferências)."
            }, {
                id: "2.1",
                name: "Seleção de recursos digitais",
                cor: "area2",
                icon: "mdi-reflect-vertical",
                main_statement: "Identificar e avaliar recursos adequados usando critérios básicos",
                proficient_statement: "Adapto minhas estratégias de busca com base nos resultados que obtenho. Eu filtro resultados para encontrar recursos adequados, usando critérios apropriados. Avalio a qualidade dos recursos digitais com base em critérios básicos, como, por exemplo, local de publicação, autoria, feedback de outros usuários. Eu seleciono recursos que meus alunos podem achar atraentes, por exemplo, vídeos."
            }, {
                id: "2.2",
                name: "Criação e modificação de conteúdo digital",
                cor: "area2",
                icon: "mdi-account-group-outline",
                main_statement: "Criando e modificando recursos usando alguns recursos avançados",
                proficient_statement: "Quando crio recursos digitais (por exemplo, apresentações), integro algumas animações, links, elementos multimédia ou interativos. Eu faço algumas modificações básicas nos recursos digitais de aprendizagem que uso para adequá-los ao contexto de aprendizagem, por exemplo, editando ou excluindo partes, adaptando as configurações gerais. Abordo um objetivo de aprendizagem específico ao selecionar, modificar, combinar e criar recursos digitais de aprendizagem."
            }, {
                id: "2.3",
                name: "Gerenciar, proteger e compartilhar recursos digitais",
                cor: "area2",
                icon: "mdi-account-group-outline",
                main_statement: "Compartilhamento e proteção eficazes de recursos usando estratégias básicas",
                proficient_statement: "Eu compartilho conteúdo educacional em ambientes virtuais de aprendizagem ou fazendo upload, linkando ou incorporando-o, por exemplo, em um site de curso ou blog. Eu protejo efetivamente o conteúdo sensível, por exemplo, exames, relatórios dos alunos. Entendo as regras de direitos autorais que se aplicam aos recursos digitais que uso para fins escolares (imagens, texto, áudio e filme)."
            }, {
                id: "3.1",
                name: "Ensino",
                cor: "area3",
                icon: "mdi-account-group-outline",
                main_statement: "Integrar as tecnologias digitais disponíveis de forma significativa no processo de ensino",
                proficient_statement: "Eu organizo e gerencio a integração de dispositivos digitais (por exemplo, tecnologias de sala de aula, dispositivos dos alunos) no processo de ensino e aprendizagem. Gerencio a integração de conteúdo digital, por exemplo, vídeos, atividades interativas, no processo de ensino e aprendizagem."
            }, {
                id: "3.2",
                name: "Orientação",
                cor: "area3",
                icon: "mdi-account-group-outline",
                main_statement: "Usando tecnologias digitais para melhorar a interação com os alunos",
                proficient_statement: "Eu uso um canal de comunicação digital comum com meus alunos para responder às suas perguntas e dúvidas. Estou frequentemente em contacto com os alunos e ouço os seus problemas e questões."
            }, {
                id: "3.3",
                name: "Aprendizagem colaborativa",
                cor: "area3",
                icon: "mdi-account-group-outline",
                main_statement: "Implementação de tecnologias digitais no design de atividades colaborativas.",
                proficient_statement: "Eu desenvolvo e implemento atividades colaborativas, nas quais as tecnologias digitais são usadas pelos alunos para a geração de conhecimento colaborativo, por exemplo, para obtenção e troca de informações. Exijo que os alunos documentem seus esforços colaborativos usando tecnologias digitais, por exemplo, apresentações digitais, vídeos, postagens em blogs."
            }, {
                id: "3.4",
                name: "Aprendizagem autorregulada",
                cor: "area3",
                icon: "mdi-account-group-outline",
                main_statement: "Implementação de tecnologias digitais no projeto de atividades de aprendizagem autorreguladas.",
                proficient_statement: "Encorajo os alunos a usar tecnologias digitais para coletar evidências e registrar o progresso, por exemplo, para produzir gravações de áudio ou vídeo, fotos, textos. Eu uso tecnologias digitais (por exemplo, ePortfolios, blogs dos alunos) para permitir que os alunos registrem e mostrem seus trabalhos. Eu uso tecnologias digitais para a autoavaliação do aluno."
            }, {
                id: "4.1",
                name: "Estratégias de avaliação",
                cor: "area4",
                icon: "mdi-account-group-outline",
                main_statement: "Empregando e modificando ferramentas e formatos de avaliação digital existentes",
                proficient_statement: "Eu uso algumas tecnologias digitais existentes para avaliação formativa ou somativa, por exemplo, questionários digitais, e-portfólios, jogos. Eu adapto ferramentas de avaliação digital para apoiar meu objetivo de avaliação específico, por exemplo, criar um teste usando um sistema de teste digital."
            }, {
                id: "4.2",
                name: "Análise de evidências",
                cor: "area4",
                icon: "mdi-account-group-outline",
                main_statement: "Avaliando uma variedade de dados digitais para informar o ensino",
                proficient_statement: "Eu avalio os dados resultantes de avaliações digitais para informar a aprendizagem e o ensino. Estou ciente de que os dados sobre a atividade de meus alunos, conforme são registrados nos ambientes digitais que uso com eles, podem me ajudar a monitorar seu progresso e fornecer feedback e assistência em tempo hábil."
            }, {
                id: "4.3",
                name: "Feedback e Planejamento",
                cor: "area4",
                icon: "mdi-account-group-outline",
                main_statement: "Usando tecnologias digitais para fornecer feedback",
                proficient_statement: "Eu uso a tecnologia digital para avaliar e dar feedback sobre as tarefas enviadas eletronicamente. Eu ajudo alunos e/ou pais a acessar informações sobre o desempenho dos alunos, usando tecnologias digitais."
            }, {
                id: "5.1",
                name: "Capacitando os Alunos",
                cor: "area5",
                icon: "mdi-account-group-outline",
                main_statement: "Preocupar- se com acessibilidade e inclusão",
                proficient_statement: "Eu entendo como o acesso à tecnologia digital cria divisões e como as condições sociais e econômicas dos alunos têm impacto na forma como a tecnologia é usada. Garanto que todos os alunos tenham acesso às tecnologias digitais que uso. Estou ciente de que as tecnologias digitais compensatórias podem ser usadas para alunos que precisam de apoio especial (por exemplo, alunos com restrições físicas ou mentais; alunos com distúrbios de aprendizagem)"
            }, {
                id: "5.2",
                name: "Diferenciação e personalização",
                cor: "area5",
                icon: "mdi-account-group-outline",
                main_statement: "Empregando tecnologias digitais para diferenciação e personalização",
                proficient_statement: "Eu seleciono e uso algumas atividades de aprendizagem, por exemplo, questionários ou jogos, que permitem aos alunos prosseguir em diferentes velocidades, selecionar diferentes níveis de dificuldade e/ou repetir atividades anteriormente não resolvidas adequadamente."
            }, {
                id: "5.3",
                name: "Envolver os alunos ativamente",
                cor: "area5",
                icon: "mdi-account-group-outline",
                main_statement: "Promover o uso ativo de tecnologias digitais pelos alunos",
                proficient_statement: "Eu coloco o uso ativo das tecnologias digitais pelos alunos no centro do processo instrucional. Eu escolho a ferramenta mais apropriada para promover o envolvimento ativo do aluno em um determinado contexto de aprendizagem ou para um objetivo de aprendizagem específico."
            }, {
                id: "6.1",
                name: "Alfabetização informacional e midiática",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Implementação de atividades que promovam a alfabetização informacional e midiática dos alunos",
                proficient_statement: "Eu implemento atividades de aprendizagem nas quais os alunos usam tecnologias digitais para recuperação de informações. Eu ensino os alunos como encontrar informações, como avaliar sua confiabilidade, como comparar e combinar informações de diferentes fontes."
            }, {
                id: "6.2",
                name: "Comunicação e colaboração digital",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Implementar atividades que promovam a comunicação digital e a colaboração dos alunos",
                proficient_statement: "Eu implemento atividades de aprendizagem nas quais os alunos usam tecnologias digitais para comunicação. Eu oriento os alunos a respeitarem as normas comportamentais, selecionando adequadamente estratégias e canais de comunicação e tendo consciência da diversidade cultural e social em ambientes digitais."
            }, {
                id: "6.3",
                name: "Criação de conteúdo digital",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Implementação de atividades que fomentem a criação de conteúdo digital pelos alunos",
                proficient_statement: "Eu implemento atividades de aprendizagem nas quais os alunos usam tecnologias digitais para produzir conteúdo digital, por exemplo, na forma de texto, fotos, outras imagens, vídeos, etc. Encorajo os alunos a publicar e compartilhar suas produções digitais."
            }, {
                id: "6.4",
                name: "Uso responsável",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Implementação de medidas para garantir o bem-estar dos alunos",
                proficient_statement: "Dou conselhos práticos e baseados na experiência sobre como proteger a privacidade e os dados, por exemplo, usando senhas, ajustando as configurações das mídias sociais. Eu ajudo os alunos a proteger sua identidade digital e gerenciar sua pegada digital. Aconselho os alunos sobre medidas eficazes para limitar ou combater o impacto do comportamento inadequado (próprio ou de seus colegas)"
            }, {
                id: "6.5",
                name: "Resolução de problemas digitais",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Implementar atividades que promovam a resolução de problemas digitais dos alunos",
                proficient_statement: "Eu implemento atividades de aprendizagem nas quais os alunos usam tecnologias digitais de forma criativa, expandindo seu repertório técnico. Encorajo os alunos a ajudarem-se uns aos outros no desenvolvimento da sua competência digital."
            },
        ]
    },
    {
        id: "4",
        name: "Especialista ",
        icon: "",
        color: "",
        img_url: "levels/b2.png",
        description: "Os especialistas usam uma variedade de tecnologias digitais com confiança, criatividade e crítica para aprimorar suas atividades profissionais. Eles selecionam intencionalmente tecnologias digitais para situações específicas e tentam entender os benefícios e desvantagens de diferentes estratégias digitais. São curiosos e abertos a novas ideias, sabendo que há muitas coisas que ainda não experimentaram. Eles usam a experimentação como meio de expandir, estruturar e consolidar seu repertório de estratégias.",
        subdesc: "Os especialistas são a espinha dorsal de qualquer organização educacional quando se trata de práticas inovadoras.",
        sigla: "B2",
        subareas: [
            {
                id: "1.1",
                name: "Comunicação Organizacional",
                cor: "area1",
                icon: "mdi-account-group-outline",
                main_statement: "Utilizar tecnologias digitais para comunicação de forma estruturada e responsiva",
                proficient_statement: "Eu seleciono o canal, formato e estilo mais apropriados para um determinado propósito e contexto de comunicação. Adapto minhas estratégias de comunicação para o público específico."
            }, {
                id: "1.2",
                name: "Colaboração Profissional",
                cor: "area1",
                icon: "mdi-notebook-check-outline",
                main_statement: "Usando tecnologias digitais para a construção colaborativa do conhecimento",
                proficient_statement: "Uso ativamente comunidades digitais para trocar ideias e desenvolver recursos digitais de forma colaborativa."
            }, {
                id: "1.3",
                name: "Prática reflexiva",
                cor: "area1",
                icon: "mdi-account-group",
                main_statement: "Utilizar uma gama de recursos para desenvolver as próprias práticas digitais e pedagógicas individuais",
                proficient_statement: "Procuro ativamente melhores práticas, cursos ou outros conselhos para melhorar minhas próprias pedagogias digitais e competências digitais mais amplas. Avalio, reflito e discuto com os pares como usar as tecnologias digitais para inovar e melhorar a prática educativa."
            }, {
                id: "1.4",
                name: "Desenvolvimento Profissional Contínuo Digital",
                cor: "area1",
                icon: "mdi-desktop-mac-dashboard",
                main_statement: "Explorando oportunidades on-line de CPD",
                proficient_statement: "Eu uso a internet para desenvolvimento profissional, por exemplo, participando de cursos online, webinars ou consultando materiais de treinamento digital e tutoriais em vídeo. Eu uso trocas formais e informais em comunidades online profissionais como fonte para meu desenvolvimento profissional."
            }, {
                id: "2.1",
                name: "Seleção de recursos digitais",
                cor: "area2",
                icon: "mdi-reflect-vertical",
                main_statement: "Identificar e avaliar recursos adequados usando critérios complexos",
                proficient_statement: "Adapto minhas estratégias de pesquisa para identificar recursos que posso modificar e adaptar, por exemplo, pesquisa e filtragem por licença, extensão de nome de arquivo, data, feedback do usuário, etc. Eu localizo aplicativos e/ou jogos para meus alunos usarem. Eu avalio a confiabilidade dos recursos digitais e sua adequação ao meu grupo de alunos e objetivo de aprendizagem específico. Dou feedback e recomendações sobre os recursos que uso."
            }, {
                id: "2.2",
                name: "Criação e modificação de conteúdo digital",
                cor: "area2",
                icon: "mdi-account-group-outline",
                main_statement: "Adaptação de recursos digitais avançados para um contexto de aprendizagem concreto",
                proficient_statement: "Eu integro uma variedade de elementos e jogos interativos em meus recursos instrucionais criados por mim. Eu modifico e combino recursos existentes para criar atividades de aprendizagem adaptadas a um contexto e objetivo de aprendizagem concretos e às características do grupo de alunos. Compreendo as diferentes licenças atribuídas aos recursos digitais e conheço as permissões que me foram concedidas no que diz respeito à modificação dos recursos."
            }, {
                id: "2.3",
                name: "Gerenciar, proteger e compartilhar recursos digitais",
                cor: "area2",
                icon: "mdi-account-group-outline",
                main_statement: "Compartilhando recursos profissionalmente",
                proficient_statement: "Compartilho recursos incorporando-os em ambientes digitais. Protejo efetivamente os dados pessoais e confidenciais e restrinjo o acesso aos recursos conforme apropriado. Eu faço referência corretamente aos recursos afetados por direitos autorais. "
            }, {
                id: "3.1",
                name: "Ensino",
                cor: "area3",
                icon: "mdi-account-group-outline",
                main_statement: "Usar tecnologias digitais propositalmente para aprimorar estratégias pedagógicas",
                proficient_statement: "Considero configurações sociais e modos de interação apropriados ao integrar tecnologias digitais. Eu uso tecnologias digitais no ensino para aumentar a variação metodológica. Organizo sessões de aprendizagem ou outras interações em ambiente digital."
            }, {
                id: "3.2",
                name: "Orientação",
                cor: "area3",
                icon: "mdi-account-group-outline",
                main_statement: "Uso de tecnologias digitais para aprimorar o monitoramento e a orientação",
                proficient_statement: "Eu interajo com os alunos nos ambientes digitais colaborativos que uso, monitorando seu comportamento e fornecendo orientação e suporte individual conforme necessário. Experimento novas formas e formatos de orientação e suporte, utilizando tecnologias digitais."
            }, {
                id: "3.3",
                name: "Aprendizagem colaborativa",
                cor: "area3",
                icon: "mdi-account-group-outline",
                main_statement: "Usando ambientes digitais para apoiar a aprendizagem colaborativa",
                proficient_statement: "Desenvolvo atividades colaborativas em ambiente digital, por exemplo, blogs, wikis, moodle, ambientes virtuais de aprendizagem. Eu monitoro e oriento a interação colaborativa dos alunos em ambientes digitais. Eu uso tecnologias digitais para permitir que os alunos compartilhem ideias com outras pessoas e recebam feedback dos colegas, também em tarefas individuais."
            }, {
                id: "3.4",
                name: "Aprendizagem autorregulada",
                cor: "area3",
                icon: "mdi-account-group-outline",
                main_statement: "Usando ambientes digitais para apoiar de forma abrangente a aprendizagem auto-regulada",
                proficient_statement: "Eu uso tecnologias ou ambientes digitais (por exemplo, ePortfolios, blogs, diários, ferramentas de planejamento) para permitir que os alunos gerenciem e documentem todas as etapas de seu aprendizado, por exemplo, para planejamento, recuperação de informações, documentação, reflexão e autoavaliação. Ajudo os alunos a desenvolver, aplicar e rever critérios adequados de autoavaliação, com o apoio de tecnologias digitais."
            }, {
                id: "4.1",
                name: "Estratégias de avaliação",
                cor: "area4",
                icon: "mdi-account-group-outline",
                main_statement: "Usando estrategicamente uma variedade de formatos de avaliação digital",
                proficient_statement: "Eu uso uma variedade de softwares, ferramentas e abordagens de avaliação eletrônica para avaliação formativa, tanto na sala de aula quanto para os alunos usarem depois da escola. Eu seleciono entre diferentes formatos de avaliação aquele que capta mais adequadamente a natureza do resultado de aprendizagem a ser avaliado. Eu desenvolvo avaliações digitais que são válidas e confiáveis."
            }, {
                id: "4.2",
                name: "Análise de evidências",
                cor: "area4",
                icon: "mdi-account-group-outline",
                main_statement: "Empregar estrategicamente ferramenta digital para geração de dados",
                proficient_statement: "Eu uso tecnologias digitais (por exemplo, questionários, sistemas de votação, jogos) no processo de ensino para me fornecer feedback oportuno sobre o progresso dos alunos. Eu uso as ferramentas de análise de dados fornecidas pelos ambientes digitais que uso para monitorar e visualizar a atividade. Eu interpreto os dados e as evidências disponíveis para entender melhor as necessidades de apoio de cada aluno."
            }, {
                id: "4.3",
                name: "Feedback e Planejamento",
                cor: "area4",
                icon: "mdi-account-group-outline",
                main_statement: "Usando dados digitais para aumentar a eficácia do feedback e suporte",
                proficient_statement: "Adapto minhas práticas de ensino e avaliação, com base nos dados gerados pelas tecnologias digitais que utilizo. Forneço feedback pessoal e ofereço suporte diferenciado aos aprendizes, com base nos dados gerados pelas tecnologias digitais utilizadas. Eu uso tecnologias digitais para permitir que alunos e pais se mantenham atualizados sobre o progresso e façam escolhas informadas sobre futuras prioridades de aprendizado, disciplinas opcionais ou estudos futuros."
            }, {
                id: "5.1",
                name: "Capacitando os Alunos",
                cor: "area5",
                icon: "mdi-account-group-outline",
                main_statement: "Habilitando   acessibilidade e inclusão",
                proficient_statement: "Eu seleciono estratégias pedagógicas digitais que se adaptam aos contextos digitais dos alunos, por exemplo, tempo de uso limitado, tipo de dispositivo disponível. Eu considero e respondo a possíveis problemas de acessibilidade ao selecionar, modificar ou criar recursos digitais e forneço ferramentas ou abordagens alternativas ou compensatórias para alunos com necessidades especiais. Eu emprego tecnologias e estratégias digitais, por exemplo, tecnologias assistivas, para remediar os problemas de acessibilidade de alunos individuais, por exemplo, deficiências visuais ou auditivas."
            }, {
                id: "5.2",
                name: "Diferenciação e personalização",
                cor: "area5",
                icon: "mdi-account-group-outline",
                main_statement: "Usando estrategicamente uma variedade de tecnologias digitais para diferenciação e personalização",
                proficient_statement: "Ao projetar atividades de aprendizagem e avaliação, utilizo uma gama de diferentes tecnologias digitais, que adapto e ajusto para atender a diferentes necessidades, níveis, velocidades e preferências. Ao sequenciar e implementar atividades de aprendizagem, permito diferentes caminhos, níveis e velocidades de aprendizagem e adapto de forma flexível minhas estratégias às circunstâncias ou necessidades em constante mudança."
            }, {
                id: "5.3",
                name: "Envolver os alunos ativamente",
                cor: "area5",
                icon: "mdi-account-group-outline",
                main_statement: "Usando tecnologias digitais para o envolvimento ativo dos alunos com o assunto",
                proficient_statement: "Eu uso uma variedade de tecnologias digitais para criar um ambiente de aprendizagem digital relevante, rico e eficaz, por exemplo, abordando diferentes canais sensoriais, estilos e estratégias de aprendizagem, variando metodologicamente tipos de atividades e composições de grupo. Eu reflito sobre a eficácia das estratégias de ensino empregadas para aumentar o envolvimento do aluno e o aprendizado ativo."
            }, {
                id: "6.1",
                name: "Alfabetização informacional e midiática",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Usando estrategicamente uma variedade de estratégias pedagógicas para promover a alfabetização informacional e midiática dos alunos",
                proficient_statement: "Eu uso uma variedade de diferentes estratégias pedagógicas para permitir que os alunos comparem criticamente e combinem de forma significativa informações de diferentes fontes. Eu ensino os alunos a citar fontes apropriadamente"
            }, {
                id: "6.2",
                name: "Comunicação e colaboração digital",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Usando estrategicamente uma variedade de estratégias pedagógicas para promover a comunicação digital e a colaboração dos alunos",
                proficient_statement: "Eu uso uma variedade de diferentes estratégias pedagógicas nas quais os alunos usam tecnologias digitais para comunicação e colaboração. Apoio e encorajo os alunos a usar tecnologias digitais para participar de discursos públicos e a usar tecnologias digitais de forma ativa e consciente para a participação cívica."
            }, {
                id: "6.3",
                name: "Criação de conteúdo digital",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Usando estrategicamente uma variedade de estratégias pedagógicas para promover a criação de conteúdo digital pelos alunos",
                proficient_statement: "Eu uso uma variedade de diferentes estratégias pedagógicas para permitir que os alunos se expressem digitalmente, por exemplo, contribuindo para wikis ou blogs, usando ePortfolios para suas criações digitais. Eu capacito os alunos a entender o conceito de direitos autorais e licenças e como reutilizar o conteúdo digital de forma adequada."
            }, {
                id: "6.4",
                name: "Uso responsável",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Apoiar pedagogicamente o uso de tecnologias digitais pelos alunos para garantir seu bem-estar",
                proficient_statement: "Desenvolvo estratégias para prevenir, identificar e responder ao comportamento digital que afeta negativamente a saúde e o bem-estar dos alunos (por exemplo, cyberbullying) Encorajo os alunos a assumir uma atitude positiva em relação às tecnologias digitais, estando cientes de possíveis riscos e limites, mas também confiantes de que podem gerenciá-los para colher os benefícios."
            }, {
                id: "6.5",
                name: "Resolução de problemas digitais",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Usando estrategicamente uma variedade de estratégias pedagógicas para promover a resolução de problemas digitais dos alunos",
                proficient_statement: "Eu uso uma variedade de diferentes estratégias pedagógicas para permitir que os alunos apliquem sua competência digital a novas situações ou em novos contextos. Encorajo os alunos a refletir sobre os limites de sua competência digital e os ajudo a identificar estratégias adequadas para desenvolvê-la ainda mais."
            },
        ]
    }, {
        id: "5",
        name: "Líder",
        icon: "",
        cor: "",
        img_url: "levels/c1.png",
        description: "Os líderes têm uma abordagem consistente e abrangente para o uso de tecnologias digitais para aprimorar as práticas pedagógicas e profissionais. Contam com um amplo repertório de estratégias digitais, das quais sabem escolher a mais adequada para cada situação.",
        subdesc: "Eles continuamente refletem e desenvolvem suas práticas. Trocando com os colegas, eles se mantêm atualizados sobre novos desenvolvimentos e ideias. São uma fonte de inspiração para outros, a quem transmitem os seus conhecimentos.",
        sigla: "C1",
        subareas: [
            {
                id: "1.1",
                name: "Comunicação Organizacional",
                cor: "area1",
                icon: "mdi-account-group-outline",
                main_statement: "Avaliar e discutir estratégias de comunicação",
                proficient_statement: "Eu avalio, reflito e discuto de forma colaborativa como as tecnologias digitais são usadas de forma eficaz para a comunicação organizacional e individual. Eu uso tecnologias digitais para tornar os procedimentos administrativos mais transparentes para os alunos e/ou pais e para permitir que eles façam escolhas informadas sobre futuras prioridades de aprendizagem."
            }, {
                id: "1.2",
                name: "Colaboração Profissional",
                cor: "area1",
                icon: "mdi-notebook-check-outline",
                main_statement: "Usar tecnologias digitais para refletir e aprimorar práticas e competências",
                proficient_statement: "Utilizo o conhecimento e os recursos, gerados nas redes colaborativas a que pertenço, para obter feedback e aprimorar minhas competências e ampliar meu repertório de práticas digitais."
            }, {
                id: "1.3",
                name: "Prática reflexiva",
                cor: "area1",
                icon: "mdi-account-group",
                main_statement: "Refletindo colaborativamente e aprimorando a prática pedagógica em geral",
                proficient_statement: "Eu sigo a pesquisa atual sobre ensino inovador e integro os resultados da pesquisa em minha prática. Eu avalio, reflito e discuto de forma colaborativa políticas e práticas organizacionais relacionadas ao uso de tecnologias digitais. Eu ajudo colegas no desenvolvimento de sua competência digital."
            }, {
                id: "1.4",
                name: "Desenvolvimento Profissional Contínuo Digital",
                cor: "area1",
                icon: "mdi-desktop-mac-dashboard",
                main_statement: "Uso crítico e estratégico da internet para DPC",
                proficient_statement: "Eu consulto uma variedade de possíveis oportunidades de treinamento online e seleciono aquelas que melhor se adaptam às minhas necessidades de desenvolvimento, estilo de aprendizagem e restrições de tempo. Participo ativamente de oportunidades de treinamento on-line e contribuo para melhorá-las e orientar outras pessoas a fazerem escolhas apropriadas, fornecendo feedback."
            }, {
                id: "2.1",
                name: "Seleção de recursos digitais",
                cor: "area2",
                icon: "mdi-reflect-vertical",
                main_statement: "Identificar e avaliar de forma abrangente os recursos adequados, considerando todos os aspectos relevantes",
                proficient_statement: "Para além dos motores de busca, utilizo várias outras fontes, por exemplo, plataformas colaborativas, repositórios oficiais, etc. Avalio a fiabilidade e adequação dos conteúdos com base numa combinação de critérios, verificando também a sua precisão e neutralidade. Quando uso recursos em sala de aula, eu os contextualizo para os alunos, por exemplo, apontando sua fonte e possível viés."
            }, {
                id: "2.2",
                name: "Criação e modificação de conteúdo digital",
                cor: "area2",
                icon: "mdi-account-group-outline",
                main_statement: "Criar, co-criar e modificar recursos de acordo com o contexto de aprendizagem , usando uma variedade de estratégias avançadas",
                proficient_statement: "Eu crio e modifico atividades de aprendizagem digital complexas e interativas, por exemplo planilhas interativas, avaliações online, atividades de aprendizagem colaborativa online (por exemplo, wikis, blogs), jogos, aplicativos, visualizações. Eu co-crio recursos de aprendizagem com colegas."
            }, {
                id: "2.3",
                name: "Gerenciar, proteger e compartilhar recursos digitais",
                cor: "area2",
                icon: "mdi-account-group-outline",
                main_statement: "Publicação digital de recursos autocriados",
                proficient_statement: "Eu compilo repositórios de conteúdo digital abrangentes e os disponibilizo para alunos ou outros educadores. Aplico licenças aos recursos que publico online."
            }, {
                id: "3.1",
                name: "Ensino",
                cor: "area3",
                icon: "mdi-account-group-outline",
                main_statement: "Orquestrar, monitorar e adaptar de forma flexível o uso de tecnologias digitais para aprimorar as estratégias pedagógicas.",
                proficient_statement: "Eu estruturei a sessão de aprendizagem para que diferentes atividades digitais (conduzidas pelo professor e pelo aluno) reforcem conjuntamente o objetivo da aprendizagem. Estruturo e gerencio conteúdos, contribuições e interação em ambiente digital. Avalio continuamente a eficácia das estratégias de ensino aprimoradas digitalmente e reviso minhas estratégias de acordo."
            }, {
                id: "3.2",
                name: "Orientação",
                cor: "area3",
                icon: "mdi-account-group-outline",
                main_statement: "Empregar tecnologias digitais de forma estratégica e proposital para fornecer orientação e suporte",
                proficient_statement: "Quando configuro atividades de aprendizagem em ambientes digitais, prevejo as necessidades de orientação dos alunos e atendo-as, por exemplo, com uma seção de ajuda ou FAQ ou com tutoriais em vídeo. Quando implemento atividades de aprendizagem digital em sala de aula, certifico-me de que posso monitorar (digitalmente) o comportamento do aluno, para que eu possa oferecer orientação quando necessário."
            }, {
                id: "3.3",
                name: "Aprendizagem colaborativa",
                cor: "area3",
                icon: "mdi-account-group-outline",
                main_statement: "Usando ambientes digitais para geração de conhecimento colaborativo dos alunos e avaliação por pares",
                proficient_statement: "Eu desenvolvo e gerencio diversas atividades de aprendizagem colaborativa, onde os alunos usam uma variedade de tecnologias para conduzir pesquisas de forma colaborativa, documentar descobertas e refletir sobre sua aprendizagem, tanto em ambientes de aprendizagem físicos quanto virtuais. Utilizo tecnologias digitais para avaliação por pares e como suporte para auto-regulação colaborativa e aprendizagem entre pares."
            }, {
                id: "3.4",
                name: "Aprendizagem autorregulada",
                cor: "area3",
                icon: "mdi-account-group-outline",
                main_statement: "Refletindo criticamente sobre as estratégias digitais usadas para promover a aprendizagem autorregulada",
                proficient_statement: "Reflito sobre a adequação de minhas estratégias digitais na promoção da aprendizagem autorregulada e aprimoro continuamente minhas estratégias."
            }, {
                id: "4.1",
                name: "Estratégias de avaliação",
                cor: "area4",
                icon: "mdi-account-group-outline",
                main_statement: "Selecionar, criar e adaptar formatos de avaliação digital de forma abrangente e crítica",
                proficient_statement: "Eu uso uma variedade de formatos de avaliação digitais e não digitais, alinhados com padrões de conteúdo e tecnologia, e estou ciente de seus benefícios e desvantagens. Reflito criticamente sobre meu uso de tecnologias digitais para avaliação e adapto minhas estratégias de acordo."
            }, {
                id: "4.2",
                name: "Análise de evidências",
                cor: "area4",
                icon: "mdi-account-group-outline",
                main_statement: "Usando dados digitais para refletir sobre padrões de aprendizagem e estratégias de ensino",
                proficient_statement: "Eu monitoro continuamente a atividade digital e reflito regularmente sobre os dados do aluno gravados digitalmente para identificar e reagir em tempo hábil a comportamentos críticos e problemas individuais. Avalio e sintetizo os dados gerados pelas várias tecnologias digitais que uso para refletir sobre a eficácia e adequação de diferentes estratégias de ensino e atividades de aprendizagem, em geral e para determinados grupos de alunos."
            }, {
                id: "4.3",
                name: "Feedback e Planejamento",
                cor: "area4",
                icon: "mdi-account-group-outline",
                main_statement: "Usando tecnologias digitais para personalizar feedback e suporte",
                proficient_statement: "Ajudo os alunos a identificar áreas de melhoria e desenvolvo planos de aprendizagem em conjunto para abordar essas áreas, com base nas evidências disponíveis. Uso os dados gerados pelas tecnologias digitais para refletir sobre quais estratégias de ensino funcionam bem para quais tipos de alunos e adapto minhas estratégias de ensino de acordo."
            }, {
                id: "5.1",
                name: "Capacitando os Alunos",
                cor: "area5",
                icon: "mdi-account-group-outline",
                main_statement: "Melhorando   a acessibilidade e a inclusão",
                proficient_statement: "Eu seleciono e utilizo estratégias pedagógicas digitais adequadas aos usos, competências, expectativas, atitudes, equívocos e usos indevidos da tecnologia digital dos alunos. Emprego princípios de design para aumentar a acessibilidade dos recursos e ambientes digitais utilizados no ensino, por exemplo, no que diz respeito à fonte, tamanho, cores, linguagem, layout, estrutura. Acompanho e reflito continuamente sobre a adequação das medidas implementadas para melhorar a acessibilidade e adapto as minhas estratégias em conformidade."
            }, {
                id: "5.2",
                name: "Diferenciação e personalização",
                cor: "area5",
                icon: "mdi-account-group-outline",
                main_statement: "Implementar de forma abrangente e crítica a aprendizagem diferenciada e personalizada",
                proficient_statement: "Eu desenvolvo, em colaboração com alunos e/ou pais, planos de aprendizagem personalizados que permitem que todos os alunos sigam suas necessidades e preferências individuais de aprendizagem, com a ajuda de recursos digitais apropriados.  Eu reflito sobre a eficácia das estratégias de ensino empregadas para promover a diferenciação e personalização e adapto minhas estratégias de ensino e atividades digitais de acordo."
            }, {
                id: "5.3",
                name: "Envolver os alunos ativamente",
                cor: "area5",
                icon: "mdi-account-group-outline",
                main_statement: "Implementar estratégias de forma abrangente e crítica para a aprendizagem ativa",
                proficient_statement: "Eu seleciono, projeto, emprego e orquestro o uso de tecnologias digitais no processo de aprendizagem de acordo com seu potencial para promover o envolvimento ativo, criativo e crítico dos alunos com o assunto. Reflito sobre a adequação das diferentes tecnologias digitais que uso para aumentar a aprendizagem ativa dos alunos e adapto minhas estratégias e escolhas de acordo."
            }, {
                id: "6.1",
                name: "Alfabetização informacional e midiática",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Promovendo de forma abrangente e crítica  a alfabetização informacional e midiática dos alunos ",
                proficient_statement: "Eu reflito criticamente sobre como minhas estratégias pedagógicas são adequadas para promover a informação dos alunos e a alfabetização midiática e adapto minhas estratégias de acordo."
            }, {
                id: "6.2",
                name: "Comunicação e colaboração digital",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Promover de forma abrangente e crítica  a comunicação digital e a colaboração dos alunos",
                proficient_statement: "Eu incorporo tarefas e atividades de aprendizado que exigem que os alunos usem as tecnologias digitais de maneira eficaz e responsável para comunicação, colaboração, cocriação de conhecimento e participação cívica. Reflito criticamente sobre a adequação de minhas estratégias pedagógicas para promover a comunicação e colaboração digital dos alunos e adapto minhas estratégias de acordo."
            }, {
                id: "6.3",
                name: "Criação de conteúdo digital",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Promovendo de forma abrangente e crítica a criação de conteúdo digital pelos alunos",
                proficient_statement: "Eu detecto e combato o plágio, por exemplo, usando tecnologias digitais. Reflito criticamente sobre a adequação de minhas estratégias pedagógicas para promover a expressão digital criativa dos alunos e adapto minhas estratégias de acordo."
            }, {
                id: "6.4",
                name: "Uso responsável",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Desenvolver de forma estratégica e crítica o uso responsável e seguro das tecnologias digitais pelos alunos",
                proficient_statement: "Permito que os alunos entendam os riscos e ameaças em ambientes digitais (por exemplo, roubo de identidade, fraude, perseguição, phishing) e como reagir adequadamente. Reflito criticamente sobre a adequação de minhas estratégias pedagógicas para promover o bem-estar digital dos alunos e adapto minhas estratégias de acordo."
            }, {
                id: "6.5",
                name: "Resolução de problemas digitais",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Promovendo de forma abrangente e crítica a resolução de problemas digitais dos alunos",
                proficient_statement: "Permito que os alunos busquem diferentes soluções tecnológicas para um problema, investiguem seus benefícios e desvantagens e criem uma nova solução ou produto de forma crítica e criativa. Reflito criticamente sobre a adequação de minhas estratégias pedagógicas para promover a competência digital dos alunos e expandir seu repertório de estratégias digitais, e adapto meus métodos de acordo."
            },
        ]
    }, {
        id: "6",
        name: "Pioneiro ",
        icon: "",
        cor: "",
        img_url: "levels/c2.png",
        description: "Pioneiros questionam a adequação das práticas digitais e pedagógicas contemporâneas, das quais eles próprios são Líderes . Eles estão preocupados com as restrições ou desvantagens dessas práticas e movidos pelo impulso de inovar ainda mais a educação. Os pioneiros experimentam tecnologias digitais altamente inovadoras e complexas e/ou desenvolvem novas abordagens pedagógicas.",
        subdesc: "Os pioneiros são uma espécie única e rara. Eles lideram a inovação e são um modelo para os professores mais jovens.",
        sigla: "C2",
        subareas: [
           {
                id: "1.1",
                name: "Comunicação Organizacional",
                cor: "area1",
                icon: "mdi-account-group-outline",
                main_statement: "Refletir e redesenhar estratégias de comunicação",
                proficient_statement: "Contribuo para o desenvolvimento de uma visão ou estratégia coerente sobre o uso eficaz e responsável das tecnologias digitais para a comunicação."
            }, {
                id: "1.2",
                name: "Colaboração Profissional",
                cor: "area1",
                icon: "mdi-notebook-check-outline",
                main_statement: "Usando tecnologias digitais para facilitar a prática inovadora",
                proficient_statement: "Utilizo comunidades digitais para colaborar com colegas em práticas pedagógicas inovadoras. Utilizo comunidades digitais para ajudar outros educadores a desenvolver as suas competências digitais e pedagógicas."
            }, {
                id: "1.3",
                name: "Prática reflexiva",
                cor: "area1",
                icon: "mdi-account-group",
                main_statement: "Políticas e práticas educacionais inovadoras",
                proficient_statement: "Desenvolvo, individualmente ou em colaboração com pares, uma visão ou estratégia para melhorar a prática educativa através da utilização de tecnologias digitais. Reflito e avalio com colegas e/ou investigadores diferentes práticas, métodos e políticas digitais, com vista ao desenvolvimento de métodos inovadores."
            }, {
                id: "1.4",
                name: "Desenvolvimento Profissional Contínuo Digital",
                cor: "area1",
                icon: "mdi-desktop-mac-dashboard",
                main_statement: "Usando a internet para fornecer CPD aos colegas",
                proficient_statement: "Eu uso tecnologias digitais para aconselhar colegas sobre práticas de ensino inovadoras, por exemplo, em comunidades profissionais, por meio de blogs pessoais ou desenvolvendo materiais de treinamento digital para eles."
            }, {
                id: "2.1",
                name: "Seleção de recursos digitais",
                cor: "area2",
                icon: "mdi-reflect-vertical",
                main_statement: "Promovendo o uso de recursos digitais na educação",
                proficient_statement: "Forneço orientação aos colegas sobre estratégias de pesquisa eficazes e repositórios e recursos adequados. Eu configuro meu próprio repositório de (links para) recursos, devidamente anotados e avaliados, e os disponibilizo para outros colegas usarem."
            }, {
                id: "2.2",
                name: "Criação e modificação de conteúdo digital",
                cor: "area2",
                icon: "mdi-account-group-outline",
                main_statement: "Criação de recursos digitais complexos e interativos",
                proficient_statement: "Eu crio meus próprios aplicativos ou jogos para apoiar meus objetivos educacionais."
            }, {
                id: "2.3",
                name: "Gerenciar, proteger e compartilhar recursos digitais",
                cor: "area2",
                icon: "mdi-account-group-outline",
                main_statement: "Publicação profissional de conteúdo digital autocriado",
                proficient_statement: "Eu anoto os recursos que compartilho digitalmente e permito que outros comentem, avaliem, modifiquem, reorganizem ou adicionem a eles."
            }, {
                id: "3.1",
                name: "Ensino",
                cor: "area3",
                icon: "mdi-account-group-outline",
                main_statement: "Usando tecnologias digitais para inovar estratégias de ensino",
                proficient_statement: "Eu ofereço cursos completos ou módulos de aprendizagem em um ambiente de aprendizagem digital. Experimento e desenvolvo novos formatos e métodos pedagógicos de ensino."
            }, {
                id: "3.2",
                name: "Orientação",
                cor: "area3",
                icon: "mdi-account-group-outline",
                main_statement: "Utilizar tecnologias digitais para inovar a oferta de orientação",
                proficient_statement: "Desenvolvo novas formas e formatos de orientação e suporte, utilizando tecnologias digitais."
            }, {
                id: "3.3",
                name: "Aprendizagem colaborativa",
                cor: "area3",
                icon: "mdi-account-group-outline",
                main_statement: "Usando tecnologias digitais para inovar a colaboração do aluno",
                proficient_statement: "Eu uso tecnologias digitais para inventar novos formatos de aprendizagem colaborativa."
            }, {
                id: "3.4",
                name: "Aprendizagem autorregulada",
                cor: "area3",
                icon: "mdi-account-group-outline",
                main_statement: "Desenvolver novos formatos digitais e/ou abordagens pedagógicas para a aprendizagem autorregulada",
                proficient_statement: "Desenvolvo novos formatos digitais e/ou abordagens pedagógicas para promover a aprendizagem autodirigida."
            }, {
                id: "4.1",
                name: "Estratégias de avaliação",
                cor: "area4",
                icon: "mdi-account-group-outline",
                main_statement: "Desenvolver formatos de avaliação inovadores , usando tecnologias digitais",
                proficient_statement: "Desenvolvo novos formatos digitais de avaliação, que refletem abordagens pedagógicas inovadoras e permitem a avaliação de competências transversais."
            }, {
                id: "4.2",
                name: "Análise de evidências",
                cor: "area4",
                icon: "mdi-account-group-outline",
                main_statement: "Geração e avaliação de dados inovadores",
                proficient_statement: "Eu implemento métodos avançados de geração e visualização de dados nas atividades digitais que emprego, por exemplo, com base na análise de aprendizagem. Eu avalio criticamente e discuto o valor e a validade de diferentes fontes de dados, bem como a adequação dos métodos estabelecidos para análise de dados."
            }, {
                id: "4.3",
                name: "Feedback e Planejamento",
                cor: "area4",
                icon: "mdi-account-group-outline",
                main_statement: "Usando dados digitais para avaliar e melhorar o ensino",
                proficient_statement: "Reflito, discuto, redesenho e inovo estratégias de ensino em resposta às evidências digitais que encontro, no que diz respeito às preferências e necessidades dos alunos, bem como à eficácia de diferentes intervenções de ensino e formatos de aprendizagem."
            }, {
                id: "5.1",
                name: "Capacitando os Alunos",
                cor: "area5",
                icon: "mdi-account-group-outline",
                main_statement: "Estratégias inovadoras para acessibilidade e inclusão",
                proficient_statement: "Reflito, discuto, redesenho e inovo estratégias para igualdade de acesso e inclusão na educação digital."
            }, {
                id: "5.2",
                name: "Diferenciação e personalização",
                cor: "area5",
                icon: "mdi-account-group-outline",
                main_statement: "Estratégias inovadoras de diferenciação e personalização, utilizando tecnologias digitais",
                proficient_statement: "Reflito, discuto, redesenho e inovo estratégias pedagógicas para personalizar a educação através do uso de tecnologias digitais."
            }, {
                id: "5.3",
                name: "Envolver os alunos ativamente",
                cor: "area5",
                icon: "mdi-account-group-outline",
                main_statement: "Estratégias digitais inovadoras para aprendizagem ativa",
                proficient_statement: "Eu reflito, discuto, redesenho e inovo estratégias pedagógicas para envolver ativamente os alunos."
            }, {
                id: "6.1",
                name: "Alfabetização informacional e midiática",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Usando formatos inovadores para promover a informação dos alunos e a alfabetização midiática",
                proficient_statement: "Eu reflito, discuto, redesenho e inovo estratégias pedagógicas para promover a alfabetização informacional e midiática dos alunos."
            }, {
                id: "6.2",
                name: "Comunicação e colaboração digital",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Usando formatos inovadores para promover a comunicação digital e a colaboração dos alunos",
                proficient_statement: "Eu reflito, discuto, redesenho e inovo estratégias pedagógicas para promover a comunicação e colaboração digital dos alunos."
            }, {
                id: "6.3",
                name: "Criação de conteúdo digital",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Usando formatos inovadores para promover a criação de conteúdo digital pelos alunos",
                proficient_statement: "Eu oriento os alunos na concepção, publicação e licenciamento de produtos digitais complexos, por exemplo, criação de sites, blogs, jogos ou aplicativos. Reflito, discuto, redesenho e inovo estratégias pedagógicas para fomentar a expressão e criação digital por parte dos alunos."
            }, {
                id: "6.4",
                name: "Uso responsável",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Desenvolver abordagens inovadoras para promover a capacidade dos alunos de usar tecnologias digitais para seu próprio bem-estar",
                proficient_statement: "Reflito, discuto, redesenho e inovo estratégias pedagógicas para promover a capacidade dos alunos de usar tecnologias digitais para seu próprio bem-estar."
            }, {
                id: "6.5",
                name: "Resolução de problemas digitais",
                cor: "area6",
                icon: "mdi-account-group-outline",
                main_statement: "Usando formatos inovadores para promover a resolução de problemas digitais dos alunos",
                proficient_statement: "Permito que os alunos apliquem sua competência digital de maneiras não convencionais a novas situações e criem novas soluções ou produtos de forma criativa. Eu reflito, discuto, redesenho e inovo estratégias pedagógicas para promover as habilidades de resolução de problemas digitais dos alunos."
            },
        ]
    },
];

export {
    levelList
};
