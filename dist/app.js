"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listaDeTarefas_1 = require("./listaDeTarefas");
const tarefa_1 = require("./tarefa");
const listaDeTarefas = new listaDeTarefas_1.ListaDeTarefas();
const tarefa1 = new tarefa_1.Tarefa("Criar uma todo-list", "Criar uma todo-list utilizando os conceitos de typescript");
listaDeTarefas.adicionarTarefa(tarefa1);
console.log("Lista de Tarefas: ");
console.log(listaDeTarefas.listarTarefas());
listaDeTarefas.concluirTarefa("Criar uma todo-list");
console.log("\n Lista de Tarefas após concluir uma Tarefa: ");
console.log(listaDeTarefas.listarTarefas());
