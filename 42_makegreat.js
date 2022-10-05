
let magicians = ["a", "b","c"]
function show_magicians(arr){
    arr.map(a=>{
        console.log(a)
    })
}
function make_great(arr){
    
    for (let i=0;i<arr.length;i++){
        arr[i] = `The Great ${arr[i]}`
    }
}
make_great(magicians)
show_magicians(magicians)