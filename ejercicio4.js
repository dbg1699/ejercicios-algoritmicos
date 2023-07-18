function invertirCaso (string) {
    let palabra = ''
    let arrayLetras = string.split('')
    for (let i=0; i<arrayLetras.length; i++){
        if(arrayLetras[i] === arrayLetras[i].toUpperCase()){
            palabra = palabra + arrayLetras[i].toLowerCase()
        }
        else{
            palabra = palabra + arrayLetras[i].toUpperCase();  
        }
    }
    return palabra; 
            }

console.log(invertirCaso('Ada Lovelace')) // 'aDA lOVELACE'

