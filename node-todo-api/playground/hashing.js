const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

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