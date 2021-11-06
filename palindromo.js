// Solução 1
function verificaPalindromo(string){
    if(!string) return "String Inexistente.";

    return string.split("").reverse().join("") === string;
}



// Solução 2

function verificaPalindromo(string){
    if(!string) return "String Inexistente.";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }        
    }
    return true;
}

