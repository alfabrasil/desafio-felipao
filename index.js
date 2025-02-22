// Variável para nome do herói
let nomeHeroi = "Alfabrasil";

// Variável para o XP do herói
let xpHeroi = 9000;

// Variável para armazenar o nível do herói
let nivelHeroi;

// Estrutura de decisão: if, else if, else 
if (xpHeroi <1000){
    nivelHeroi = "Ferro";

}else if (xpHeroi >= 1001 && xpHeroi <= 2000){
    nivelHeroi = Bronze;
}else if (xpHeroi >= 2001 && xpHeroi <= 5000){
    nivelHeroi = "Prata";
}else if (xpHeroi >= 5001 && xpHeroi <= 7000){
    nivelHeroi = "Platina";
}else if (xpHeroi >= 7001 && xpHeroi <= 8000){
    nivelHeroi = "Ouro";
}else if (xpHeroi >= 8001 && xpHeroi <= 9000){
    nivelHeroi = "Ascendente";
}else if (xpHeroi >= 9001 && xpHeroi <= 10000){
    nivelHeroi = "Imortal";l
}else{
    nivelHeroi = "Radiante";
}

//Executando saída:
console.log(`O Herói de nome ${nomeHeroi} está no nível ${nivelHeroi}`);