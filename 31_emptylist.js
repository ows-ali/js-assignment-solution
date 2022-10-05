// usernames = ['admin','Eric','Bhatti','Arshad','Warsi']
let usernames = []
if (usernames.length == 0) {
    console.log("We need to find users")
}
else {
    usernames.map(username => {
        if (username == 'admin') {
            console.log("Hello Admin! Would you like to see the status report?")
        } else {
            console.log(`Hello ${username}! Thanks for logging in again`)
        }
    })
}