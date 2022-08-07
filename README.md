# Sobre o projeto

Um site com multiplas páginas e layout responsivo proposto como desafio pelo site Front-end Mentor.
[Acesso á página do projeto](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3)

### Design

Foi disponibilizado o arquivo de layouts do [Figma](https://www.figma.com/file/ssE7h37zqbWwXoe0Rsn3av/space-tourism-website?node-id=0%3A1331).

## Implementacoes gerais

## Funcionalidades

Verifiquei que o site possui uma especie de carousel para exibir as informacoes contidas nas paginas quando seus respectivos botoes sao adicionados.

Decidi implementar a ideia do carousel em JavaScript puro, ao inves de utilizar bibliotecas como Bootstrap, por exemplo. As informacoes serao carregadas a partir de um arquivo JSON, que esta hospedado localmente no diretorio /assets/json. Com isso, tenho dois objetivos principais:

- Consolidar a pratica de uso de APIs;
- Deixar a aplicacao preparada para carregar informacoes externas, porque pode ficar inviavel carregar todas as informacoes no HTML.

## TODO List

- [x] Fazer com que o site, ao abrir, apresente as informacoes do primeiro elemento do array; atualmente esta vindo vazio; //pode ser criando uma funcao na inicializacao do JS
- [x] Adicionar imagem ao JSON;
- [x] Popular o campo imagem dinamicamente no HTML.

### HTML

- [ ] Construir templates para as paginas:
  - [ ] Crew
  - [ ] Technology

### CSS

- [ ] Aplicar estilos para as paginas:
  - [ ] Crew
  - [ ] Technology

### JSON

- [ ] Criar JSON para as paginas:
  - [ ] Crew
  - [ ] Technology

### JavaScript

- [ ] Criar funcoes para as paginas:
  - [ ] Crew
  - [ ] Technology
  - [ ] Modularizar os scripts: ter um script geral que carrega os demais scripts. [MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules)
