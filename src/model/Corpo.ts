import { Produto } from "./Produto";

export class Corpo extends Produto{
    
    private _brochura: string;
    private _capadura: string;
    private _ebook: string;
    

	constructor(_id: number, _nome: string, _tipo: number, _preco: number, _brochura: string, _capadura: string, _ebook: string) {
        super(_id, _nome, _tipo, _preco)
		this._brochura = _brochura;
		this._capadura = _capadura;
		this._ebook = _ebook;
	}


    /**
     * Getter _brochura
     * @return {string}
     */
	public get_brochura(): string {
		return this._brochura;
	}

    /**
     * Getter _capadura
     * @return {string}
     */
	public get_capadura(): string {
		return this._capadura;
	}

    /**
     * Getter _ebook
     * @return {string}
     */
	public get_ebook(): string {
		return this._ebook;
	}

    /**
     * Setter _brochura
     * @param {string} value
     */
	public set_brochura(value: string) {
		this._brochura = value;
	}

    /**
     * Setter _capadura
     * @param {string} value
     */
	public set_capadura(value: string) {
		this._capadura = value;
	}

    /**
     * Setter _ebook
     * @param {string} value
     */
	public set_ebook(value: string) {
		this._ebook = value;
	}


	

    public visualizar(): void {
        super.visualizar();
        console.log("****************************************************")
        console.log("Tipos de livro")
        console.log("****************************************************")
        console.log(`Id do livro: ${this._brochura}`)
        console.log(`Nome do livro: ${this._capadura}`)
        console.log(`Preço do livro: ${this._ebook}`)
    }


}