# Sobre o projeto

Um site com multiplas páginas e layout responsivo proposto como desafio pelo site Front-end Mentor.
[Acesso á página do projeto](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3)

### Design

Foi disponibilizado o arquivo de layouts do [Figma](https://www.figma.com/file/ssE7h37zqbWwXoe0Rsn3av/space-tourism-website?node-id=0%3A1331).

<div class="layouts" style=display:grid; grid-template-collums: 1fr 1fr 1fr;>

  <div style=display:flex;>
    <h4>Mobile</h4>
    <img src="https://user-images.githubusercontent.com/65618765/183302627-fb2cb43d-211c-483b-baee-cce0e0c26800.png" width="15%">
    <img src="https://user-images.githubusercontent.com/65618765/183302636-4cf1f831-a005-4b8e-92ed-c7618741c865.png" width="15%"">
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
