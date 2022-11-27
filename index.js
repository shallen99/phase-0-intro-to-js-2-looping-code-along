// Code your solutions in this file
function writeCards(name, surprise){
    for(let i=0; i<name.length; i++){
        name[i]=`Thank you, ${name[i]}, for the wonderful ${surprise} gift!`;
    }
    return name;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "Surprise");

function countDown(number){
    while(number>=0){
        console.log (number--);
        debugger;
    }
}
countDown(4)
