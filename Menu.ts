import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';

export function menu() {

    let opcao: number;

    while (true) {

        console.log(colors.bg.black, colors.fg.magenta, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                  DARKBOOKS                          ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar todos os produtos             ");
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
                
                keyPress()
                break;
            case 2:
                console.log(colors.fg.red, 
                    "\n\nListar todos os Produtos\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.red, 
                    "\n\Listar Produto por ID\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.red, 
                    "\n\nAtualizar Produto\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.red,
                    "\n\nDeletar Produto\n\n", colors.reset);

                keyPress()
                break; 

            default:
                    console.log("Opção inválida! Por favor, peço que escolha uma opção válida.");
                    keyPress();
                break;
        }
    }

}

export function sobre(): void {
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