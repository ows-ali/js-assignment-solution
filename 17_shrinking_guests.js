let relatives = ['Amer', 'Akbar', 'Anthony']
relatives.map(relative=>[
    console.log(`Hello ${relative}! You are invited to the dinner party`)
])
console.log(`Guest no 3: ${relatives[2]} cant make it to the dinner. Inviting someone else`)
relatives[2] = "John"
relatives.map(relative=>[
    console.log(`Hello ${relative}! You are invited to the dinner party`)
])
console.log("Adding more guests, since we have ordered a larger table")
relatives.unshift("Larry")
relatives.splice(2, 0, "Sally");
relatives.push("Jane")
relatives.map(relative=>[
    console.log(`Hello ${relative}! You are invited to the dinner party`)
])
console.log("Oops! The table wont arrive on time. I can invite only two people")
while(relatives.length>2){
    relative = relatives.pop()
    console.log(`Sorry! You are not invited ${relative}`)
}
while(relatives.length!=0){
    relative = relatives.pop()
    console.log(`You are still invited ${relative}`)
}
console.log(`printing list to check if it is empty or not: ${relatives}`)