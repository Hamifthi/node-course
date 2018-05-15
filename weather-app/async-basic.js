console.log('starting app')

setTimeout(() => {
    console.log('Inside of callback')
}, 2000)

setTimeout(() => {
    console.log('set second time out')
}, 0)

console.log('finishing app')