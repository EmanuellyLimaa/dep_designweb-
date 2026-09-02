let nome = prompt("Digite seu nome: "); //string
let nasc =  Number(prompt("Digite seu ano de nascimento: "));
 //nasc = Number (nasc)
let viva = confirm("Clique em ok se estiver viva. Caso contrário cancelar."); //boolean
let altura = Number(altura);
let sexo = prompt("Digite seu sexo: ");  
let peso = prompt("Digite seu peso; "); 
peso = Number(peso);
let imc = peso/altura; //nan (not a number) - valor inválido

console.log ("nome", typeof(nome));
console.log ("nasc", typeof(nasc));
console.log ("viva", typeof(viva));
console.log ("altura", typeof(altura));
console.log ("sexo", typeof(sexo));
console.log ("peso", typeof(peso));
console.log ("imc", typeof(imc));

let msg = `Nome: ${nome}\nAno de Nascimento: ${nasc}\nViva: ${viva}`;
msg = + `\nAltura: ${altura}\nSexo: ${sexo}\nPeso: ${peso}`;
msg = msg + `\nIMC: ${imc.toFixed(2)}`;

alert(msg);