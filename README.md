# Lista de Tarefas (Todo List) - TypeScript
## Descrição
Este é um simples projeto de Lista de Tarefas (Todo List) desenvolvido com TypeScript. O objetivo deste projeto é permitir que você adicione tarefas, marque-as como concluídas e visualize a lista de tarefas com o status de cada uma delas.

## Funcionalidades:
Adicionar Tarefas: Você pode criar novas tarefas informando um título e uma descrição.
Marcar Tarefas como Concluídas: Após adicionar as tarefas, você pode marcar aquelas que foram concluídas.
Exibir Tarefas: O sistema lista todas as tarefas e exibe o seu status (pendente ou concluída).

## Como rodar: 

<ul>
  <li>npm install typescript --save-dev</li>
  <li>npx tsc</li>
  <li>node dist/app.js</li>
</ul>

## Exemplo de saída esperada: 

Lista de Tarefas: 
Criar uma todo-list: Criar uma todo-list utilizando os conceitos de typescript - Pendente

Lista de Tarefas após concluir uma Tarefa: 
Criar uma todo-list: Criar uma todo-list utilizando os conceitos de typescript - Concluída

## Estrutura do projeto: 

todo-list-typescript/

│
├── src/                   
│   ├── app.ts            
│   ├── tarefa.ts          
│   └── listaDeTarefas.ts  
│
├── dist/                  
│
├── package.json           
├── tsconfig.json          
└── README.md              

## Licença 

Este projeto é licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

## Explicação do código:

<ul>
  <li>Tarefa: A classe Tarefa representa uma tarefa individual com título, descrição e um status indicando se está concluída ou não.</li>
  <li>ListaDeTarefas: A classe ListaDeTarefas gerencia a lista de tarefas, permitindo adicionar novas tarefas, listar todas as tarefas e marcar tarefas como concluídas.</li>
  <li>App.ts: Este é o arquivo principal que cria instâncias das tarefas e da lista, simula a adição e a conclusão de tarefas, e exibe a lista no terminal.</li>
</ul>
