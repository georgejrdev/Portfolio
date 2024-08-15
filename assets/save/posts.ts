export interface Post {
    id:number
    color:string
    title:string
    info:string
    content:string
}

export interface AllPosts {
    pt: Post[]
    en: Post[]
}

export const allPosts:AllPosts = {
    "pt": [
        {
            id: 0,
            color: "#b6ba36",
            title: "Por que PhP é uma boa para iniciantes?",
            info: "12/06",
            content: "Com 3 argumentos eu vou mostrar o porque de php ser uma das melhores linguagens para iniciantes. <br> <br> <br> <strong>1 - Cliente - Servidor:</strong> <br> <br> O PHP ao mesmo tempo que separa bem o backend do frontend, também facilita entender as funções de cada um, forçando um entendimento mesmo que básico sobre servidores, já que é necessário um para rodar a linguagem, como o Apache. <br> <br> O PHP elimina a necessidade de API 's para fazer a comunicação, utilizando de formulários para se integrar ao frontend, que facilita um pouco para iniciantes, que mesmo escolhendo apenas uma área, vai ter uma noção básica de como funciona o outro lado. <br> <br> <br> <strong>2 - Arquitetura de software:</strong> <br>  <br> O Laravel (maior framework de PhP), introduz dois conceitos de forma simples, tanto de executar, quanto de entender: MVC e Migrations. <br> <br> O MVC no Laravel é quase que auto explicativo para qualquer iniciante, graças a relação entre front e backend citada no tópico anterior. Este modelo de arquitetura de software é bem versátil e pode ser utilizada nos mais diversos projetos e linguagens, introduzindo 3 conceitos: <br> <br> <strong>. Model -></strong> Onde o software faz a conexão com banco de dados, onde fica a lógica por trás do software e onde as regras de negócios são aplicadas, sendo o backend do software; <br> <br> <strong>. View -></strong> É onde fica localizado o frontend, as páginas que serão exibidas aos usuários; <br> <br> <strong>. Controller  -> </strong>Faz a conexão entre o VIEW e o MODEL, atuando como um negociador intermediário e garantindo uma comunicação eficiente entre ambas as partes. <br> <br> Já as Migrations são uma excelente forma de manter o controle do banco de dados na hora de desenvolver, além de ser uma documentação para o mesmo, as Migrations permitem ter um controle de versões, podendo fazer e desfazer alterações no banco de dados de forma fácil. <br> <br> <br> <strong>3 - Frameworks:</strong> <br> <br> Como já citado no tópico anterior, o PHP conta com um dos melhores frameworks do mundo de desenvolvimento: o Laravel; que além do MVC, conta com um ótimo router e um ORM sensacional, facilitando o acesso ao banco de dados. <br> <br> Também existem outras excelentes opções, como o CakePHP, que tem uma curva de aprendizado suave e contém muitos recursos de forma nativa (como recursos de segurança), e o framework Symfony, com um alto desempenho, modular, estável e com várias ferramentas para auxiliar no desempenho, como o Symfony Console."
        },
        {
            id: 1,
            color: "#228270",
            title: "Uma arquitetura simples",
            info: "16/07",
            content: "<h3>Já teve uma ideia e na hora de implementar ficou em duvida de qual arquitetura de software usar?</h3><br>A maioria das opções conhecidas parecem ser grandes e complexas demais para seu projeto simples. Você fica com dúvida se vale a pena ou não, e acaba com um código desorganizado, seja por ter usado uma arquitetura grande demais, ou por não ter usado nada, te deixando perdido na hora de modificar.<br><br><h4>Para estes casos, eu trago uma possível solução:</h4><br>Primeiro, é importante entender o <strong>conceito inicial</strong>. A arquitetura é pensada de forma <strong>modular</strong> e é separada em 2 grandes partes: o <strong>access</strong> e o <strong>auxiliar</strong>.<br><br>No <strong>access</strong>, é onde tudo que exporta do projeto deve ficar, como <strong>endpoints de api</strong>. É aqui que deve ser definida o que o projeto vai fornecer.<br><br>No <strong>auxiliar</strong>, é onde deve ficar todo o código que é responsável por fazer as <strong>tarefas definidas no access.</strong><br><br>Dentro de <strong>access</strong>, temos subpastas, como api, que armazena a lógica de endpoints, como um RestController do Spring<br><br>Dentro de <strong>auxiliar</strong>, temos subpastas, como: data, que armazena a lógica de comunicação com o banco de dados; processing, que armazena lógica de processamento de dados; types, que armazenam tipos próprios do projeto, e validation, que armazena lógica de validação.<br><br>Lembrando, que a arquitetura é pensada de forma <strong>modular</strong>, o importante aqui é entender o grau de separação da lógica de toda a aplicação. Tornando o projeto mais organizado.<br><br>Entendido o conceito, vamos agora pra uma <strong>demonstração.</strong> A linguagem usada na demonstração é Java.<br><br><hr><br> <span style='display: block; margin-left: 0px;'> <strong>access</strong></span> <span style='display: block; margin-left: 30px;'>api</span> <span style='display: block; margin-left: 0px;'><strong>auxiliar</strong></span> <span style='display: block; margin-left: 30px;'>processing</span> <span style='display: block; margin-left: 60px;'>MountPersonalJson.java</span> <span style='display: block; margin-left: 30px;'>data</span> <span style='display: block; margin-left: 60px;'>entities</span> <span style='display: block; margin-left: 60px;'>repositories</span> <span style='display: block; margin-left: 60px;'>services</span> <span style='display: block; margin-left: 30px;'>types</span> <span style='display: block; margin-left: 60px;'>enum_types</span> <span style='display: block; margin-left: 60px;'>dto</span> <span style='display: block; margin-left: 30px;'>validation</span> <span style='display: block; margin-left: 60px;'>NumberValidation.java</span><br><br><hr><br><br>Por fim, espero que tenha entendido a ideia por trás desta <strong>mini arquitetura</strong> e que possa fazer bom proveito dela nas <strong>suas</strong> aplicações."
        },
        {
            id: 2,
            color: "#f57d9f",
            title: "Sempre escolha o simples",
            info: "02/08",
            content: "<h3>Pare de transformar um projeto simples em algo desnecessariamente complexo.</h3><br>Você criou um novo projeto. Um site simples, com opção de cadastro. Você decide implementar uma verificação de email ao criar conta, então você escreve toda a lógica necessária pra isto.<br><br>Um tempo depois, você, no auge do seu tédio, resolve como todo bom programador, criar um sistema de livraria. Você cria todo o backend, define o banco de dados, e na hora de implementar o client web pensa: 'Meu Deus! Vou ter que implementar a validação do email de novo'.<br><br>Você fica pensativo, e lembra de uma palavrinha mágica que ouviu falar em um post aleatório do LinkedIn: microservices.<br><br>Você pensa que encontrou a solução para evitar a reescrita, acha que a partir de agora, sua produtividade vai aumentar, seus códigos serão lindamente reutilizáveis.<br><br>Mas você é só um iniciante. Sofre pra implementar, não consegue lidar de forma satisfatória com autenticação, e agora tem mais um projeto pra hospedar (boa sorte se não tiver dinheiro).<br><br>Você agora se encontra triste, frustrado e desanimado.<br><br><h4>Mas há uma abordagem melhor e mais simples que pode evitar toda essa frustração.</h4><br>Biblioteca. Sim isso mesmo. Esta simples abordagem pode resolver seu problema de forma rápida e simples.<br><br>A moda da vez muitas vezes ofusca outras soluções. Criar uma lib é algo trivial em qualquer linguagem. Em python por exemplo, você até pode publicar facilmente no pypi.<br><br>Agora sim, você escreve sua lógica de verificar emails numa lib, e pode reutilizala em qualquer outro projeto, caso queira modificar algo, só precisa modificar em um só lugar, além de que não precisa de uma hospedagem própria ou validações / autenticações próprias de uma API.<br><br><h4>Após tudo isso...</h4><br>Após tudo isso, o que eu quero dizer é: <strong>Não é uma discussão entre Bibliotecas vs Microservices.</strong><br><br>O caso acima é só um exemplo pra chegar numa conclusão: <strong>SEMPRE ESCOLHA O SIMPLES</strong>. <br><br>A complexidade a mais só deve existir se for a ultima opção. Nunca parta da ideia de que você vai precisar de algo a mais e que o simples é pouco para o seu caso. Sempre busque em fóruns, reddit, pessoas com os mesmos problemas que o seu. Avalie a sua situação com cuidado, sempre vá escalando degrau por degrau, nunca tente começar já no topo da escada.<br><br>No fim das contas, é o simples que vai te trazer produtividade, que vai poupar seu dinheiro, que vai te dar menos dores de cabeça para desenvolver.<br><br>Sempre que pensar numa solução para um problema, repense com a seguinte pergunta em mente: ' <strong>Isto é realmente necessário?</strong> '."
        },
        {
            id: 3,
            color: "#fff",
            title: "A linguagem do futuro",
            info: "00/00",
            content: "content"
        },
        {
            id: 4,
            color: "#92df03",
            title: "Uma boa ideia de um simples Workflow",
            info: "06/08",
            content: "<h3>Vem comigo entender que nem sempre precisa ficar 100 horas personalizando o ambiente pra codar melhor.</h3><br>Nesse amigável artigo, usarei meu workflow como exemplo para que você tire insights para aproveitar no teu. <br><br><h4>Meu Workflow:</h4><br>Primeiro vou dizer minha stack e algumas ferramentas que uso: <br> <br> <span style='display: block; margin-left: 0px;'>> <strong>Frontend:</strong> TypeScript + Nuxt 3.</span> <span style='display: block; margin-left: 0px;'>> <strong>Backend:</strong> Java + Spring Boot.</span> <span style='display: block; margin-left: 0px;'>> <strong>Mobile:</strong> React Native.</span> <span style='display: block; margin-left: 0px;'>> <strong>Database:</strong> MySQL.</span> <span style='display: block; margin-left: 0px;'>> <strong>Cloud:</strong> Vercel.</span> <span style='display: block; margin-left: 0px;'>> <strong>CI/CD:</strong> GitHub Actions.</span> <span style='display: block; margin-left: 0px;'>> <strong>IDE:</strong> VsCode.</span><br><br> <h4>Configurando a IDE:</h4><br>Primeiro ponto: extensões. Instalei apenas as necessárias para rodar meus projetos, como o pacote de Java e o ESLint.<br><br>É comum cairmos em um loop de busca por extensões que supostamente vão transformar nossa produtividade. Assistimos a vídeos intermináveis listando extensões 'mágicas', quando na verdade, o mais eficiente é instalar apenas o essencial. À medida que a necessidade surgir, aí sim devemos buscar extensões para resolver problemas específicos na IDE.<br><br>Também aproveitei pra remover da tela alguns elementos que eu nunca uso, como a maioria dos menus visiveis do VsCode (status bar, activity bar, etc), melhorando no foco e deixando uma tela limpa para focar no código.<br><br><h4>Database:</h4><br>Na maioria dos casos, acabo usando o MySQL, por este motivo, não vejo necessidade de alguma coisa além do MySQL Workbench pra gerenciar meus bancos de dados.<br><br><h4>Mobile:</h4><br>Em 100% dos casos, uso o Expo junto ao React Native, testando o app no navegador, ou no meu celular com o app Expo Go. <br><br>Usar o Expo elimina a necessidade de usar um emulador como o PESADÍSSIMO Android Studio.<br><br><h4>Fluxo de trabalho:</h4><br>Agora, vou listar os passos que costumo seguir ao desenvolver: <br> <br> <span style='display: block; margin-left: 0px;'>> Abro o projeto no VsCode.</span> <span style='display: block; margin-left: 0px;'>> Inicio o Git.</span> <span style='display: block; margin-left: 0px;'>> Inicio o projeto configurando as dependências iniciais (como pom.xml ou package.json).</span> <span style='display: block; margin-left: 0px;'>> Configuro o GitHub Actions no processo de CI/CD integrado com a Vercel.</span> <span style='display: block; margin-left: 0px;'>> Crio o código necessário.</span> <span style='display: block; margin-left: 0px;'>> Crio os testes.</span> <span style='display: block; margin-left: 0px;'>> Ativo o trigger configurado no GitHub Actions, que vai fazer o deploy se tudo estiver minimamente correto.</span><br><br><h4>Extra:</h4><br>Além do que foi dito acima, tem mais uma coisa: atalhos no terminal.<br><br>Como eu uso linux, é ridiculamente fácil configurar atalhos, então eu costumo encurtar comandos como o git push, git pull, npm run dev, etc. Com o tempo eu me acostumei com meus atalhos e agora digito um pouco menos.<br><br><h4>Conclusão:</h4><br>Existem diversas ferramentas que podem ser legais de integrar no seu workflow, como WakaTime, pra ter métricas de tempo codando e trabalhando em projetos. <br><br>Mas esse tipo de ferramenta eu considero como não essencial, que eu não dedicaria muito dos meus neurônios para utilizar e integrar, fazendo isso quando realmente não tem nada muito importante pra fazer."
        },
        {
            id: 5,
            color: "#b6baFF",
            title: "O básico de Git",
            info: "14/08",
            content: "<h3>Neste artigo, lhes trago o que considero o básico de Git. Comece a organizar seus projetos.</h3><br>Para começar, obviamente será necessário ter o Git instalado. Você pode fazer isso buscando 'Git' no Google e acessando a documentação oficial. Para Windows, você terá um instalador padrão do sistema; já para Linux e Mac, você precisará de um simples comando de terminal.<br><br><h4>Conceitos importantes:</h4><br>Antes de ir para os comandos, precisamos entender alguns conceitos:<br><br><strong>Branch</strong>: <span style='display: block; margin-left: 30px;'> Uma branch é uma linha independente de desenvolvimento dentro de um repositório Git, permitindo que você trabalhe em diferentes partes do projeto simultaneamente sem interferir no código principal. Cada branch pode conter uma série de commits separados do restante do projeto, o que facilita a experimentação, a adição de novas funcionalidades e a correção de bugs de maneira isolada. Quando as alterações em uma branch estão prontas, elas podem ser mescladas de volta à branch principal, frequentemente chamada de main ou master (prefira usar main, é o padrão do GitHub hoje).</span><br><br><strong>Stage</strong>: <span style='display: block; margin-left: 30px;'> A área de stage, é uma etapa intermediária onde as mudanças feitas no código são preparadas antes de serem confirmadas em um commit. Quando você adiciona arquivos à área de stage usando o comando 'git add', você está preparando essas alterações para serem incluídas no próximo commit. Esta área permite que você selecione quais mudanças deseja incluir no commit e quais devem ser deixadas de fora, oferecendo um controle mais refinado sobre o que é registrado no histórico do projeto. Além disso, a área de stage facilita a organização das alterações em commits mais coesos e significativos.</span><br><br><strong>Commit</strong>: <span style='display: block; margin-left: 30px;'> Um commit é um ponto de referência no histórico de um projeto de software, representando uma versão específica que inclui um ou mais arquivos em um determinado estado. Ele registra mudanças feitas no código, permitindo não apenas a preservação e recuperação de diferentes versões do projeto, mas também a navegação entre essas versões. Cada commit possui um identificador único e uma mensagem associada que descreve as alterações realizadas. Esse sistema facilita a gestão e rastreamento do progresso do desenvolvimento, a colaboração entre equipes e a reversão de mudanças indesejadas, garantindo que sempre se possa retornar a um estado anterior do projeto sempre que necessário. Além disso, commits permitem a comparação entre diferentes versões e a análise detalhada de alterações ao longo do tempo.</span><br><br><strong>Conexão Remota</strong>: <span style='display: block; margin-left: 30px;'> A conexão remota se dá pelo fato do Git poder ser integrado com plataformas como o GitHub, onde o projeto pode ser armazenado em nuvem.</span><br><br><strong>Push</strong>: <span style='display: block; margin-left: 30px;'> Push é uma ação, que 'empurra' o código para a conexão remota estabelecida. (funciona apenas se tiver uma conexão remota estabelecida com permissão para tal ação)</span><br><br><strong>Pull</strong>: <span style='display: block; margin-left: 30px;'> Ao contrário do push, o pull baixa a o projeto de uma conexão remota para o dispositivo local. (funciona apenas se tiver uma conexão remota estabelecida com permissão para tal ação)</span><br><br><strong>Clone</strong>: <span style='display: block; margin-left: 30px;'> Permite clonar um projeto de uma repositório remoto, desde que o mesmo seja publico. Diferente de Push e Pull, não necessita nem traz uma conexão remota junto a ele.</span><br><br><strong>Reset</strong>: <span style='display: block; margin-left: 30px;'> O comando 'reset' permite alterar o estado do repositório de várias maneiras, seja desfazendo commits recentes, movendo a branch atual para um estado anterior ou ajustando o índice de preparação. Dependendo da opção utilizada ('soft', 'mixed', 'hard'), ele pode manter ou descartar alterações no diretório de trabalho e no índice de preparação. O comando é uma ferramenta poderosa para reorganizar o histórico de commits e corrigir erros, mas deve ser usado com cuidado para evitar perda de dados.</span><br><br><h4>Sintaxe do Git: </h4><br><strong>Iniciando um repositório Git:</strong><br><br><span class='article-code'>git init</span><br><br><strong>Trocando a branch padrão</strong>:<br><br><span class='article-code'>git branch M main</span><br><br><strong>Adicionando arquivos a área de stage</strong>:<br><br><span class='article-code'>git add path/dos/arquivos<br>git add index.html<br>git add .</span><br><br><strong>Vendo o status atual do repositório</strong>:<br><br><span class='article-code'>git status</span><br><br><strong>Fazendo um commit</strong>:<br><br><span class='article-code'>git commit m 'Nome do commit'</span><br><br><strong>Adicionando uma conexão remota</strong>:<br><br><span class='article-code'>git remote add nome_da_conexao url_do_repositorio_online</span><br><br><strong>Enviando para a conexão remota</strong>:<br><br><span class='article-code'>git push nome_da_conexao main</span><br><br><strong>Baixando de uma conexão remota</strong>:<br><br><span class='article-code'>git pull nome_da_conexao main</span><br><br> <strong>Clonando um projeto</strong>:<br><br><span class='article-code'>git clone url_do_repostiorio</span><br><br> <strong>Vendo o histórico de mudanças</strong>:<br><br> <strong>Reset de um commit (mantendo mudanças no índice de preparação)</strong>:<br><br><span class='article-code'>git reset mixed id_do_commit</span><br><br> <strong>Reset de um commit (descartando todas as mudanças)</strong>:<br><br><span class='article-code'>git reset hard id_do_commit</span><br><br> <strong>Reset de um commit (mantendo mudanças no diretório de trabalho)</strong>:<br><br><span class='article-code'>git reset soft id_do_commit</span><br><br><h4>Conclusão:</h4><br>Ainda existem muitos outros comandos e conceitos a serem explorados no Git, mas acredito que com esse conhecimento aqui presente, você já estará dando um bom passo inicial rumo à melhoria na organização dos seus projetos."
        }
    ],
    "en": [
        {
            id: 0,
            color: "#b6ba36",
            title: "Why PHP is Good for Beginners?",
            info: "06/12",
            content: "With three arguments, I'll show why PHP is one of the best languages for beginners. <br> <br> <br> <strong>1 - Client - Server:</strong> <br> <br> PHP, while effectively separating backend from frontend, also helps understand the functions of each, forcing a basic understanding of servers since it's necessary to run the language, like Apache. <br> <br> PHP eliminates the need for APIs to communicate, using forms to integrate with the frontend, which slightly facilitates beginners who, even choosing only one area, will have a basic notion of how the other side works. <br> <br> <br> <strong>2 - Software Architecture:</strong> <br> <br> Laravel (the major PHP framework) introduces two concepts simply, both in execution and understanding: MVC and Migrations. <br> <br> The MVC in Laravel is almost self-explanatory for any beginner, thanks to the relationship between front and backend mentioned in the previous topic. This software architecture model is versatile and can be used in various projects and languages, introducing three concepts: <br> <br> <strong>. Model -></strong> Where the software connects to the database, where the software logic is located and where business rules are applied, being the backend of the software; <br> <br> <strong>. View -></strong> Where the frontend is located, the pages displayed to users; <br> <br> <strong>. Controller  -> </strong> Acts as a negotiator between VIEW and MODEL, ensuring efficient communication between both parts. <br> <br> Migrations are an excellent way to maintain control over the database during development, as well as serve as documentation, allowing version control and easy alteration of the database. <br> <br> <br> <strong>3 - Frameworks:</strong> <br> <br> As mentioned in the previous topic, PHP has one of the best development frameworks in the world: Laravel; which, besides MVC, has a great router and a fantastic ORM, making database access easier. <br> <br> There are also other excellent options, such as CakePHP, which has a gentle learning curve and contains many native features (like security features), and the Symfony framework, known for high performance, modularity, stability, and various performance-enhancing tools like Symfony Console."
        },
        {
            id: 1,
            color: "#228270",
            title: "A Simple Architecture",
            info: "07/16",
            content: "<h3>Have you ever had an idea and when implementing it, doubted which software architecture to use?</h3><br>Most known options seem too large and complex for your simple project. You hesitate whether it's worth it or not, and end up with disorganized code, either by using a too large architecture or by not using any, leaving you lost when modifying.<br><br><h4>For these cases, here's a possible solution:</h4><br>First, it's important to understand the <strong>initial concept</strong>. The architecture is designed in a <strong>modular</strong> way and is divided into 2 major parts: <strong>access</strong> and <strong>auxiliary</strong>.<br><br>In <strong>access</strong>, everything that exports from the project should be placed, such as <strong>API endpoints</strong>. This is where it should be defined what the project will provide.<br><br>In <strong>auxiliary</strong>, everything that is responsible for performing the <strong>tasks defined in access</strong> should be placed.<br><br>Within <strong>access</strong>, we have subfolders like api, which stores the logic for endpoints, like a RestController in Spring.<br><br>Within <strong>auxiliary</strong>, we have subfolders like: data, which stores the logic for database communication; processing, which stores data processing logic; types, which stores custom project types; and validation, which stores validation logic.<br><br>Remember, the architecture is designed in a <strong>modular</strong> way, so the key point is understanding the degree of separation of the application's logic. Making the project more organized.<br><br>Understanding the concept, let's go to a <strong>demonstration.</strong> The language used in the demonstration is Java.<br><br><hr><br> <span style='display: block; margin-left: 0px;'> <strong>access</strong></span> <span style='display: block; margin-left: 30px;'>api</span> <span style='display: block; margin-left: 0px;'><strong>auxiliary</strong></span> <span style='display: block; margin-left: 30px;'>processing</span> <span style='display: block; margin-left: 60px;'>MountPersonalJson.java</span> <span style='display: block; margin-left: 30px;'>data</span> <span style='display: block; margin-left: 60px;'>entities</span> <span style='display: block; margin-left: 60px;'>repositories</span> <span style='display: block; margin-left: 60px;'>services</span> <span style='display: block; margin-left: 30px;'>types</span> <span style='display: block; margin-left: 60px;'>enum_types</span> <span style='display: block; margin-left: 60px;'>dto</span> <span style='display: block; margin-left: 30px;'>validation</span> <span style='display: block; margin-left: 60px;'>NumberValidation.java</span><br><br><hr><br><br>Finally, I hope you understand the idea behind this <strong>mini architecture</strong> and that you can make good use of it in your <strong>applications</strong>."
        },
        {
            id: 2,
            color: "#f57d9f",
            title: "Always Choose the Simple",
            info: "08/02",
            content: "<h3>Stop Turning a Simple Project into Something Unnecessarily Complex.</h3><br>You created a new project. A simple site, with a signup option. You decide to implement an email verification when creating an account, so you write all the necessary logic for this.<br><br>Some time later, you, at the peak of your boredom, decide, like every good programmer, to create a library system. You build the entire backend, define the database, and when implementing the web client, you think: 'My God! I have to implement email validation again'.<br><br>You think you found the solution to avoid rewriting, and you believe that from now on, your productivity will increase, and your code will be beautifully reusable.<br><br>But you are just a beginner. You struggle to implement it, can't handle authentication satisfactorily, and now have another project to host (good luck if you don't have money).<br><br>You now find yourself sad, frustrated, and disheartened.<br><br><h4>But there's a better and simpler approach that can prevent all this frustration.</h4><br>A library. Yes, that's right. This simple approach can quickly and easily solve your problem.<br><br>Fads often overshadow other solutions. Creating a library is trivial in any language. For example, in Python, you can even publish it easily on PyPI.<br><br>Now, you write your email verification logic in a library and can reuse it in any other project. If you need to modify something, you only need to change it in one place. Plus, you don't need your own hosting or API authentication/validation.<br><br><h4>After all this...</h4><br>After all this, what I want to say is: <strong>This is not a debate between Libraries vs Microservices.</strong><br><br>The above case is just an example to reach a conclusion: <strong>ALWAYS CHOOSE THE SIMPLE</strong>. <br><br>Additional complexity should only exist if it is the last option. Never start with the idea that you need something more and that the simple is insufficient for your case. Always seek advice in forums, Reddit, and from people with similar problems. Assess your situation carefully, always scale up step by step, and never try to start at the top of the ladder.<br><br>In the end, it's the simple approach that will bring you productivity, save you money, and give you fewer headaches during development.<br><br>Whenever thinking of a solution to a problem, reconsider with the following question in mind: '<strong>Is this really necessary?</strong>'."
        },
        {
            id: 3,
            color: "#fff",
            title: "The Language of the Future",
            info: "00/00",
            content: "content"
        },
        {
            id: 4,
            color: "#92df03",
            title: "A Good Idea for a Simple Workflow",
            info: "08/06",
            content: "<h3>Let's Understand That You Don't Always Need to Spend 100 Hours Customizing the Environment to Code Better.</h3><br>In this friendly article, I'll use my workflow as an example so you can gain insights for your own. <br><br><h4>My Workflow:</h4><br>First, I'll list my stack and some tools I use: <br> <br> <span style='display: block; margin-left: 0px;'>> <strong>Frontend:</strong> TypeScript + Nuxt 3.</span> <span style='display: block; margin-left: 0px;'>> <strong>Backend:</strong> Java + Spring Boot.</span> <span style='display: block; margin-left: 0px;'>> <strong>Mobile:</strong> React Native.</span> <span style='display: block; margin-left: 0px;'>> <strong>Database:</strong> MySQL.</span> <span style='display: block; margin-left: 0px;'>> <strong>Cloud:</strong> Vercel.</span> <span style='display: block; margin-left: 0px;'>> <strong>CI/CD:</strong> GitHub Actions.</span> <span style='display: block; margin-left: 0px;'>> <strong>IDE:</strong> VsCode.</span><br><br> <h4>Configuring the IDE:</h4><br>The first point: extensions. I installed only the necessary ones to run my projects, like the Java package and ESLint.<br><br>It's common to fall into a loop searching for extensions that supposedly will transform our productivity. We watch endless videos listing 'magical' extensions, when in reality, the most efficient approach is to install only the essentials. As the need arises, we should then search for extensions to solve specific issues in the IDE.<br><br>I also took the opportunity to remove some elements from the screen that I never use, such as most visible menus in VsCode (status bar, activity bar, etc.), improving focus and leaving a clean screen to concentrate on the code.<br><br><h4>Database:</h4><br>In most cases, I end up using MySQL, so I don’t see the need for anything beyond MySQL Workbench to manage my databases.<br><br><h4>Mobile:</h4><br>In 100% of cases, I use Expo with React Native, testing the app in the browser or on my phone with the Expo Go app. <br><br>Using Expo eliminates the need for a heavy emulator like Android Studio.<br><br><h4>Workflow:</h4><br>Now, I’ll list the steps I usually follow when developing: <br> <br> <span style='display: block; margin-left: 0px;'>> Open the project in VsCode.</span> <span style='display: block; margin-left: 0px;'>> Start Git.</span> <span style='display: block; margin-left: 0px;'>> Start the project by setting up initial dependencies (like pom.xml or package.json).</span> <span style='display: block; margin-left: 0px;'>> Configure GitHub Actions for CI/CD integrated with Vercel.</span> <span style='display: block; margin-left: 0px;'>> Write the necessary code.</span> <span style='display: block; margin-left: 0px;'>> Write tests.</span> <span style='display: block; margin-left: 0px;'>> Trigger GitHub Actions to deploy if everything is minimally correct.</span><br><br><h4>Extra:</h4><br>In addition to the above, there’s one more thing: terminal shortcuts.<br><br>Since I use Linux, it's ridiculously easy to set up shortcuts, so I tend to shorten commands like git push, git pull, npm run dev, etc. Over time I got used to my shortcuts and now I type a bit less.<br><br><h4>Conclusion:</h4><br>There are various tools that might be interesting to integrate into your workflow, such as WakaTime, for tracking coding and working time on projects. <br><br>But I consider such tools as non-essential, which I wouldn’t dedicate too much thought to integrating and would only do so when there’s nothing more important to address."
        },
        {
            id: 5,
            color: "#b6baFF",
            title: "The basics of Git",
            info: "08/14",
            content: "<h3>In this article, I bring you what I consider the basics of Git. Start organizing your projects.</h3><br>To get started, you'll obviously need to have Git installed. You can do this by searching for 'Git' on Google and accessing the official documentation. For Windows, you'll have a standard system installer; for Linux and Mac, you'll need a simple terminal command.<br><br><h4>Important Concepts:</h4><br>Before diving into the commands, we need to understand some concepts:<br><br><strong>Branch</strong>: <span style='display: block; margin-left: 30px;'> A branch is an independent line of development within a Git repository, allowing you to work on different parts of the project simultaneously without interfering with the main code. Each branch can contain a series of commits separate from the rest of the project, making it easier to experiment, add new features, and fix bugs in isolation. When the changes in a branch are ready, they can be merged back into the main branch, often called main or master (prefer to use main, as it's the standard on GitHub today).</span><br><br><strong>Stage</strong>: <span style='display: block; margin-left: 30px;'> The staging area is an intermediate step where changes made to the code are prepared before being committed. When you add files to the staging area using the 'git add' command, you are preparing those changes to be included in the next commit. This area allows you to select which changes you want to include in the commit and which should be left out, giving you finer control over what is recorded in the project's history. Additionally, the staging area helps organize changes into more cohesive and meaningful commits.</span><br><br><strong>Commit</strong>: <span style='display: block; margin-left: 30px;'> A commit is a reference point in the history of a software project, representing a specific version that includes one or more files in a particular state. It records changes made to the code, allowing not only the preservation and recovery of different versions of the project but also navigation between these versions. Each commit has a unique identifier and an associated message describing the changes made. This system facilitates managing and tracking development progress, collaborating among teams, and reverting unwanted changes, ensuring that you can always return to a previous state of the project when necessary. Additionally, commits allow for comparing different versions and analyzing changes in detail over time.</span><br><br><strong>Remote Connection</strong>: <span style='display: block; margin-left: 30px;'> The remote connection allows Git to integrate with platforms like GitHub, where the project can be stored in the cloud.</span><br><br><strong>Push</strong>: <span style='display: block; margin-left: 30px;'> Push is an action that 'pushes' the code to the established remote connection. (This works only if you have an established remote connection with permission for this action.)</span><br><br><strong>Pull</strong>: <span style='display: block; margin-left: 30px;'> Unlike push, pull downloads the project from a remote connection to the local device. (This works only if you have an established remote connection with permission for this action.)</span><br><br><strong>Clone</strong>: <span style='display: block; margin-left: 30px;'> Cloning allows you to copy a project from a remote repository, provided it is public. Unlike Push and Pull, it doesn't require or bring a remote connection along with it.</span><br><br><strong>Reset</strong>: <span style='display: block; margin-left: 30px;'> The 'reset' command allows you to change the state of the repository in various ways, such as undoing recent commits, moving the current branch to a previous state, or adjusting the staging index. Depending on the option used ('soft', 'mixed', 'hard'), it can keep or discard changes in the working directory and the staging index. The command is a powerful tool for reorganizing commit history and fixing errors, but it should be used with care to avoid data loss.</span><br><br><h4>Git Syntax:</h4><br><strong>Initializing a Git repository:</strong><br><br><span class='article-code'>git init</span><br><br><strong>Changing the default branch:</strong><br><br><span class='article-code'>git branch M main</span><br><br><strong>Adding files to the staging area:</strong><br><br><span class='article-code'>git add path/to/files<br>git add index.html<br>git add .</span><br><br><strong>Viewing the current status of the repository:</strong><br><br><span class='article-code'>git status</span><br><br><strong>Making a commit:</strong><br><br><span class='article-code'>git commit m 'Commit message'</span><br><br><strong>Adding a remote connection:</strong><br><br><span class='article-code'>git remote add connection_name repository_url</span><br><br><strong>Pushing to the remote connection:</strong><br><br><span class='article-code'>git push connection_name main</span><br><br><strong>Pulling from a remote connection:</strong><br><br><span class='article-code'>git pull connection_name main</span><br><br><strong>Cloning a project:</strong><br><br><span class='article-code'>git clone repository_url</span><br><br><strong>Viewing the change history:</strong><br><br><span class='article-code'>git log</span><br><br><strong>Resetting a commit (keeping changes in the staging index):</strong><br><br><span class='article-code'>git reset mixed commit_id</span><br><br><strong>Resetting a commit (discarding all changes):</strong><br><br><span class='article-code'>git reset hard commit_id</span><br><br><strong>Resetting a commit (keeping changes in the working directory):</strong><br><br><span class='article-code'>git reset soft commit_id</span><br><br><h4>Conclusion:</h4><br>There are still many other commands and concepts to explore in Git, but I believe that with the knowledge presented here, you'll be taking a solid first step towards improving the organization of your projects."
        }
    ]
}