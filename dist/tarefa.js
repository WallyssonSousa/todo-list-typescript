"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarefa = void 0;
class Tarefa {
    constructor(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.concluida = false;
    }
    concluir() {
        this.concluida = true;
    }
    exibir() {
        return `${this.titulo}: ${this.descricao} - ${this.concluida ? "Concluída" : "Pendente"}`;
    }
}
exports.Tarefa = Tarefa;
