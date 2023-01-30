
const textArea= document.querySelector("#inputTexto");
const mensagem= document.querySelector("#outputTexto");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

//Criptografar
function btnCriptografa() {
    const textoCritografa = encriptar (textArea.value);
    mensagem.value= textoCritografa;
    textArea.value= "";
 }

function encriptar(mensagemCriptografa){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    mensagemCriptografa = mensagemCriptografa.toLowerCase();

    for(let i=0; i< matrizCodigo.length; i++){
        if (mensagemCriptografa.includes (matrizCodigo[i][0])){
            mensagemCriptografa= mensagemCriptografa.replaceAll(matrizCodigo [i][0], matrizCodigo [i][1]);      
        }
    }
    return mensagemCriptografa;

}

//Descriptografar
function btnDescriptografa() {
    const textoDescCritografa = desencriptar (textArea.value);
    mensagem.value= textoDescCritografa;
    textArea.value= "";
 }

function desencriptar(mensagemDescriptografa){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    mensagemDescriptografa = mensagemDescriptografa.toLowerCase();

    for(let i=0; i< matrizCodigo.length; i++){
        if (mensagemDescriptografa.includes (matrizCodigo[i][1])){
            mensagemDescriptografa= mensagemDescriptografa.replaceAll(matrizCodigo [i][1], matrizCodigo [i][0]);      
        }
    }
    return mensagemDescriptografa;

}

// Copiar texto
function copiaTexto() {
    let copiar= (mensagem.value);
    navigator.clipboard.writeText (copiar);
    console.log (copiar)
    alert("Agora voce pode colar onde desejar")
}
// Transferir o texto para recriptografar
function tranfereTexto(){
    let textoCopiado= (mensagem.value);
    textArea.value= textoCopiado;
    mensagem.value= ""; 
}
