let current_users = ["Adam", "Eve", "Abraham", "Lincoln", "Bush"]
let new_users = ["Obama", "Bush", "Putin", "Satan", "kiddo"]

let lower_cur_users = current_users.map(user=>{return user.toLowerCase()})

new_users.map(user=>{
    if (lower_cur_users.indexOf(user.toLowerCase()) == -1){
        console.log("Username is available")
    }
    else {
        console.log("You have to choose another username")
    }
})