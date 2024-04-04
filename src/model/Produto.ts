export abstract class Produto{


    private _nome: string;
    public _id: number;
    public _tipo: number;
    private _preco: number;
    
   


	constructor( _nome: string, _id: number, _tipo: number, _preco: number) {
		this._nome = _nome;
        this._id = _id;
		this._tipo = _tipo;
		this._preco = _preco;
	}


    /**
     * Getter _id
     * @return {number}
     */
	public get_id(): number {
		return this._id;
	}

    /**
     * Getter _nome
     * @return {string}
     */
	public get_nome(): string {
		return this._nome;
	}

    /**
     * Getter _tipo
     * @return {number}
     */
	public get_tipo(): number {
		return this._tipo;
	}

    /**
     * Getter _preco
     * @return {number}
     */
	public get_preco(): number {
		return this._preco;
	}

    /**
     * Setter _id
     * @param {number} value
     */
	public set_id(value: number) {
		this._id = value;
	}

    /**
     * Setter _nome
     * @param {string} value
     */
	public set_nome(value: string) {
		this._nome = value;
	}

    /**
     * Setter _tipo
     * @param {number} value
     */
	public set_tipo(value: number) {
		this._tipo = value;
	}

    /**
     * Setter _preco
     * @param {number} value
     */
	public set_preco(value: number) {
		this._preco = value;
	}
    public visualizar(): void {

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Ebook"
                break;
            case 2:
                tipo = "Fisico"
                break;
        }

        console.log("****************************************************")
        console.log("Livro")
        console.log("****************************************************")
        console.log(`Id do livro: ${this._id}`)
        console.log(`Nome do livro: ${this._nome}`)
        console.log(`Tipo do livro: ${tipo}`)
        console.log(`Preço do livro: ${this._preco}`)
    }
}
