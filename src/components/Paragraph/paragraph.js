/**
 * Creating Paragraph tag 
 * @param {*} msg 
 * @returns 
 */
const paragraph = (msg) => {
    const p = document.createElement('p');
    p.innerHTML = msg || `Become champion in Micro-Front end`
    return p;
}

export default paragraph;