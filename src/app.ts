import { ListaDeTarefas } from "./listaDeTarefas";
import { Tarefa } from "./tarefa";

const listaDeTarefas = new ListaDeTarefas();

const tarefa1 = new Tarefa("Criar uma todo-list", "Criar uma todo-list utilizando os conceitos de typescript")

listaDeTarefas.adicionarTarefa(tarefa1);

console.log("Lista de Tarefas: ");
console.log(listaDeTarefas.listarTarefas());

listaDeTarefas.concluirTarefa("Criar uma todo-list");

console.log("\nLista de Tarefas após concluir uma Tarefa: ");
console.log(listaDeTarefas.listarTarefas());