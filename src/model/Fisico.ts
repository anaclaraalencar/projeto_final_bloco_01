import { Produto } from "./Produto";

export class Fisico extends Produto{
    
    public _fisico: string;


	constructor(_id: number, _nome: string, _tipo: number, _preco: number, _fisico: string) {
        super( _nome, _id, _tipo, _preco);
		this._fisico = _fisico;

    }

    /**
     * Getter _fisico
     * @return {string}
     */
	 public get_fisico(): string {
		return this._fisico;
	}

    /**
     * Setter _fisico
     * @param {string} value
     */
	public set_fisico(value: string) {
		this._fisico = value;
	}

	public visualizar(): void {
        super.visualizar();
        console.log("****************************************************")
        console.log(`Formato do produto: ${this._fisico}`)
        
    }


}