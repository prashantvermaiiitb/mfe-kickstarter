/**
 * Creating Heading tag 
 * @param {*} msg 
 * @returns 
 */
const header = (msg) => {
    const h1 = document.createElement('h1');
    h1.innerHTML = msg || `Micro-Front-End Demo`
    return h1;
}

export default header;