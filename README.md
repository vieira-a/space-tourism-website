# Sobre o projeto

Um site com multiplas páginas e layout responsivo proposto como desafio pelo site Front-end Mentor.
[Acesso á página do projeto](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3)

### Design

Foi disponibilizado o arquivo de layouts do [Figma](https://www.figma.com/file/ssE7h37zqbWwXoe0Rsn3av/space-tourism-website?node-id=0%3A1331).

<div class="layouts" style=display:grid; grid-template-collums: 1fr 1fr 1fr;>

  <div style=display:flex;>
    <h4>Mobile</h4>
    <img src="https://user-images.githubusercontent.com/65618765/183302627-fb2cb43d-211c-483b-baee-cce0e0c26800.png" width="15%">
    <img src="https://user-images.githubusercontent.com/65618765/183302636-4cf1f831-a005-4b8e-92ed-c7618741c865.png" width="15%">
  </div>
  <div style=display:flex;>
    <h4>Tablet</h4>
    <img src="https://user-images.githubusercontent.com/65618765/183302833-b5330b54-a764-493e-9f14-1fc8ed558276.png" width="15%">
    <img src="https://user-images.githubusercontent.com/65618765/183302844-81897ce2-a1ef-464c-9118-078700f17812.png" width="15%">
  </div>
  <div style=display:flex;>
    <h4>Desktop</h4>
    <img src="https://user-images.githubusercontent.com/65618765/183302963-5f4f7af4-c5a9-4fbe-ba4c-2dd4a028033e.png" width="15%">
    <img src="https://user-images.githubusercontent.com/65618765/183302966-cf048e56-442f-4978-a925-be8ed3842e7c.jpg" width="15%">
    </div>
</div>

## Funcionalidades

Verifiquei que o site possui uma espécie de carousel para exibir as informações contidas nas páginas quando seus respectivos botões são acionados.

Decidi implementar o controle do carousel com JavaScript puro, ao invés de utilizar bibliotecas como Bootstrap, por exemplo. As informações das páginas são carregadas a partir de um arquivo JSON, que está hospedado localmente no diretório /assets/json. Com isso, alcanço dois objetivos principais:

- Consolidar a prática de manipulação de arquivos externos de dentro da aplicação;
- Deixar a aplicação preparada para carregar informações externas, porque pode ficar inviável carregar todas as informações a partir do HTML.

Habilidades com Flexbox e Grid foram essenciais para aplicar os diferentes posicionamentos nos modelos das páginas.

## TODO List

### Mobile First

- [x] Fazer com que o site, ao abrir, apresente as informações do primeiro elemento do array; atualmente esta vindo vazio;
- [x] Adicionar endereço da imagem ao JSON;
- [x] Popular o campo imagem dinamicamente no HTML.

### HTML

- [x] Construir templates para as páginas:
  - [x] Crew
  - [x] Technology

### CSS

- [x] Aplicar estilos para as páginas:
  - [x] Crew
  - [x] Technology

### Menu mobile

- [x] Estilizar menu

### JSON

- [x] Criar JSON para as páginas:
  - [x] Crew
  - [x] Technology

### JavaScript

- [x] Criar funções para as páginas:
  - [x] Crew
  - [x] Technology
- [x] Criar funções para abertura e fechamento do menu mobile

### Tablet layout

### HTML

- [x] Construir templates para as páginas:
  - [x] Index
  - [x] Destination 
  - [x] Crew
  - [x] Technology

### CSS

- [ ] Aplicar estilos para as páginas:
  - [x] Index
  - [x] Destination 
  - [x] Crew
  - [x] Technology

### Desktop layout

### HTML

- [x] Construir templates para as páginas:
  - [x] Index
  - [x] Destination 
  - [x] Crew
  - [x] Technology

### CSS

- [x] Aplicar estilos para as páginas:
  - [x] Index
  - [x] Destination 
  - [x] Crew
  - [x] Technology

### Organização geral

Estes serão pontos de melhorias que pretendo aplicar após a entrega do projeto principal:

- [ ] Modularizar os scripts: ter um script central que carrega os demais scripts. [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules)
- [ ] Modularizar os arquivos HTML e CSS para melhor organização.
