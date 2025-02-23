export class Tarefa{
    titulo: string;
    descricao: string;
    concluida: boolean;

    constructor(titulo: string, descricao: string){
        this.titulo = titulo;
        this.descricao = descricao;
        this.concluida = false;
    }

    concluir(){
        this.concluida = true;
    }

    exibir(){
        return `${this.titulo}: ${this.descricao} - ${this.concluida ? "Concluída" : "Pendente"}`; 
    }
}