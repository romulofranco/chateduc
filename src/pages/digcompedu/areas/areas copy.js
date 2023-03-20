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
                        a1: "Eu uso canais básicos de comunicação digital, por exemplo, e-mail, mensagens instantâneas",
                        a2: "Identifico diferentes soluções digitais para comunicar",
                        b1: "Eu combino diferentes canais de comunicação, por exemplo, e-mail, mensagens instantâneas ou o site da organização educacional",
                        b2: "Analiso e avalio os canais de comunicação para escolher aqueles que considero mais eficazes para o meu propósito de comunicação",
                        c1: "Reflito, programo e adapto minhas estratégias de comunicação",
                        c2: "Eu planejo e adapto com confiança minha estratégia de comunicação digital usando uma variedade de tecnologias digitais para atender minhas necessidades de comunicação no contexto de meus interlocutores",
                        na: "Não utilizo canais de comunicação digitais"
                    }
                ]
            },
            {
                id: "1.2",
                name: "Ambientes de aprendizagem online",
                cor: "subarea1",
                icon: "mdi-notebook-check-outline",
                description: "Gestão de ambientes de aprendizagem online tendo em conta a gestão de dados e a ética.",
                questions: [
                    {
                        id: "1.2",
                        question: "Eu uso tecnologias digitais quando necessário para trabalhar em conjunto com outros colegas dentro e fora da minha organização educacional",
                        pontos: "1",
                        answers: [
                            {
                                a1: "Meus colegas e eu compartilhamos informações em drives compartilhados ou por e-mail",
                                a2: "Além de e-mail e unidades compartilhadas, troco materiais e ideias com meus colegas em ambientes colaborativos em rede (por exemplo, por meio de videoconferência ou por meio de ambientes virtuais de aprendizagem e outras ferramentas on-line)",
                                b1: "Troco ideias, experiências e materiais com colegas da minha instituição e de outras (por exemplo, numa rede profissional online)",
                                b2: "Experimento ferramentas inovadoras para colaboração online com colegas de dentro e fora da minha instituição",
                                c1: "Eu co-crio materiais com outros professores em uma rede online",
                                c2: "Coletivamente, crio, reutilizo e compartilho materiais com outros professores e alunos em uma rede online.",
                                na: "Não colaboro com outros professores"
                            },
                        ]
                    },
                ]
            },
            {
                id: "1.3",
                name: "Colaboração profissional",
                cor: "subarea1",
                icon: "mdi-account-group",
                description: "Usar tecnologias digitais para colaborar com outros educadores, partilhar e trocar conhecimento e experiência, bem como para inovar práticas pedagógicas de forma colaborativa.",
                questions: [
                    {
                        id: "1.3",
                        question: "Eu desenvolvo ativamente minha competência digital para ensinar",
                        pontos: "1",
                        answers: [
                            {
                                a1: "Aprimoro minha competência digital para ensinar por meio da reflexão e da experimentação",
                                a2: "Eu uso diferentes recursos para desenvolver minha competência digital de ensino",
                                b1: "Aproveito a rede de pares para me inspirar na aplicação de diferentes práticas de ensino digital",
                                b2: "Eu valido minhas práticas de ensino digital discutindo com meus colegas a melhor maneira de usar as tecnologias para inovar e melhorar minha prática educacional",
                                c1: "Aproveito a minha rede de pares para obter ideias e validação das minhas práticas, bem como frequentar diferentes cursos de desenvolvimento de competências digitais, online ou presenciais, para melhorar e certificar as minhas práticas de ensino",
                                c2: "Eu lidero inovação de ensino usando tecnologias digitais em minha instituição",
                                na: "Não estou trabalhando no desenvolvimento da minha competência digital para o ensino"
                            },
                        ]
                    },
                ]
            },
            {
                id: "1.4",
                name: "Tecnologias digitais e infraestrutura escolar",
                cor: "subarea1",
                icon: "mdi-desktop-mac-dashboard",
                description: "Tecnologias digitais e infraestrutura escolar. Utilização de tecnologias digitais (dispositivos, plataformas e software) e infraestruturas (acesso à Internet, rede local) disponíveis na minha escola para melhorar a educação.",
                questions: [
                    {
                        id: "1.4",
                        question: "Estou ciente e participo de oportunidades de treinamento online, por exemplo cursos online, MOOCs, webinars, conferências virtuais",
                        pontos: "1",
                        answers: [
                            {
                                a1: "Ainda não, mas estou interessado em realizar algum treinamento",
                                a2: "Já participei de treinamento online uma ou duas vezes",
                                b1: "Eu tentei várias oportunidades de treinamento online",
                                b2: "Participo de todos os tipos de treinamento online que podem me ajudar a melhorar minhas habilidades de ensino",
                                c1: "Eu desenvolvo e ofereço treinamento online para meus colegas em minha instituição",
                                c2: "Sou profissionalmente certificado no uso de diferentes tecnologias para ensino e aprendizagem.",
                                na: "Isso é algo que eu ainda não considerei"
                            },
                        ]
                    },
                ]
            }, {
                id: "1.5",
                name: "Prática reflexiva",
                cor: "subarea1",
                icon: "mdi-reflect-vertical",
                description: "Refletir individual e coletivamente, avaliar criticamente e desenvolver ativamente a própria prática pedagógica digital e a da comunidade educacional.",
                questions: [
                    {
                        id: "1.5",
                        question: "Reflexão sobre a atividade profissional individual e coletiva com a utilização de tecnologias digitais.",
                        pontos: "1",
                        answers: [
                            {
                                a1: "Ainda não, mas estou interessado em realizar algum treinamento",
                                a2: "Já participei de treinamento online uma ou duas vezes",
                                b1: "Eu tentei várias oportunidades de treinamento online",
                                b2: "Participo de todos os tipos de treinamento online que podem me ajudar a melhorar minhas habilidades de ensino",
                                c1: "Eu desenvolvo e ofereço treinamento online para meus colegas em minha instituição",
                                c2: "Sou profissionalmente certificado no uso de diferentes tecnologias para ensino e aprendizagem.",
                                na: "Isso é algo que eu ainda não considerei"
                            },
                        ]
                    },
                ]
            }, {
                id: "1.6",
                name: "Vida digital",
                cor: "subarea1",
                icon: "mdi-account-group-outline",
                description: "Contribuir de forma positiva e ética no mundo digital, considerando práticas digitais seguras e responsáveis.",
                questions: [
                    {
                        id: "1.6",
                        question: "Contribuo de forma positiva e ética no mundo digital, tendo em consideração práticas digitais seguras e responsáveis.",
                        pontos: "1",
                        answers: [
                            {
                                a1: "Estou ciente de que minha atividade digital pode ter implicações em minha própria reputação e na de minha escola (por exemplo, compartilhamento de informações privadas, uso de linguagem imprópria)",
                                a2: "Reconheço possíveis riscos e ameaças à minha reputação e à da minha escola em relação à minha atividade digital (por exemplo, privacidade, dados pessoais, bullying, desinformação).",
                                b1: "Eu uso medidas de mitigação para manter um perfil digital positivo (por exemplo, entender os termos de uso fornecidos, rastrear minha pegada digital, gerenciar minhas configurações de privacidade).",
                                b2: "Eu analiso e avalio minha pegada digital para ajustar meu comportamento e ajudar a curar minha própria reputação online e a de minha escola (por exemplo, rastrear minha pegada digital, gerenciar minhas configurações de privacidade,bloqueando conteúdo e pessoas suspeitas, aplicando as diretrizes da escola sobre atividades digitais).",
                                c1: "Apoio e aconselho colegas na criação e curadoria de perfis digitais éticos e responsáveis (por exemplo, apresentações, workshops, material de apoio, atividades).",
                                c2: "Eu inicio e promovo estratégias em nível de escola que encorajam funcionários e alunos a contribuir de forma positiva, responsável e ética em um mundo digital (por exemplo, fornecer dados transparentes e gerenciamento de conteúdo procedimentos, desenvolver um código de ética de conduta).",
                                na: "Não estou ciente desta competência"
                            },
                        ]
                    },
                ]
            }, {
                id: "1.7",
                name: "Aprendizagem profissional (através de tecnologias digitais)",
                cor: "subarea1",
                icon: "mdi-account-group-outline",
                description: "Utilizar as tecnologias digitais para a própria aprendizagem profissional.",
                questions: [
                    {
                        id: "1.7",
                        question: "Como você utiliza tecnologias digitais para a própria aprendizagem profissional?",
                        pontos: "1",
                        answers: [
                            {
                                a1: "Estou ciente de que as tecnologias digitais podem apoiar e aprimorar meu aprendizado profissional (por exemplo, ferramentas e recursos digitais, ambientes e cursos de aprendizado online).",
                                a2: "Eu tentei usar tecnologias digitais para meu aprendizado profissional (por exemplo, pesquisar informações online, participar de cursos online, usar aplicativos de aprendizado online, visitar bibliotecas e repositórios online).",
                                b1: "Eu uso várias tecnologias digitais para meu aprendizado profissional (por exemplo, discussões em um fórum, upload de material, dar e receber feedback, apresentar).",
                                b2: "Eu analiso e seleciono recursos e atividades de aprendizagem online que melhor atendem às minhas necessidades de aprendizagem (por exemplo, webinars, cursos interativos online, comunidades de aprendizagem online).",
                                c1: "Eu apoio e dou conselhos aos colegas sobre o uso de tecnologias digitais para sua aprendizagem profissional (por exemplo, comunidades de aprendizagem online, repositórios online, e-portfólios).",
                                c2: "Eu inicio e promovo um plano para apoiar o aprendizado profissional aprimorado digitalmente de meus colegas (por exemplo, fornecer webinars, treinamento online, comunidades online, repositório de recursos, crachás digitais)",
                                nd: "Não estou ciente desta competência"
                            },
                        ]
                    },
                ]
            }, {
                id: "1.8",
                name: "Aprendizagem profissional (sobre tecnologias digitais)",
                cor: "subarea1",
                icon: "mdi-account-group-outline",
                description: "Envolver-se em atividades de aprendizagem profissional para o desenvolvimento da competência digital dos professores.",
                questions: [
                    {
                        id: "1.8",
                        question: "Como é seu envolvimento em atividades de aprendizagem profissional para o desenvolvimento de competências digitais?",
                        pontos: "1",
                        answers: [
                            {
                                a1: "Estou ciente de que participar de atividades de aprendizagem profissional sobre o uso de tecnologias digitais pode desenvolver minha competência digital (por exemplo, webinars ou workshops sobre o uso de tecnologias digitais em ensinando e aprendendo).",
                                a2: "Frequentei atividades de aprendizagem profissional sobre o uso de tecnologias digitais para desenvolver minha competência digital (por exemplo, microensino, oficinas sobre o uso de tecnologias digitais no ensino e aprendizagem).",
                                b1: "Eu participo de várias atividades formais e informais de aprendizagem profissional sobre o uso de tecnologias digitais para desenvolver minha competência digital (por exemplo, treinamento prático sobre o uso pedagógico de tecnologias digitais tecnologias, abordagens de aprendizagem online, avaliação digital).",
                                b2: "Eu analiso e seleciono atividades de aprendizagem profissional sobre o uso de tecnologias digitais com base em minhas necessidades (por exemplo, uso uma ferramenta de autorreflexão sobre minha competência digital, defino metas de aprendizagem, planejo minha aprendizagem, refletir sobre meu aprendizado).",
                                c1: "Eu ofereço atividades de aprendizagem sobre o uso de tecnologias digitais e apoio os colegas no desenvolvimento de sua competência digital (por exemplo, work hops, sessões informais com colegas, microensino sobre o uso de tecnologias digitais).",
                                c2: "Eu contribuo para a concepção de programas de aprendizagem profissional que visam desenvolver a competência digital dos professores (por exemplo, aprendizagem baseada em projetos com o uso de tecnologias digitais, design de aprendizagem, intercâmbio de boas práticas).",
                                na: "Não estou ciente desta competência"
                            },
                        ]
                    },
                ]
            }, {
                id: "1.9",
                name: "Pensamento computacional",
                cor: "subarea1",
                icon: "mdi-account-group-outline",
                description: "Envolver-se com conceitos e processos de pensamento computacional como parte da competência digital do professor.",
                questions: [
                    {
                        id: "1.8",
                        question: "Como é seu envolvimento em atividades de aprendizagem profissional para o desenvolvimento de competências digitais?",
                        pontos: "1",
                        answers: [
                            {
                                a1: "Estou ciente dos conceitos e processos de pensamento computacional e como eles se relacionam com a competência digital (por exemplo, analisando um problema para encontrar uma solução, reconhecendo aspectos do pensamento computacional em volta de nós).",
                                a2: "Tentei usar processos de pensamento computacional para explorar soluções para um problema (por exemplo, decomposição de um problema, solução por meio de uma definição de etapas, análise de um conjunto de instruções aplicadas para uma solução).",
                                b1: "Eu uso várias ferramentas digitais para explorar soluções para um problema seguindo processos de pensamento computacional (por exemplo, ferramentas de programação visual, ferramentas de autoria e editores).",
                                b2: "Analiso e seleciono respostas geradas por algoritmos (por exemplo, classificação dos resultados de pesquisa, anúncios, como um robô pode responder).",
                                c1: "Eu conduzo atividades de pensamento computacional na minha escola para apoiar o desenvolvimento da competência digital de colegas e alunos (por exemplo, aulas de programação, competições, hackathons).",
                                c2: "Eu contribuo para o design e desenvolvimento de aplicativos digitais educacionais (por exemplo, jogos, aplicativos móveis, ferramentas de avaliação, personalização de ambientes virtuais).",
                                na: "Não estou ciente desta competência"
                            },
                        ]
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
        description: "",
        subareas: [
            {
                id: "2.1",
                name: "Pesquisa e seleção",
                description: "Utilização de critérios de pesquisa e seleção de modo a identificar recursos digitais para o ensino e a aprendizagem."
            },
            {
                id: "2.2",
                name: "Criação",
                description: "Criação de recursos educativos digitais que apoiem e melhorem os objetivos de ensino e aprendizagem."
            },
            {
                id: "2.3",
                name: "Modificação",
                description: "Modificação de recursos digitais existentes para apoiar e melhorar os objetivos de ensino e aprendizagem, respeitando as regras de direitos de autor e de licenciamento."
            },
            {
                id: "2.4",
                name: "Gestão e proteção",
                description: "Organização de conteúdos digitais, permitindo um acesso fácil e seguro aos alunos, encarregados de educação e professores, protegendo simultaneamente os dados pessoais e sensíveis."
            }, {
                id: "2.5",
                name: "Partilha",
                description: "Partilha de conteúdos digitais cumprindo as regras de direitos de autor e de propriedade intelectual."
            },
        ]
    },
    {
        id: "3",
        name: "Área 3 - Ensino e aprendizagem",
        icon: "",
        img_url: "areas/area3.jpg",
        cor: "area3",
        description: "",
        subareas: [
            {
                id: "3.1",
                name: "Ensino",
                description: "Conceção, desenvolvimento e implementação da aprendizagem com a utilização de tecnologias digitais para melhorar os resultados da aprendizagem."
            },
            {
                id: "3.2",
                name: "Orientação",
                description: "Utilização de tecnologias digitais de modo a proporcionar feedback e oportunidades de reflexão que resultem na adaptação das práticas de ensino e aprendizagem, tanto para os professores como para os alunos."
            },
            {
                id: "3.3",
                name: "Aprendizagem colaborativa",
                description: "Utilização de tecnologias digitais de modo a promover e melhorar a colaboração dos alunos na aprendizagem coletiva e individual."
            },
            {
                id: "3.4",
                name: "Aprendizagem autorregulada",
                description: "Utilização de tecnologias digitais para melhorar os processos de aprendizagem autorregulada dos alunos, promovendo a aprendizagem autónoma e ativa e tornando os alunos mais responsáveis pela sua própria aprendizagem, alterando assim do foco do ensino para a aprendizagem."
            }, {
                id: "3.5",
                name: "Tecnologias emergentes",
                description: "Utilização de tecnologias emergentes de forma ética para explorar novas experiências e conteúdos de aprendizagem."
            },
        ]
    },
    {
        id: "4",
        name: "Área 4 - Avaliação",
        icon: "",
        img_url: "areas/area4.jpg",
        cor: "area4",
        description: "",
        subareas: [
            {
                id: "4.1",
                name: "Estratégias de avaliação",
                description: "Utilização de tecnologias digitais para apoiar a avaliação sumativa e formativa da aprendizagem."
            }, {
                id: "4.2",
                name: "Análise de evidências",
                description: "Utilização de tecnologias digitais para recolher e analisar evidências sobre os processos e resultados da aprendizagem dos alunos."
            }, {
                id: "4.3",
                name: "Feedback e planificação",
                description: "Utilização de tecnologias digitais para dar feedback aos alunos, facilitando a planificação de ações adicionais."
            },
        ]
    }, {
        id: "5",
        name: "Área 5 - Capacitação dos aprendentes",
        icon: "",
        img_url: "areas/area5.jpg",
        cor: "area5",
        description: "",
        subareas: [
            {
                id: "5.1",
                name: "Acessibilidade e inclusão",
                description: "Garantia de acesso a recursos digitais e atividades de aprendizagem para todos os alunos, tendo em consideração eventuais restrições contextuais, físicas ou cognitivas na sua utilização."
            }, {
                id: "5.2",
                name: "Diferenciação e personalização",
                description: "Utilização de tecnologias digitais para dar resposta a diferentes necessidades e capacidades de aprendizagem, permitindo aos alunos evoluir a diferentes níveis e ritmos, bem como seguir percursos e objetivos individuais de aprendizagem."
            }, {
                id: "5.3",
                name: "Envolvimento ativo dos aprendentes",
                description: "Utilização de tecnologias digitais para promover o envolvimento ativo e criativo dos alunos na respetiva aprendizagem."
            }, {
                id: "5.4",
                name: "Aprendizagem mista",
                description: "Utilização de recursos e ferramentas digitais, ambientes e plataformas de aprendizagem online para assegurar a aprendizagem dos alunos dentro e fora da sala de aula."
            },
        ]
    }, {
        id: "6",
        name: "Área 6 - Ensino e aprendizagem",
        icon: "",
        img_url: "areas/area6.jpg",
        cor: "area6",
        description: "",
        subareas: [
            {
                id: "6.1",
                name: "Literacia da informação e de dados",
                description: "Incorporação de atividades de aprendizagem que exigem dos alunos a utilização de tecnologias digitais para pesquisar, avaliar e gerir informações e dados em ambientes digitais."
            },
            {
                id: "6.2",
                name: "Comunicação e colaboração",
                description: "Implementação de atividades de aprendizagem que requerem que os alunos comuniquem e colaborem utilizando tecnologias digitais."
            },
            {
                id: "6.3",
                name: "Criação de conteúdo",
                description: "Incorporação de atividades de aprendizagem que requerem que os alunos se expressem através da criação de artefactos digitais."
            },
            {
                id: "6.4",
                name: "Segurança e bem-estar",
                description: "Capacitação dos alunos para a utilização de tecnologias digitais com segurança, atenuando simultaneamente os riscos, para assegurar o bem-estar físico, psicológico e social."
            }, {
                id: "6.5",
                name: "Uso responsável",
                description: "Capacitação dos alunos para a utilização de tecnologias digitais de forma responsável e ética, gerindo a sua identidade digital, pegada digital e reputação digital."
            }, {
                id: "6.6",
                name: "Resolução de problemas",
                description: "Incorporação de atividades de aprendizagem, nas quais os alunos utilizam tecnologias digitais para compreender e resolver problemas."
            },
        ]
    },
];
export {
    areasList
};
