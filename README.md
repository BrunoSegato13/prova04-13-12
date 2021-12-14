## Prova 04 ciclo 04 13/12/2021

A prova consiste no desenvolvimento de um sistema para gerenciar estoques de produtos, e está divida em três projetos, sendo eles:
 - Backend;
 - Frontend;
 - Projeto de teste com Selenium; e
 - E o diagrama [MER](https://github.com/BrunoSegato13/prova04-13-12/blob/master/documentation/mer-prova04.png) dos sistema;

### Tecnologias utilizadas:

 - Spring Boot;
 - React;
 - Banco de dados com H2; e
 - Selenium;

Para rodar o sistema você precisara ter algumas ferramentas instaladas, são elas:

 -  [Java JDK versão 11](https://www.oracle.com/br/java/technologies/javase/jdk11-archive-downloads.html);
 -  [Apache  Maven ](https://maven.apache.org/download.cgi)  versão 3.3+;
 -  [NodeJs](https://nodejs.org/en/download/) versão(recomendada) 16 ou superior;
 -  [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) versão(recomendada) 1.22 ou superior; 

Obs: Caso utilize alguma IDE como InteliJ ou Eclipse, não é necessário instalar o Maven, apenas certifique-se que possui a versão correta do Java JDK.  

 1. Faça um clone do repositório em sua máquina;
 2. Para rodar a api via terminal, acesse a pasta raiz do backend e execute os seguintes comandos:
 	  `mvn package -DskipTests` 
 	  `mvn clean install -DskipTests` 
		`mvn spring-boot:run` 
 3. Para rodar os testes da api no momento de buildar basta remover o **-DskipTests** do comando, caso queira executá-los separadamente rode `mvn test`;
 4. Para rodar o front, acesse a pasta frontend e execute os comandos:
	`yarn install`
	`yarn start`
 5. Quanto aos testes do front basta executar `yarn test`;
 6.  Caso utilize uma IDE a melhor forma de rodar os projetos da api e Selenium é abrir/importar os projetos para sua IDE e executar através dela;
 7. Caso queira rodar os testes com o Selenium através do terminal, é possível fazer algumas alterações no projeto adicionando os plugins de build do Maven e Surefire ao POM, conforme este [artigo](https://medium.com/@kiranreddy365/how-to-run-selenium-tests-using-maven-through-command-line-f4f48b37aba4) ;
 
Obs: O H2 está configurado para gerar um arquivo do db, para que não perca os dados inseridos toda vez que parar a api, desta forma o arquivo com os dados ficará salvo na pasta raiz do seu usuário exemplo **C:** no windows ou na pasta **home/usuario** linux;


