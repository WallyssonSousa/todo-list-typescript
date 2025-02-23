"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaDeTarefas = void 0;
class ListaDeTarefas {
    constructor() {
        this.tarefas = [];
    }
    adicionarTarefa(tarefa) {
        this.tarefas.push(tarefa);
    }
    listarTarefas() {
        return this.tarefas.map(tarefa => tarefa.exibir()).join("\n");
    }
    concluirTarefa(titulo) {
        const tarefa = this.tarefas.find(t => t.titulo === titulo);
        if (tarefa) {
            tarefa.concluir();
        }
    }
}
exports.ListaDeTarefas = ListaDeTarefas;
