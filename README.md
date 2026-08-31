# Aula de Introdução ao Framework Bootstrap

<p align="center">
  <a href="#">
    <img src="https://img.shields.io/badge/Aula-HTML-brightgreen.svg" alt="HTML">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/Aula-Bootstrap-blue.svg" alt="Bootstrap">
  </a>
  <a href="#">
    <img src="https://img.shields.io/badge/Aula-Frameworks_CSS-orange.svg" alt="Frameworks CSS">
  </a>
</p>

## Índice

* [Introdução](#introdução)
* [Recursos Utilizados](#recursos-utilizados)
* [Fundamentos Teóricos](#fundamentos-teóricos)
* [Objetivo da Aula](#objetivo-da-aula)
* [Desenvolvimento do Projeto](#desenvolvimento-do-projeto)
* [Desenvolva Novos Projetos](#desenvolva-novos-projetos)
* [Referências e Materiais de Apoio](#referências-e-materiais-de-apoio)

## Introdução

<a href="#índice"><img align="right" width="15" height="15" src="./docs/up-arrow.png" alt="Voltar para topo"></a>

O objetivo deste tutorial é introduzir os conceitos fundamentais do framework CSS Bootstrap por meio do desenvolvimento de um projeto prático, que servirá como exemplo prático da camada de apresentação. Esse projeto será usado na disciplina GAC116 - Programação Web da Universidade Federal de Lavras (UFLA).

O projeto proposto consiste na criação de uma Página Pessoal. A página conterá apenas um HTML em que todas as informações relevantes sobre o dono da página estarão disponíveis lá. A página terá: foto de perfil, mini biografia, curso e informações gerais, habilidades (tecnologias e competências), projetos já desenvolvidos, interesses, contato, layout responsivo com Bootstrap e tema claro/escuro. A estilização do HTML será feita através das classes já prontas do Bootstrap 5 e serão utilizados alguns ícones da biblioteca FontAwesome.

A aula está organizada no formato de tutorial, permitindo que cada estudante replique em seu computador os conceitos e recursos apresentados. O código será desenvolvido gradualmente para evidenciar a evolução da solução. Isso facilita a compreensão de como as tecnologias HTML e Bootstrap se integram na construção de aplicações web.

## Recursos Utilizados

<a href="#índice"><img align="right" width="15" height="15" src="./docs/up-arrow.png" alt="Voltar para topo"></a>

A seguir estão listados os principais recursos empregados no desenvolvimento desta aula.

### Linguagens

* HTML - Responsável pela estrutura do conteúdo
    * [Link do curso da W3Schools](https://www.w3schools.com/html/default.asp)
* CSS - Responsável pela apresentação visual
    * [Link do curso da W3Schools](https://www.w3schools.com/css/default.asp)
* JavaScript - Responsável pelo comportamento e interatividade
    * [Link do curso da W3Schools](https://www.w3schools.com/js/default.asp)

### Bibliotecas

* FontAwesome - Biblioteca CSS para ícones
  * [Link do site do Fontawesome](https://fontawesome.com/)
  * [Link da documentação Fontawesome](https://docs.fontawesome.com/web/setup/get-started)
  * [Link do curso da W3Schools](https://www.w3schools.com/icons/fontawesome5_intro.asp)

### Frameworks

* Bootstrap - Framework CSS (versão 5.3)
  * [Link do site do Bootstrap](https://getbootstrap.com/)
  * [Link do curso da W3Schools](https://www.w3schools.com/bootstrap5/index.php)

### Ferramentas

* Visual Studio Code - Ambiente de Desenvolvimento Integrado - [Link](https://code.visualstudio.com/)
* Git - Sistema de controle de versão - [Link](https://git-scm.com/)
* Github - Plataforma de hospedagem e colaboração em projetos de software - [Link](https://github.com/)
* Live Server (Extensão VS Code) - Servidor web para desenvolvimento local - [Link](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
* http.server - Servidor web simples incluído na biblioteca padrão do Python - [Link](https://docs.python.org/3/library/http.server.html)

## Fundamentos Teóricos

<a href="#índice"><img align="right" width="15" height="15" src="./docs/up-arrow.png" alt="Voltar para topo"></a>

A seguir estão destacados alguns dos principais fundamentos teóricos para entendimento deste tutorial.

### Arquitetura Web de Três Camadas

A arquitetura web de três camadas é um padrão de design de software que organiza uma aplicação em três níveis distintos, cada um com responsabilidades bem definidas. Essas camadas são:

**1. Camada de Apresentação (Frontend)**:

* Também chamada de interface de usuário, essa camada é responsável pela interação com o usuário. Ela inclui tudo o que o usuário vê e utiliza para interagir com o sistema, como páginas web, formulários, botões, e elementos visuais em geral.
* Aqui, são usados tecnologias como HTML, CSS, JavaScript e frameworks frontend (React, Angular, etc.).
* A camada de apresentação envia as entradas dos usuários para a camada de negócios e exibe os resultados de volta para o usuário.

**2. Camada de Negócios (Lógica da Aplicação - Backend)**:

* Nessa camada está a lógica de negócios da aplicação, ou seja, as regras que governam como os dados devem ser processados e as operações que devem ser realizadas. Ela trata os pedidos recebidos da camada de apresentação e executa as operações necessárias.
* Essa camada pode incluir validações, cálculos e chamadas ao banco de dados. Em termos de tecnologia, é geralmente desenvolvida com linguagens de programação como Python, Java, PHP, ou frameworks como Django, Spring Boot, Laravel, etc.

**3. Camada de Dados (Banco de Dados - Backend)**:

* A camada de dados gerencia o armazenamento e recuperação de dados em um banco de dados. Ela é responsável pela persistência dos dados e operações como criar, ler, atualizar e deletar (CRUD).
* Geralmente, são usados sistemas de gerenciamento de banco de dados relacionais (como MySQL, PostgreSQL) ou não relacionais (como MongoDB).
* A camada de negócios interage com essa camada para armazenar e buscar dados conforme necessário.

**Fluxo da Arquitetura de Três Camadas**:

* O usuário interage com a Camada de Apresentação.
* A Camada de Apresentação faz requisições para a Camada de Negócios.
* A Camada de Negócios processa a lógica e, se necessário, interage com a Camada de Dados.
* A Camada de Dados responde com os dados necessários para a Camada de Negócios.
* A Camada de Negócios retorna os resultados processados para a Camada de Apresentação.
* A Camada de Apresentação exibe os resultados para o usuário.

Essa separação facilita a manutenção e escalabilidade da aplicação, permitindo que cada camada possa ser modificada ou melhorada de forma independente.

![Arquitetura das Aplicações Web](./docs/arquitetura-web2.png)

Fonte: Baseada em [https://blog.grancursosonline.com.br/arquitetura-em-tres-camadas-para-aplicacoes-web/](https://blog.grancursosonline.com.br/arquitetura-em-tres-camadas-para-aplicacoes-web/)

O presente projeto foca no desenvolvimento da Camada de Apresentação. Essa camada pode ser organizada através da separação em HTML (ou estrutura), CSS (ou apresentação) e JavaScript (ou comportamento).

![Camada de Apresentação](./docs/Camada-Apresentação2.png)

Fonte: Baseada em [https://twitter.com/cewebbr/status/1290302291388424193/photo/1](https://twitter.com/cewebbr/status/1290302291388424193/photo/1)

### Fundamentos do Framework CSS - Bootstrap

Frameworks CSS são bibliotecas pré-configuradas e conjuntos de regras (como classes e componentes prontos) que facilitam o desenvolvimento de sites, evitando escrever CSS do zero. Eles agilizam a criação de layouts responsivos, consistentes e organizados, oferecendo componentes como botões, barras de navegação e grids, prontos para uso.

O que é o Bootstrap? O Bootstrap é um framework front-end que reúne CSS, JavaScript e componentes HTML estruturados para facilitar o desenvolvimento de interfaces web responsivas. O Bootstrap oferece:

* Sistema de grid responsivo.
* Classes utilitárias prontas.
* Componentes visuais (navbar, cards, botões, etc.).
* Componentes interativos (collapse, modal, dropdown, carousel, etc.).

Embora seja muito conhecido pelo CSS, o Bootstrap também inclui JavaScript próprio para permitir comportamentos interativos.

#### Sistema de Grid Responsivo

Com o sistema de grid do Bootstrap, você pode controlar facilmente como o layout do seu site será exibido em diferentes tipos de dispositivos com tamanhos de tela ou viewport distintos, como celulares, tablets, computadores, etc. Veja a seguinte figura.

![Sistema de Grid em Diferentes Telas](./docs/grid-system-illustration.jpg)

Fonte: [https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-grid-system.php](https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-grid-system.php)

Na figura acima, existem 12 caixas de conteúdo no total em todos os dispositivos, mas seu posicionamento varia de acordo com o tamanho da tela. Por exemplo, em dispositivos móveis, o layout é renderizado como uma grade de uma coluna, com 1 coluna e 12 linhas dispostas umas sobre as outras, enquanto em tablets é renderizado como uma grade de duas colunas, com 2 colunas e 6 linhas. Além disso, em dispositivos com telas grandes, como laptops e desktops, ele é renderizado em um layout de grade de três colunas, que possui 3 colunas e 4 linhas, e, finalmente, em dispositivos com telas extragrandes, como desktops grandes, ele é renderizado em um layout de grade de quatro colunas, que possui 4 colunas e 3 linhas.

A imagem abaixo ilustra a organização lógica do sistema de grid do Bootstrap.

![Organização Lógica do Sistema de Grid](./docs/grid-bootstrap.png)

Fonte: [https://nmi.cool/webdev/bootstrap/](https://nmi.cool/webdev/bootstrap/)

Para mais informações sobre o funcionamento do sistema de Grid, acesse [link](https://getbootstrap.com/docs/5.3/layout/grid/). Dica: Leia a documentação e realize experimentos sobre os códigos mostrado utilizando o editor StackBlitz sugerido na documentação.

O Bootstrap utiliza um sistema de breakpoints para ajustar o layout da tela. Os breakpoints são pontos de largura da tela onde o layout pode mudar. No Bootstrap 5, os principais breakpoints são:

| Prefixo | Largura mínima  |
| ------- | --------------- |
| `sm`    | ≥ 576 px        |
| `md`    | ≥ 768 px        |
| `lg`    | ≥ 992 px        |
| `xl`    | ≥ 1200 px       |
| `xxl`   | ≥ 1400 px       |

#### Classes Utilitárias Prontas

O Bootstrap já oferece muitas classes utilitárias:

| Objetivo           | Classe Bootstrap                                 |
| ------------------ | ------------------------------------------------ |
| Conteiner          | `container`, `row`, `col-12`, `col-lg-4`         |
| Botão              | `btn`, `btn-primary`, `btn-outline-primary`      |
| Card               | `card`, `card-body`                              |
| Barra de Progresso | `progress`, `progress-bar`                       |
| Texto              | `text-center`, `text-primary`, `text-bg-primary` |
| Barra de navegação | `navbar`, `navbar-expand-lg`, `navbar-brand`     |
| Margem             | `m-3`, `mt-5`, `mb-2`, `my-4`                    |
| Padding            | `p-4`, `pb-5`, `py-4`                            |

Antes de criar CSS personalizado, verifique se o Bootstrap já oferece uma classe para o que você precisa.

Quando usar CSS personalizado?

* Ajustes muito específicos
* Estilização única do projeto
* Sobrescrever comportamentos padrão

## Objetivo da Aula

<a href="#índice"><img align="right" width="15" height="15" src="./docs/up-arrow.png" alt="Voltar para topo"></a>

O objetivo desta aula é oferecer uma introdução aos conceitos do framework Bootstrap aplicados de forma prática no desenvolvimento de uma página pessoal para o estudante.

A animação apresentada a seguir ilustra, de maneira visual, o resultado esperado após a implementação dos passos descritos ao longo da aula.

![Objetivo da Aula](./docs/objetivos.gif)

[Link - Página Pessoal Online](https://ufla-prog-web.github.io/aula-bootstrap/page/)

## Desenvolvimento do Projeto

<a href="#índice"><img align="right" width="15" height="15" src="./docs/up-arrow.png" alt="Voltar para topo"></a>

Siga os passos abaixo para alcançar o objetivo proposto: desenvolver uma **Página Pessoal**.

### Clonar o Repositório

Para iniciar, faça o clone do repositório com o seguinte comando:

```bash
git clone https://github.com/ufla-prog-web/aula-bootstrap.git
```

### Baixar o Repositório

Como alternativa ao clone, você pode baixar diretamente o repositório acessando este [link](https://github.com/ufla-prog-web/aula-bootstrap). Clique em `Code` e, em seguida, em `Download ZIP`.

### Abrir o Visual Studio Code

Abra o Visual Studio Code (VS Code) na pasta `aula-bootstrap`.

**Dica:** abra o arquivo `README.md` e selecione a opção `Open Preview to the Side` para visualizar o tutorial lado a lado enquanto desenvolve a aplicação.

### Criar a Organização do Projeto

O primeiro passo que faremos é criar a seguinte estrutura de pastas e arquivos. Crie a estrutura abaixo na raiz do projeto `aula-bootstrap`.

```text
aula-bootstrap/
    code/
        index.html
        assets/
            css/
            js/
            img/
```

### Criar a Estrutura da Página

O desenvolvimento de qualquer página web inicia-se pela definição de sua estrutura em HTML. Nesta etapa, o foco está na organização do conteúdo da página, e não em sua aparência visual.

**Atualizando o HTML**

Dentro do arquivo `index.html`, que foi criado na etapa anterior, copie o código a seguir:

```html
<!DOCTYPE html>
<html lang="pt-BR" data-bs-theme="light">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Página Pessoal</title>

        <!-- Bootstrap 5 (CSS) -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

        <!-- Font Awesome (ícones) -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

        <!-- CSS do projeto (externo) -->
        <link rel="stylesheet" href="assets/css/styles.css">
    </head>
    <body class="bg-body">
        <!-- Conteúdo virá aqui -->

        <!-- Bootstrap JS (necessário para navbar colapsável) -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

        <!-- JS do projeto -->
        <script src="assets/js/script.js"></script>
    </body>
</html>
```

**Explicação sobre o código Bootstrap**

* `data-bs-theme="light"`: controla o tema do Bootstrap (light/dark).
* `bg-body`: aplica cor de fundo padrão do tema atual (claro/escuro).

**Explicação sobre o código HTML**

* Ordem correta de inclusão:
    * CSS do Bootstrap
    * CSS personalizado
    * Javascript do Bootstrap
    * JavaScript personalizado

### Executar a Aplicação Web

Abra o arquivo `index.html` em um navegador para visualizar o conteúdo da página. Isso pode ser feito de duas maneiras:

* Se você possui a extensão Live Server instalada no Visual Studio Code, clique com o botão direito no arquivo e selecione `Open with Live Server`. Caso não tenha a extensão instalada, é recomendável instalá-la, pois ela facilita o desenvolvimento.
* Outra alternativa é iniciar manualmente um servidor web no diretório que contém o arquivo `index.html`. Para isso, execute o comando abaixo:

    ```bash
    cd code
    python3 -m http.server
    ```

    Se desejar utilizar uma porta específica (por exemplo, 8008), execute:

    ```bash
    cd code
    python3 -m http.server 8008
    ```

Após iniciar o servidor, abra o navegador e acesse a página.

Note que, neste momento, a página não contém nenhum conteúdo. Nas próximas etapas, trabalharemos no conteúdo.

### Criar a Navbar da Página

Nessa etapa, iremos criar a navbar da nossa página pessoal. Teremos links para sobre, habilidades, projetos, interesses, contato e tema.

**Atualizando o HTML**

Inclua no arquivo `index.html`, localizado na pasta `code`, o conteúdo abaixo. Atenção: O código abaixo deve ser colocado abaixo da tag *body* e acima do script javascript.

```html
<!-- Navbar -->
<nav class="navbar navbar-expand-lg border-bottom bg-body sticky-top">
    <div class="container">
        <a class="navbar-brand fw-semibold" href="#top">
            <i class="fa-solid fa-code me-2"></i>Meu Portfólio
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navContent">
            <ul class="navbar-nav ms-auto gap-lg-1">
                <li class="nav-item"><a class="nav-link" href="#sobre">Sobre</a></li>
                <li class="nav-item"><a class="nav-link" href="#habilidades">Habilidades</a></li>
                <li class="nav-item"><a class="nav-link" href="#projetos">Projetos</a></li>
                <li class="nav-item"><a class="nav-link" href="#interesses">Interesses</a></li>
                <li class="nav-item"><a class="nav-link" href="#contato">Contato</a></li>
            </ul>
            <div class="ms-lg-3 d-flex align-items-center gap-2 py-2 py-lg-0">
                <span class="small text-secondary d-none d-lg-inline">Tema</span>
                <button id="themeToggle" class="btn btn-outline-secondary btn-sm" type="button">
                    <i class="fa-solid fa-moon"></i>
                </button>
            </div>
        </div>
    </div>
</nav>
```

**Explicação sobre o código Bootstrap**

* `container`: Centraliza e limita a largura do conteúdo (layout responsivo).
* `navbar`: Cria uma barra de navegação estilizada.
* `navbar-expand-lg`: Expande a navbar a partir de telas grandes (lg).
* `navbar-brand`: Estiliza a marca ou logotipo da navbar.
* `navbar-toggler-icon`: Ícone padrão do botão hamburguer.
* `navbar-collapse`: Ajusta layout do conteúdo colapsável na navbar.
* `navbar-nav`: Estiliza lista de navegação.
* `navbar-toggler`: Botão que controla o menu colapsável.
* `nav-item`: Define item individual da navegação.
* `nav-link`: Estiliza links da navbar.
* `data-bs-toggle="collapse"`: Ativa comportamento de colapso via JavaScript.
* `data-bs-target="#navContent"`: Define o elemento que será colapsado/expandido.
* `collapse`: Torna o elemento colapsável.
* `border-bottom`: Adiciona borda inferior ao elemento.
* `sticky-top`: Fixa o elemento no topo ao rolar a página.
* `fw-semibold`: Aplica semi-negrito na fonte.
* `ms-auto`: Aplica margem automática à esquerda (empurra para a direita).
* `ms-lg-3`: Aplica margem esquerda em telas grandes.
* `gap-lg-1`: Define espaçamento entre itens em telas grandes.
* `gap-2`: Espaçamento entre elementos flex/grid.
* `py-2`: Padding vertical médio.
* `py-lg-0`: Remove padding vertical em telas grandes.
* `align-items-center`: Alinha itens verticalmente ao centro (flex).
* `small`: Aplica tamanho de fonte reduzido.
* `text-secondary`: Aplica cor de texto secundária.
* `d-flex`: Ativa layout flexbox.
* `d-none`: Oculta o elemento.
* `d-lg-inline`: Exibe como inline em telas grandes.
* `btn`: Estiliza como botão Bootstrap.
* `btn-outline-secondary`: Botão com borda e cor secundária.
* `btn-sm`: Botão em tamanho pequeno.

**Explicação sobre o código FontAwesome**

* `fa-solid`: define o estilo do ícone (preenchido).
* `fa-code`: representa o ícone de código.
* `fa-moon`: representa o ícone de lua.

O Font Awesome organiza seus ícones por estilos, como:

* `fa-solid`: ícones preenchidos (estilo sólido).
* `fa-regular`: ícones com traço fino.
* `fa-brands`: ícones de marcas (GitHub, Instagram, etc.).

Abra a aplicação no navegador e analise o resultado. O resultado deverá se assemelhar à imagem abaixo:

![Imagem Página Pessoal - Navbar](./docs/navbar.png)

### Criar a Seção de Informações Básicas da Página

Nessa etapa, iremos criar uma seção de informações básicas em nossa página pessoal. Assim, teremos uma foto do perfil e uma pequena biografia do estudante. Além disso, teremos links para projetos, contato, github e linkedin.

**Atualizando o HTML**

Inclua no arquivo `index.html` o conteúdo abaixo. Atenção: O código abaixo deve ser colocado logo após o fim da tag *nav* e acima do script javascript.

```html
<!-- Header / Informações Básicas -->
<header id="top" class="py-5">
    <div class="container">
        <div class="row align-items-center g-4">
            <div class="col-12 col-lg-4 text-center">
                <img class="profile-img shadow-sm" src="assets/img/foto.svg" alt="Foto de perfil">
                <div class="mt-3">
                    <span class="badge text-bg-primary me-1">Sistemas de Informação</span>
                    <span class="badge text-bg-secondary">UFLA</span>
                </div>
            </div>
            <div class="col-12 col-lg-8">
                <h1 class="display-6 fw-semibold mb-3">
                    Olá! Eu sou <span class="text-primary">Nome do Estudante</span>
                </h1>
                <p class="lead text-secondary mb-4">
                    Estudante do curso de Sistemas de Informação, interessado em desenvolvimento web e em aprender mais sobre tecnologias e computação.
                </p>
                <div class="d-flex flex-wrap gap-2">
                    <a class="btn btn-primary" href="#projetos">
                        <i class="fa-solid fa-diagram-project me-2"></i>Ver projetos
                    </a>
                    <a class="btn btn-outline-primary" href="#contato">
                        <i class="fa-solid fa-envelope me-2"></i>Contato
                    </a>
                    <a class="btn btn-outline-secondary" href="https://github.com/" target="_blank">
                        <i class="fa-brands fa-github me-2"></i>GitHub
                    </a>
                    <a class="btn btn-outline-secondary" href="https://www.linkedin.com/" target="_blank">
                        <i class="fa-brands fa-linkedin me-2"></i>LinkedIn
                    </a>
                </div>
                <hr class="my-4">
                <div class="row g-3">
                    <div class="col-12 col-md-6">
                        <div class="p-3 rounded-3 border bg-body-tertiary">
                            <div class="d-flex align-items-center gap-2 mb-2">
                                <i class="fa-solid fa-graduation-cap text-primary"></i>
                                <strong>Curso</strong>
                            </div>
                            <p class="mb-0 text-secondary">
                                Bacharelado em Sistemas de Informação - Universidade Federal de Lavras (UFLA).
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="p-3 rounded-3 border bg-body-tertiary">
                            <div class="d-flex align-items-center gap-2 mb-2">
                                <i class="fa-solid fa-bullseye text-primary"></i>
                                <strong>Objetivo</strong>
                            </div>
                            <p class="mb-0 text-secondary">
                                Aprimorar habilidades em web (frontend e backend) e participar de projetos práticos no semestre.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
```

Em seguida, copie o arquivo `foto.svg` que está na pasta `aula-bootstrap/docs` para a pasta `code/assets/img`.

**Explicação sobre o código Bootstrap**

* `row`: informações em linha.
* `col-12`: Coluna ocupando toda largura.
* `col-lg-4`: Coluna ocupando 4 de 12 colunas em telas grandes.
* `col-md-6`: Coluna ocupando metade da largura em telas médias.
* `col-lg-8`: Coluna ocupando 8 de 12 colunas em telas grandes.
* `profile-img`: Classe personalizada para estilização da imagem.
* `shadow-sm`: Aplica sombra pequena (para destacar a imagem).
* `badge`: Cria rótulo/etiqueta estilizada.
* `flex-wrap`: Permite quebra de linha no flexbox.
* `display-6`: Texto grande de destaque.
* `text-center`: Centraliza o texto.
* `text-bg-primary`: Fundo primário com texto contrastante automático.
* `text-bg-secondary`: Fundo secundário com texto contrastante.
* `text-primary`: Aplica cor primária ao texto.
* `lead`: Destaca parágrafo com fonte maior.
* `btn-primary`: Botão com cor primária preenchida.
* `btn-outline-primary`: Botão com borda primária.
* `border`: Adiciona borda padrão.
* `bg-body-tertiary`: Aplica fundo terciário suave.
* `rounded-3`: Bordas arredondadas médias.
* `py-5`: Padding vertical grande (topo e base).
* `my-4`: Margem vertical grande (topo e base).
* `mt-3`: Margem superior média.
* `me-1`: Margem direita (margin-end) pequena.
* `g-4`: Espaçamento ("gap") entre colunas.
* `g-3`: Espaçamento médio entre colunas do grid.
* `p-3`: Padding médio em todos os lados.
* `pb-5`: Padding inferior grande.
* `mb-4`: Margem inferior grande.
* `mb-3`: Margem inferior média.
* `mb-2`: Margem inferior pequena.
* `mb-0`: Remove margem inferior.

Abra a aplicação no navegador e analise o resultado. O resultado deverá se assemelhar à imagem abaixo:

![Imagem Página Pessoal - Informações Básicas](./docs/info-basicas.png)

### Criar a Seção de Sobre da Página

Nessa etapa, iremos criar uma seção de sobre em nossa página pessoal. Assim, teremos uma pequena biografia do estudante e algumas informações rápidas sobre a cidade, idioma e a área de interesse.

**Atualizando o HTML**

Inclua no arquivo `index.html` o conteúdo abaixo. Atenção: O código abaixo deve ser colocado logo após o fim da tag *header* e acima do script javascript.

```html
<main class="pb-5">
    <!-- Sobre -->
    <section id="sobre" class="py-4">
        <div class="container">
            <div class="mb-3">
                <h2 class="h4 mb-1">Sobre</h2>
                <p class="text-secondary mb-0">Uma breve descrição do estudante e trajetória.</p>
            </div>
            <div class="row g-4">
                <div class="col-12 col-lg-7">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <p class="mb-2">
                                Sou estudante de Sistemas de Informação e gosto de construir aplicações web e aprender criando projetos.
                            </p>
                            <p class="mb-0 text-secondary">
                                Nesta página, apresento minhas habilidades, interesses e projetos desenvolvidos.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-5">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h3 class="h6 mb-3">Informações rápidas</h3>
                            <ul class="list-unstyled mb-0">
                                <li class="d-flex gap-2 mb-2">
                                    <i class="fa-solid fa-location-dot text-primary mt-1"></i>
                                    <div><strong>Cidade:</strong> Lavras/MG</div>
                                </li>
                                <li class="d-flex gap-2 align-items-start mb-2">
                                    <i class="fa-solid fa-language mt-1 text-primary"></i>
                                    <div><strong>Idiomas:</strong> Português, Inglês (intermediário)</div>
                                </li>
                                <li class="d-flex gap-2">
                                    <i class="fa-solid fa-laptop-code text-primary mt-1"></i>
                                    <div><strong>Área:</strong> Desenvolvimento Web</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
```

**Explicação sobre o código Bootstrap**

* `col-lg-7`: Coluna ocupando 7 de 12 colunas em telas grandes.
* `col-lg-5`: Coluna ocupando 5 de 12 colunas em telas grandes.
* `card`: Componente visual em formato de cartão.
* `card-body`: Área interna do conteúdo do card.
* `list-unstyled`: Remove marcadores e padding da lista.
* `align-items-start`: Alinha itens ao topo no flexbox.
* `py-4`: Padding vertical médio-grande.
* `mb-1`: Margem inferior pequena.
* `h4`: Aplica estilo visual de título nível 4.
* `h6`: Aplica estilo visual de título nível 6.

Abra a aplicação no navegador e analise o resultado. O resultado deverá se assemelhar à imagem abaixo:

![Imagem Página Pessoal - Sobre](./docs/sobre.png)

### Criar a Seção de Habilidades da Página

Nessa etapa, iremos criar uma seção de habilidades em nossa página pessoal. Aqui, teremos dois cards principais: um com as tecnologias e outro com o nível de familiaridade.

**Atualizando o HTML**

Inclua no arquivo `index.html` o conteúdo abaixo. Atenção: O código abaixo deve ser colocado logo após o fim da tag *section* (do sobre) e antes do fim da tag *main*.

```html
<!-- Habilidades -->
<section id="habilidades" class="py-4">
    <div class="container">
        <div class="section-title">
            <h2 class="h4 mb-1">Habilidades</h2>
            <p class="text-secondary mb-0">Tecnologias e competências.</p>
        </div>
        <div class="row g-4 mt-1">
            <div class="col-12 col-lg-6">
                <div class="card shadow-sm h-100">
                    <div class="card-body">
                        <h3 class="h6">Tecnologias</h3>
                        <div class="d-flex flex-wrap gap-2">
                            <span class="badge rounded-pill text-bg-primary">HTML</span>
                            <span class="badge rounded-pill text-bg-primary">CSS</span>
                            <span class="badge rounded-pill text-bg-primary">JavaScript</span>
                            <span class="badge rounded-pill text-bg-secondary">Bootstrap</span>
                            <span class="badge rounded-pill text-bg-secondary">Git/GitHub</span>
                            <span class="badge rounded-pill text-bg-secondary">Python</span>
                            <span class="badge rounded-pill text-bg-secondary">Django</span>
                        </div>
                        <hr>
                        <h3 class="h6">Competências</h3>
                        <ul class="mb-0">
                            <li>Construção de páginas responsivas</li>
                            <li>Manipulação do DOM e eventos</li>
                            <li>Organização de projetos e versionamento</li>
                            <li>Boas práticas de legibilidade de código</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="card shadow-sm h-100">
                    <div class="card-body">
                        <h3 class="h6">Nível de familiaridade (exemplo)</h3>
                        <div class="mb-3">
                            <div class="d-flex justify-content-between">
                                <span>HTML</span><span class="text-secondary small">Intermediário</span>
                            </div>
                            <div class="progress" role="progressbar" aria-label="HTML" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar" style="width: 70%"></div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="d-flex justify-content-between">
                                <span>CSS</span><span class="text-secondary small">Básico-Intermediário</span>
                            </div>
                            <div class="progress" role="progressbar" aria-label="CSS" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar" style="width: 55%"></div>
                            </div>
                        </div>
                        <div class="mb-0">
                            <div class="d-flex justify-content-between">
                                <span>JavaScript</span><span class="text-secondary small">Intermediário</span>
                            </div>
                            <div class="progress" role="progressbar" aria-label="JavaScript" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar" style="width: 65%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

**Explicação sobre o código Bootstrap**

* `section-title`: Classe personalizada para título de seção.
* `col-lg-6`: Coluna ocupando metade da largura em telas grandes.
* `card`: Componente de cartão estilizado.
* `justify-content-between`: Distribui elementos com espaço entre eles (flex).
* `progress`: Container da barra de progresso.
* `progress-bar`: Barra interna que indica progresso.
* `rounded-pill`: Bordas totalmente arredondadas (formato pílula).
* `mt-1`: Margem superior pequena.
* `h-100`: Altura igual a 100% do elemento pai.

Abra a aplicação no navegador e analise o resultado. O resultado deverá se assemelhar à imagem abaixo:

![Imagem Página Pessoal - Habilidades](./docs/habilidades.png)

### Criar a Seção de Projetos da Página

Nessa etapa, iremos criar uma seção de projetos em nossa página pessoal. Aqui, teremos três cards principais: um card para cada projeto que já participou.

**Atualizando o HTML**

Inclua no arquivo `index.html` o conteúdo abaixo. Atenção: O código abaixo deve ser colocado logo após o fim da tag *section* (do habilidades) e antes do fim da tag *main*.

```html
<!-- Projetos -->
<section id="projetos" class="py-4">
    <div class="container">
        <div class="section-title">
            <h2 class="h4 mb-1">Projetos</h2>
            <p class="text-secondary mb-0">Alguns trabalhos já desenvolvidos.</p>
        </div>
        <div class="row g-4 mt-1">
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card shadow-sm h-100">
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex align-items-start justify-content-between gap-2">
                            <h3 class="h6 mb-1">Jogo da Velha</h3>
                            <span class="badge text-bg-secondary">HTML</span>
                            <span class="badge text-bg-secondary">CSS</span>
                            <span class="badge text-bg-secondary">JavaScript</span>
                        </div>
                        <p class="text-secondary small">
                            Implementação do jogo com verificação de vitória e reinício.
                        </p>
                        <ul class="small mb-4">
                            <li>Matriz</li>
                            <li>Manipulação do DOM</li>
                            <li>Animação de personagens</li>
                        </ul>
                        <div class="mt-auto d-flex gap-2">
                            <a class="btn btn-sm btn-outline-primary" href="#" target="_blank" rel="noreferrer">
                                <i class="fa-brands fa-github me-1"></i>Repositório
                            </a>
                            <a class="btn btn-sm btn-primary" href="#" target="_blank" rel="noreferrer">
                                <i class="fa-solid fa-arrow-up-right-from-square me-1"></i>Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card shadow-sm h-100">
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex align-items-start justify-content-between gap-2">
                            <h3 class="h6 mb-1">Página Pessoal</h3>
                            <span class="badge text-bg-secondary">HTML</span>
                            <span class="badge text-bg-secondary">Bootstrap</span>
                            <span class="badge text-bg-secondary">FontAwesome</span>
                        </div>
                        <p class="text-secondary small">
                            Implementação de página pessoal com seções e navegação.
                        </p>
                        <ul class="small mb-4">
                            <li>Classes do Bootstrap</li>
                            <li>Grid do Bootstrap</li>
                            <li>Componentes (cards, navbar)</li>
                        </ul>
                        <div class="mt-auto d-flex gap-2">
                            <a class="btn btn-sm btn-outline-primary" href="#" target="_blank" rel="noreferrer">
                                <i class="fa-brands fa-github me-1"></i>Repositório
                            </a>
                            <a class="btn btn-sm btn-primary" href="#" target="_blank" rel="noreferrer">
                                <i class="fa-solid fa-arrow-up-right-from-square me-1"></i>Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card shadow-sm h-100">
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex align-items-start justify-content-between gap-2">
                            <h3 class="h6 mb-1">Calculadora Web</h3>
                            <span class="badge text-bg-secondary">Frontend</span>
                        </div>
                        <p class="text-secondary small">
                            Calculadora com operações básicas e interface responsiva.
                        </p>
                        <ul class="small mb-4">
                            <li>HTML + CSS</li>
                            <li>JavaScript</li>
                            <li>Eventos e DOM</li>
                        </ul>
                        <div class="mt-auto d-flex gap-2">
                            <a class="btn btn-sm btn-outline-primary" href="#" target="_blank" rel="noreferrer">
                                <i class="fa-brands fa-github me-1"></i>Repositório
                            </a>
                            <a class="btn btn-sm btn-primary" href="#" target="_blank" rel="noreferrer">
                                <i class="fa-solid fa-arrow-up-right-from-square me-1"></i>Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

**Explicação sobre o código Bootstrap**

* `flex-column`: Organiza elementos em coluna (flex).
* `mt-auto`: Empurra elemento para o final usando margem automática.

Abra a aplicação no navegador e analise o resultado. O resultado deverá se assemelhar à imagem abaixo:

![Imagem Página Pessoal - Projetos](./docs/projetos.png)

### Criar a Seção de Interesses da Página

Nessa etapa, iremos criar uma seção de interesses em nossa página pessoal. Aqui, teremos dois cards principais para destacar os interesses.

**Atualizando o HTML**

Inclua no arquivo `index.html` o conteúdo abaixo. Atenção: O código abaixo deve ser colocado logo após o fim da tag *section* (do projetos) e antes do fim da tag *main*.

```html
<!-- Interesses -->
<section id="interesses" class="py-4">
    <div class="container">
        <div class="section-title">
            <h2 class="h4 mb-1">Interesses</h2>
            <p class="text-secondary mb-0">Áreas que eu gosto de estudar/pesquisar.</p>
        </div>
        <div class="row g-4 mt-1">
            <div class="col-12 col-lg-6">
                <div class="card shadow-sm h-100">
                    <div class="card-body">
                        <ul class="mb-0">
                        <li>Desenvolvimento Web (frontend e backend)</li>
                        <li>Banco de Dados e modelagem</li>
                        <li>Algoritmos e estruturas de dados</li>
                        <li>Engenharia de Software</li>
                        <li>Dados e visualização</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="card shadow-sm h-100">
                    <div class="card-body">
                        <h3 class="h6">Atividades</h3>
                        <p class="text-secondary mb-2">
                            Participo de projetos acadêmicos e gosto de aprender criando coisas.
                        </p>
                        <div class="d-flex flex-wrap gap-2">
                            <span class="badge text-bg-light border"><i class="fa-solid fa-book me-1"></i>Estudos</span>
                            <span class="badge text-bg-light border"><i class="fa-solid fa-people-group me-1"></i>Trabalho em equipe</span>
                            <span class="badge text-bg-light border"><i class="fa-solid fa-terminal me-1"></i>Projetos práticos</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

**Explicação sobre o código Bootstrap**

* `text-bg-light`: Fundo claro com texto contrastante automático.

Abra a aplicação no navegador e analise o resultado. O resultado deverá se assemelhar à imagem abaixo:

![Imagem Página Pessoal - Interesses](./docs/interesses.png)

### Criar a Seção de Contato da Página

Nessa etapa, iremos criar uma seção de contato em nossa página pessoal. Aqui, teremos dois cards principais para destacar as informações de contato.

**Atualizando o HTML**

Inclua no arquivo `index.html` o conteúdo abaixo. Atenção: O código abaixo deve ser colocado logo após o fim da tag *section* (do interesses) e antes do fim da tag *main*.

```html
<!-- Contato -->
<section id="contato" class="py-4">
    <div class="container">
        <div class="section-title">
            <h2 class="h4 mb-1">Contato</h2>
            <p class="text-secondary mb-0">Como falar comigo.</p>
        </div>
        <div class="row g-4 mt-1">
            <div class="col-12 col-lg-6">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <ul class="list-unstyled mb-0">
                            <li class="d-flex gap-2 align-items-center mb-2">
                                <i class="fa-solid fa-envelope text-primary"></i>
                                <span>email@exemplo.com</span>
                            </li>
                            <li class="d-flex gap-2 align-items-center mb-2">
                                <i class="fa-brands fa-github text-primary"></i>
                                <a class="link-underline link-underline-opacity-0" href="https://github.com/" target="_blank" rel="noreferrer">
                                    github.com/seu-usuario
                                </a>
                            </li>
                            <li class="d-flex gap-2 align-items-center">
                                <i class="fa-brands fa-linkedin text-primary"></i>
                                <a class="link-underline link-underline-opacity-0" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                    linkedin.com/in/seu-usuario
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <ul class="list-unstyled mb-0">
                            <li class="d-flex gap-2 align-items-center mb-2">
                                <i class="fa-brands fa-instagram text-primary"></i>
                                <a class="link-underline link-underline-opacity-0" href="https://instagram.com/" target="_blank" rel="noreferrer">
                                    instagram.com/seu-usuario
                                </a>
                            </li>
                            <li class="d-flex gap-2 align-items-center mb-2">
                                <i class="fa-brands fa-facebook text-primary"></i>
                                <a class="link-underline link-underline-opacity-0" href="https://facebook.com/" target="_blank" rel="noreferrer">
                                    facebook.com/seu-usuario
                                </a>
                            </li>
                            <li class="d-flex gap-2 align-items-center">
                                <i class="fa-brands fa-youtube text-primary"></i>
                                <a class="link-underline link-underline-opacity-0" href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                                    youtube.com/seu-usuario
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

Abra a aplicação no navegador e analise o resultado. O resultado deverá se assemelhar à imagem abaixo:

![Imagem Página Pessoal - Contato](./docs/contato.png)

### Criar o Rodapé da Página

Nessa etapa, iremos criar um rodapé para em nossa página pessoal.

**Atualizando o HTML**

Inclua no arquivo `index.html` o conteúdo abaixo. Atenção: O código abaixo deve ser colocado logo após o fim da tag *main* e antes da inclusão do script javascript.

```html
<!-- Rodapé da Página -->
<footer class="border-top py-4">
    <div class="container d-flex flex-column flex-md-row justify-content-between gap-2">
        <small class="text-secondary">© <span id="year"></span> Página Pessoal — Nome do Estudante</small>
        <small class="text-secondary">Feito com HTML + Bootstrap + um pouco de CSS/JS</small>
    </div>
</footer>
```

**Explicação sobre o código Bootstrap**

* `border-top`: Adiciona borda superior.
* `flex-md-row`: Organiza elementos em linha a partir de telas médias.

Abra a aplicação no navegador e analise o resultado. O resultado deverá se assemelhar à imagem abaixo:

![Imagem Página Pessoal - Rodapé](./docs/rodape.png)

### Criar CSS Externo para Ajustes Finos

Nesta etapa, iremos criar um arquivo CSS externo para realizar ajustes finos, como ajuste no tamanho da imagem e ajuste para evitar que título fique escondido pela navbar fixa.

**Criando o arquivo CSS**

Para isso, crie um arquivo chamado `styles.css` na pasta `code/assets/css/` e coloque o seguinte conteúdo:

```css
/* Ajusta tamanho da imagem de perfil */
.profile-img {
    width: 160px;
    height: 160px;
    border-radius: 999px;
    border: 4px solid rgba(255, 255, 255, 0.7);
}

/* Melhorar espaçamento do âncora/título (por causa da navbar fixa) */
section {
    scroll-margin-top: 90px;
}
```

Abra a aplicação no navegador e analise o resultado.

### Criar JavaScript Externo para Ajustar Tema

Nesta etapa, iremos criar um arquivo JavaScript externo para realizar o ajuste no tema (claro/escuro).

**Criando o arquivo JavaScript**

Para isso, crie um arquivo chamado `script.js` na pasta `code/assets/js/` e coloque o seguinte conteúdo:

```javascript
// Seleciona elementos
var root = document.documentElement;
var btn = document.getElementById("themeToggle");

// Função para aplicar o tema
function applyTheme(theme) {
    // Define o tema no HTML
    root.setAttribute("data-bs-theme", theme);
    // Salva no localStorage
    localStorage.setItem("theme", theme);
    // Se o botão existir, atualiza o ícone
    if (btn) {
        if (theme === "dark") {
            btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }
}

// Verifica se já existe tema salvo
var savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    applyTheme(savedTheme);
} else {
    applyTheme("light");
}

// Evento de clique no botão
if (btn) {
    btn.addEventListener("click", function () {
        var currentTheme = root.getAttribute("data-bs-theme");
        if (currentTheme === "light") {
            applyTheme("dark");
        } else {
            applyTheme("light");
        }
    });
}
```

O Bootstrap 5.3 entende o atributo `data-bs-theme` e troca as cores automaticamente. Você não precisa reescrever CSS inteiro para o modo escuro, só pequenos ajustes.

Abra a aplicação no navegador e analise o resultado. O resultado deverá se assemelhar às imagens abaixo:

![Imagem Página Pessoal - Tema Light](./docs/tema-light.png)
![Imagem Página Pessoal - Tema Dark](./docs/tema-dark.png)

### Analisar a Responsividade do Projeto

Nesta etapa, iremos aprender a analisar a responsidade do projeto. Para testar a responsividade, utilizaremos as Ferramentas do Desenvolvedor do navegador.

**Abra o Inspecionar**

No navegador (Chrome, Edge ou Firefox):

* Clique com o botão direito na página
* Selecione Inspecionar

ou use o atalho:

* F12

Isso abrirá o painel de desenvolvimento, gerando uma imagem semelhante a mostrada abaixo.

![Imagem Tela Inspecionar](./docs/inspecionar.png)

**Ative o Modo Dispositivo**

No painel aberto, clique no ícone de alternar dispositivo (ícone de celular/tablet) ou use o atalho `Ctrl + Shift + M`. Agora a página será exibida simulando diferentes dispositivos.

Agora, altere o tamanho da tela, escolhondo dispositivos prontos (iPhone, Galaxy, iPad, etc.). Você podem também definir largura e altura manualmente, ou ainda, arrastar a borda da área de visualização.

Ao fazer as modificações na largura, observe como as colunas se reorganizam, a navbar colapsa, os elementos mudam de posição, alguns elementos aparecem ou desaparecem (`d-none`, `d-lg-inline`).

Um conceito importante a ser destacado é que o Bootstrap utiliza a abordagem *Mobile First*. Isso significa que o layout padrão é pensado primeiro para telas pequenas, ajustes para telas maiores são adicionados progressivamente.

### Publicar a Página no Github

Para disponibilizar a página desenvolvida no GitHub Pages, siga os passos abaixo:

1. Faça o upload do seu projeto para um repositório no GitHub.

2. Acesse a aba **Settings** do repositório.

3. Clique em **Pages** no menu lateral.

4. Em **Build and deployment**, vá até a opção **Branch**, selecione o branch `main` e clique em **Save**.

![Publicando a Página Pessoal no Github](./docs/postando-pagina-pessoal-github.png)

Após a configuração, o GitHub Pages gerará um link onde a página poderá ser acessada online.
Para ver o projeto, acesse a URL que terá uma forma parecida com a seguinte: https://**seu-usuario**.github.io/**seu-projeto**/page/

### Atividades

Agora que você já conhece bem como construir uma página pessoal utilizando HTML e Bootstrap, realize as seguintes ações:

* Coloque informações acadêmicas reais sobre você.
* Publique a sua página pessoal no seu github.
* Desenvolva a mesma página web utilizando um outro framework CSS.
* Analise as diferenças entre os frameworks CSS utilizados.

## Desenvolva Novos Projetos

<a href="#índice"><img align="right" width="15" height="15" src="./docs/up-arrow.png" alt="Voltar para topo"></a>

Com os conhecimentos adquiridos em Boostrap, desenvolva novos projetos para praticar e consolidar o aprendizado:

* Desenvolva uma página estática para um **restaurante**.
* Desenvolva uma página estática para uma **lanchonete**.
* Desenvolva uma página estática para uma **academia**.

## Referências e Materiais de Apoio

<a href="#índice"><img align="right" width="15" height="15" src="./docs/up-arrow.png" alt="Voltar para topo"></a>

Para aprofundar os estudos sobre Bootstrap, recomenda-se a consulta ao seguinte curso:

* **Curso de Bootstrap.** [W3Schools - Bootstrap 5.](https://www.w3schools.com/bootstrap5/index.php)
