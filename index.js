function writeCards(names, eventName) {
    const messages = [];
    
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    
    return messages;
}
function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
        console.log(i); // Log the current number
    }
}
