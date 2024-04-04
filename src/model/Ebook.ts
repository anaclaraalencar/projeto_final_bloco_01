import { Produto } from "./Produto";

export class Ebook extends Produto {
    public _ebook: string;

    constructor(_id: number, _nome: string, _tipo: number, _preco: number, _ebook: string) {
        super( _nome, _id, _tipo, _preco);
        this._ebook = _ebook;
    }

    /**
     * Getter ebook
     * @return {string}
     */
	public get ebook(): string {
		return this._ebook;
	}

    /**
     * Setter ebook
     * @param {string} value
     */
	public set ebook (value: string) {
		this._ebook = value;
	}

    
    public visualizar(): void {
        super.visualizar();
        console.log("****************************************************");
        console.log(`Formato do produto: ${this._ebook}`);
    }
}
