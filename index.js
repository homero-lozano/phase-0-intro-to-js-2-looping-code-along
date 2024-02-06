const names = ["Guadalupe", "Ollie", "Aki",]  
function writeCards(cards) { 
    const messages = []
    for(let i = 0; i < cards.length; i++) {
        console.log(`Thank you, ${cards[i]}, for the wonderful surprise gift!`); 
        messages.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
    }
    return messages; 
}
writeCards(names);  
function countDown() {
    let countDown = 0 
    while (countDown < 11) {
        console.log(countDown++)
    }
}