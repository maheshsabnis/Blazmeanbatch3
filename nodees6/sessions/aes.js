// using Crypto an industry standard practice for
// Open Web App Security Practice (OWSP)

import crypto from 'crypto';
// Buffer is standard Node.js class that is used to define 
// a buffered stream for input values or characters
let iv  = new Buffer.from(''); // null or empty
// select the crypto algo
let algorithm = 'aes-256-ecb';
// lets choose the password for encryption
let password = 'a4e1112f45e84f785358bb86ba750f48';

function encrypt(buffer) {
    let cipher = crypto.createCipheriv(algorithm, new Buffer.from(password), iv);
    let crypted = Buffer.concat([cipher.update(buffer), cipher.final()]);
    return crypted; // get the symbolic form of cipher value
}
// define a string for encryption
let strValue = 'textToEncrypt';
console.log(`Encrypted value = ${encrypt(new Buffer.from(strValue)).toString()}`);