
import { Produto } from "../model/Produto";
import { Repository } from "../repository/Repository";

export class Controller implements Repository {
    private listaProdutos: Array<Produto> = [];
    public _id: number = 0;

    procurarPorId(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto !== null)
            buscaProduto.visualizar();
        else
            console.log("\nO Produto não foi encontrado!");
    }

    listarTodas(): void {
        for (let produto of this.listaProdutos) {
            produto.visualizar();
        }
    }

    cadastrar(produto: Produto): void {
        produto._id = this.gerarId();
        this.listaProdutos.push(produto);
        console.log("O Produto foi adicionado!");
    }

    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto._id);

        if (buscaProduto !== null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(`O produto número ${produto._id} foi atualizado com sucesso!`);
        } else
            console.log("\nO Produto não foi encontrado!");
    }

    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto !== null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log(`O Produto número ${id} foi excluído com sucesso!`);
        } else
            console.log("\nO Produto não foi encontrado!");
    }

    public gerarId(): number {
        return ++this._id;
    }

    public buscarNoArray(id: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto._id === id)
                return produto;
        }

        return null;
    }
}
