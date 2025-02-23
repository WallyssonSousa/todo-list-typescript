import { Tarefa } from "./tarefa";

export class ListaDeTarefas{
    tarefas: Tarefa[];

    constructor(){
        this.tarefas = [];
    }

    adicionarTarefa(tarefa: Tarefa){
        this.tarefas.push(tarefa);
    }

    listarTarefas(){
        return this.tarefas.map(tarefa => tarefa.exibir()).join("\n");
    }

    concluirTarefa(titulo: string){
        const tarefa = this.tarefas.find(t => t.titulo === titulo);
        if(tarefa){
            tarefa.concluir();
        }
    }
}