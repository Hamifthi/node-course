const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = 'hamedDoingProgramming'

bcrypt.genSalt(10, (error, salt) => {
    bcrypt.hash(password, salt, (error, hash) => {
        console.log(hash)
    })
})

let hashedPassword = '$2a$10$vU9f8zJHvsm.FFtp7Iq0/eGERD2b3w7zoV8/iMxhyDucPB1T8XmPm'

bcrypt.compare(password, hashedPassword, (error, result) => {
    console.log(result)
})

// let message = 'I am Hamed Fathi'
// let hash = SHA256(message).toString();
// console.log(`Hash: ${hash}`);

// let data = {
//     id: 4
// };

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(data)).toString();

// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
//     console.log('Data was not change')
// }
// else {
//     console.log('Data was change do not trust')
// }