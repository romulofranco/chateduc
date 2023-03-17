const mainText = [{
        id: 1,
        description: "Adaptamos a SELFIEforTEACHERS dentro desta aplicação para facilitar a execução de Autoreflexão e também para a promoção de competências digitais nos Professores. Esta é uma ferramenta online que visa apoiar os professores dos ensinos básico e secundário no desenvolvimento da sua competência digital e na utilização de tecnologias digitais na sua atividade profissional. Ao passarem por um processo de autorreflexão, os professores podem aprender mais sobre as competências digitais que possuem e identificar os seus pontos fortes, bem como as lacunas que podem melhorar.",
        img_url: "checkin/checkin.png"
    }];


const checkinList = [
    {
        id: "1",
        checkin_date: "2022-04-23T18:25:43",
        img_url: "levels/a2.png",
        prof_expected: "Recém-chegado",
        prof_result: "Explorador",
        grade: "24/192",
        main_statement: "Utilizar pouco as tecnologias digitais para a comunicação",
        proficient_statement: "Estou ciente dos limites da minha própria competência digital e das minhas necessidades de formação.",
        subareas: [
            {
                id: "1.1",
                name: "Comunicação institucional",
                cor: "subarea1",
                icon: "mdi-account-group-outline",
                description: "Usar tecnologias digitais para melhorar a comunicação institucional com os alunos, encarregados de educação e terceiros. Contribuir, colaborativamente, para desenvolver e melhorar as estratégias decomunicação institucional."
            },
            {
                id: "1.2",
                name: "Ambientes de aprendizagem online",
                cor: "subarea1",
                icon: "mdi-notebook-check-outline",
                description: "Gestão de ambientes de aprendizagem online tendo em conta a gestão de dados e a ética."
            },
            {
                id: "1.3",
                name: "Colaboração profissional",
                cor: "subarea1",
                icon: "mdi-account-group",
                description: "Usar tecnologias digitais para colaborar com outros educadores, partilhar e trocar conhecimento e experiência, bem como para inovar práticas pedagógicas de forma colaborativa."
            },
            {
                id: "1.4",
                name: "Tecnologias digitais e infraestrutura escolar",
                cor: "subarea1",
                icon: "mdi-desktop-mac-dashboard"
            }, {
                id: "1.5",
                name: "Prática reflexiva",
                cor: "subarea1",
                icon: "mdi-reflect-vertical"
            }, {
                id: "1.6",
                name: "Vida digital",
                cor: "subarea1",
                icon: "mdi-account-group-outline"
            }, {
                id: "1.7",
                name: "Aprendizagem profissional (através de tecnologias digitais)",
                cor: "subarea1",
                icon: "mdi-account-group-outline"
            }, {
                id: "1.8",
                name: "Aprendizagem profissional (sobre tecnologias digitais)",
                cor: "subarea1",
                icon: "mdi-account-group-outline"
            }, {
                id: "1.9",
                name: "Pensamento computacional",
                cor: "subarea1",
                icon: "mdi-account-group-outline"
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
            }
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
    checkinList,
    mainText
};
