let getUser = (id, callback) => {
    let user = {
        id: id,
        name: 'Hamed'
    }
    setTimeout(() => {
        callback(user)
    }, 3000)
}

getUser(21, (userObject) => {
    console.log(userObject)
})