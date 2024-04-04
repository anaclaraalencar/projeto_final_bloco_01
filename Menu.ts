import readlinesync = require("readline-sync");

import { colors } from './src/util/Colors';
import { Controller } from "./src/controller/Controller";
import { Produto } from "./src/model/Produto";
import { Fisico } from "./src/model/Fisico";
import { Ebook } from "./src/model/Ebook";

export function menu() {

    let opcao, id, tipo, preco: number;
    let nome, fisico, ebook: string;
    let tipoProduto = ['Fisico', 'Ebook'];

    // Objeto da Classe ProdutoController
    const produtoController: Controller = new Controller();

    produtoController.cadastrar(new Fisico(produtoController.gerarId(),
       "It a Coisa", 1, 45.00, "Brochura"));

    produtoController.cadastrar(new Ebook(produtoController.gerarId(),
        "Coraline", 2, 60.00, "Mobi"));

    while (true) {

        console.log(colors.bg.black, colors.fg.magenta, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                  DARKBOOKS                          ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Listar Produto por ID                ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Deletar Produto                      ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if(opcao == 0){
            console.log(colors.fg.magenta, 
                "\nVoce saiu, volte sempre!");
            console.log(colors.fg.magenta, 
                "\nDarkBooks - A sua livraria sombria!");
                sobre();
                process.exit(0);
            }

        switch (opcao) {
           
            case 1:
                console.log(colors.fg.red, 
                    "\n\nCadastrar Produto\n\n", colors.reset);
                    nome = readlinesync.question("Digite o Nome do Produto: ");

                    tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;
    
                    preco = readlinesync.questionFloat("Digite o preco: ");

                    switch (tipo) {
                        case 1:
                            fisico = readlinesync.question("Digite o tipo de encardenacao do livro: ");
                            produtoController.cadastrar(new Fisico(produtoController.gerarId(),
                                  nome, tipo, preco, fisico));
                            break;
                        case 2:
                            ebook = readlinesync.question("Digite o tipo de arquivo do ebook: ");
                            produtoController.cadastrar(new Ebook(produtoController.gerarId(),
                                nome, tipo, preco, ebook));
                            break;
                    }
    
                    keyPress()
                    break;
                case 2:
                    console.log(colors.fg.whitestrong,
                        "\n\nListar todos os Produtos\n\n", colors.reset);
    
                    produtoController.listarTodas();
    
                    keyPress()
                    break;
                case 3:
                    console.log(colors.fg.whitestrong,
                        "\n\nConsultar dados do Produto - por Id\n\n", colors.reset);
    
                        id = readlinesync.questionInt("Digite o Id do Produto: ");
                        produtoController.procurarPorId(id);
    
                    keyPress()
                    break;
                case 4:
                    console.log(colors.fg.whitestrong,
                        "\n\nAtualizar dados do Produto\n\n", colors.reset);
    
                        id = readlinesync.questionInt("Digite o Id do Produto: ");
                        
                        let produto = produtoController.buscarNoArray(id);
    
                        if (produto !== null){
    
                            nome = readlinesync.question("Digite o Nome do Produto: ");
    
                            tipo = produto._tipo;
            
                            preco = readlinesync.questionFloat("Digite o preco: ");
            
                            switch (tipo) {
                                case 1:
                                    fisico = readlinesync.question("Digite o tipo de encardenacao do livro: ");
                                    produtoController.atualizar(new Fisico(id,
                                        nome, tipo, preco, fisico));
                                    break;
                                case 2:
                                    ebook = readlinesync.question("Digite o tipo de arquivo do ebook: ");
                                    produtoController.atualizar(new Ebook(id,
                                        nome, tipo, preco, ebook));
                                    break;
                            }
    
                        }else
                            console.log("Lamento, o Produto não foi Encontrado!")
    
                    keyPress()
                    break;
                case 5:
                    console.log(colors.fg.whitestrong,
                        "\n\nApagar um Produto\n\n", colors.reset);
    
                        id = readlinesync.questionInt("Digite o Id do Produto: ");
                        produtoController.deletar(id);
    
                    keyPress()
                    break;
                default:
                    console.log(colors.fg.whitestrong,
                        "\nOpção Inválida!\n", colors.reset);
    
                    keyPress()
                    break;
            }
        }
    
    }
    

    function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Ana Clara de Alencar ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("https://github.com/anaclaraalencar");
    console.log("*****************************************************");
}

    function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

menu();