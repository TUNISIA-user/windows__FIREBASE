

const  generateId = ()=> {
    let ch = "";
    while (ch.length < 10) {
        ch += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    return ch;
}

export default generateId