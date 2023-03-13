let texto = "Texto invertido"
let textoReverse =''

for(let i = texto.length - 1; i>= 0; i--){
    textoReverse+= texto[i];
}

console.log(textoReverse);