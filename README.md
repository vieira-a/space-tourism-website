# Sobre o projeto

Um site com multiplas páginas e layout responsivo proposto como desafio pelo site Front-end Mentor.
[Acesso á página do projeto](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3)

### Design

Foi disponibilizado o arquivo de layouts do [Figma](https://www.figma.com/file/ssE7h37zqbWwXoe0Rsn3av/space-tourism-website?node-id=0%3A1331).

## Implementacoes gerais

## Funcionalidades

Verifiquei que o site possui uma espécie de carousel para exibir as informações contidas nas páginas quando seus respectivos botões são acionados.

Decidi implementar a ideia do carousel em JavaScript puro, ao invés de utilizar bibliotecas como Bootstrap, por exemplo. As informações serão carregadas a partir de um arquivo JSON, que está hospedado localmente no diretório /assets/json. Com isso, tenho dois objetivos principais:

- Consolidar a prática de manipulação de arquivos externos de dentro da aplicação;
- Deixar a aplicação preparada para carregar informações externas, porque pode ficar inviável carregar todas as informações a partir do HTML.

## TODO List

- [x] Fazer com que o site, ao abrir, apresente as informações do primeiro elemento do array; atualmente esta vindo vazio;
- [x] Adicionar endereço da imagem ao JSON;
- [x] Popular o campo imagem dinamicamente no HTML.

### HTML

- [ ] Construir templates para as páginas:
  - [ ] Crew
  - [ ] Technology

### CSS

- [ ] Aplicar estilos para as páginas:
  - [ ] Crew
  - [ ] Technology

### JSON

- [ ] Criar JSON para as páginas:
  - [ ] Crew
  - [ ] Technology

### JavaScript

- [ ] Criar funções para as páginas:
  - [ ] Crew
  - [ ] Technology
  - [ ] Modularizar os scripts: ter um script central que carrega os demais scripts. [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules)

### Organização geral

- [ ] Modularizar os arquivos HTML e CSS para melhor organização.
