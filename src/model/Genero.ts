import { Produto } from "./Produto";

export class Genero extends Produto{
    
    private _suspense: string;
    private _terror: string;
    private _truecrime: string;
    

	constructor(_id: number, _nome: string, _tipo: number, _preco: number, _suspense: string, _terror: string, _truecrime: string) {
        super(_id, _nome, _tipo, _preco)
		this._suspense = _suspense;
		this._terror = _terror;
		this._truecrime = _truecrime;
	}


    /**
     * Getter _suspense
     * @return {string}
     */
	public get_suspense(): string {
		return this._suspense;
	}

    /**
     * Getter _terror
     * @return {string}
     */
	public get_terror(): string {
		return this._terror;
	}

    /**
     * Getter _truecrime
     * @return {string}
     */
	public get_truecrime(): string {
		return this._truecrime;
	}

    /**
     * Setter _suspense
     * @param {string} value
     */
	public set_suspense(value: string) {
		this._suspense = value;
	}

    /**
     * Setter _terror
     * @param {string} value
     */
	public set_terror(value: string) {
		this._terror = value;
	}

    /**
     * Setter _truecrime
     * @param {string} value
     */
	public set_truecrime(value: string) {
		this._truecrime = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log("****************************************************")
        console.log("Genero")
        console.log("****************************************************")
        console.log(`Id do livro: ${this._suspense}`)
        console.log(`Nome do livro: ${this._terror}`)
        console.log(`Preço do livro: ${this._truecrime}`)
    }


}