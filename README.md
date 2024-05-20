![Logo](https://github.com/MuriloNogr/ArgosAI-Sprint2/blob/main/ArgosAIMainLogo.jpeg)

# ArgosAI

## 1. Introdução
O projeto ArgosAI é uma aplicação Java baseada em Spring Boot que visa fornecer um serviço de monitoramento e manipulação de estoque em tempo real, com a possibilidade de busca de itens com base no perfil do usuário por meio de inteligência artificial (ainda não implementada).

## 2. Tecnologias Utilizadas

### Back-End:
- Java 17
- Spring Boot
- Spring Data JPA
- Spring Data REST
- Spring HATEOAS
- Spring Web
- Spring Web Services
- Spring WebFlux
- Hibernate 6.4.4
- Oracle Database JDBC Driver (ojdbc8)
- Lombok
- ModelMapper
- Spring Boot Test
- Reactor Test
- Spring REST Docs (para geração de documentação)
- Jakarta Validation API

### Front-End:
- React
- react-router-dom
- axios
- react-icons
- CSS
- JavaScript (ES6)

## 3. Arquitetura

### Back-End:
O projeto segue uma arquitetura baseada no padrão MVC (Model-View-Controller) para o backend, onde os controllers lidam com as requisições HTTP, os services executam a lógica de negócios e os repositories interagem com o banco de dados.

### Front-End:
O projeto segue uma arquitetura baseada em componentes para o front-end, utilizando o React para criar uma interface de usuário dinâmica e interativa. Cada componente é responsável por uma parte específica da aplicação, facilitando a manutenção e a escalabilidade. A navegação é gerenciada pelo `react-router-dom`, permitindo uma experiência de usuário fluida entre diferentes páginas. A comunicação com o backend é realizada via `axios`, permitindo a realização de requisições HTTP para interagir com a API. A biblioteca `react-icons` é utilizada para incluir ícones na interface, enquanto o CSS é utilizado para estilizar os componentes e garantir uma aparência coesa e atraente.

## 4. Estrutura do Código
O código está estruturado em pacotes que refletem a responsabilidade de cada componente:

- `br.com.fiap.argosai.controller`: Contém os controllers responsáveis por receber requisições HTTP e enviar respostas.
- `br.com.fiap.argosai.controller.dto`: Contém os DTOs (Data Transfer Objects) utilizados para representar dados de entrada e saída dos controllers.
- `br.com.fiap.argosai.model`: Contém as entidades JPA que representam os dados do domínio.
- `br.com.fiap.argosai.repository`: Contém as interfaces de repositório que definem operações de acesso aos dados.
- `br.com.fiap.argosai.service`: Contém os serviços que implementam a lógica de negócios da aplicação.

## 5. Endpoints da API
- `GET /api/produtos`: Retorna todos os produtos cadastrados.
- `GET /api/produtos/{id}`: Retorna o produto com o ID especificado.
- `POST /api/produtos`: Cria um novo produto com base nos dados fornecidos.
- `PUT /api/produtos/{id}`: Atualiza o produto com o ID especificado com os novos dados fornecidos.
- `DELETE /api/produtos/{id}`: Exclui o produto com o ID especificado.

## 6. Configuração e Execução

1. Após abrir o projeto em seu IntelliJ, navegue até `src/main/java/br/com/fiap/argosai/ArgosAiApplication.java`.
![Passo 1](https://github.com/MuriloNogr/ArgosAI-Sprint2/blob/main/Captura%20de%20tela%202024-05-20%20164440.png)

2. Execute a classe `ArgosAiApplication.java`.
![Passo 2](https://github.com/MuriloNogr/ArgosAI-Sprint2/blob/main/Captura%20de%20tela%202024-05-20%20164454.png)

3. Aguarde enquanto o Spring inicializa o servidor Tomcat.
![Passo 3](https://github.com/MuriloNogr/ArgosAI-Sprint2/blob/main/Captura%20de%20tela%202024-05-20%20164528.png)

4. Após inicializado o back-end, navegue até a pasta `frontend` na raiz do projeto.
![Passo 4](https://github.com/MuriloNogr/ArgosAI-Sprint2/blob/main/Captura%20de%20tela%202024-05-20%20164547.png)

5. Abra o terminal no diretório do frontend.
![Passo 5](https://github.com/MuriloNogr/ArgosAI-Sprint2/blob/main/Captura%20de%20tela%202024-05-20%20164605.png)

6. Execute o comando `npm install` para baixar as dependências necessárias.
![Passo 6](https://github.com/MuriloNogr/ArgosAI-Sprint2/blob/main/Captura%20de%20tela%202024-05-20%20164718.png)

7. Execute o comando `npm start` para rodar o front-end da aplicação.
![Passo 7](https://github.com/MuriloNogr/ArgosAI-Sprint2/blob/main/Captura%20de%20tela%202024-05-20%20164756.png)

8. A aplicação irá abrir por padrão na porta `http://localhost:3000`.
![Passo 8](https://github.com/MuriloNogr/ArgosAI-Sprint2/blob/main/Captura%20de%20tela%202024-05-20%20164832.png)

## 7. Considerações Finais
O projeto ArgosAI apresenta uma estrutura robusta e modular, facilitando a manutenção e extensão futura. Além disso, a integração com diversas tecnologias Spring oferece uma base sólida para o desenvolvimento de aplicações web escaláveis e de alto desempenho.

### Artefatos do arquivo `pom.xml`
- **Spring Boot Starters**: Conjunto de dependências do Spring Boot que facilitam a configuração de projetos Spring.
- **Hibernate**: Framework ORM para mapeamento objeto-relacional.
- **Oracle Database JDBC**: Driver JDBC para conexão com o banco de dados Oracle.
- **Lombok**: Biblioteca que automatiza a geração de código boilerplate em classes Java.
- **ModelMapper**: Biblioteca para mapeamento de objetos.
- **Spring Boot Test**: Dependência para testes automatizados em projetos Spring Boot.
- **Reactor Test**: Dependência para testes reativos.
- **Spring REST Docs**: Ferramenta para geração de documentação de API.
- **Jakarta Validation API**: API de validação de dados.

Estas dependências são essenciais para o funcionamento do projeto e para facilitar o desenvolvimento, teste e documentação da aplicação.

## Diagrama UML

### Back-End
![Diagrama UML](https://github.com/MuriloNogr/ArgosAI-Sprint2/blob/main/ArgosAI-UMLv2.png)

### Front-End
![Diagrama UML Front](https://github.com/MuriloNogr/ArgosAI-Sprint2/blob/main/ArgosAI-FrontUML.png)

##
Nossa Equipe: 

550531 - Luis Fernando Menezes Zampar: Disruptives Architectures (IOT, IOB & AI) | Compliance, Quality Assurance & Tests

551694 - Diogo Fagioli Bombonatti: DevOps Tools & Cloud Computing

89162 - Murilo Nogueira: JAVA Advanced | Mobile Aplication Development

550711 - Gabriel Galdino da Silva: Relational and Non-relational Databases | .NET
