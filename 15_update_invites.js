let relatives = ['Amer', 'Akbar', 'Anthony']
relatives.map(relative=>[
    console.log(`Hello ${relative}! You are invited to the dinner party`)
])
console.log(`Guest no 3: ${relatives[2]} cant make it to the dinner. Inviting someone else`)
relatives[2] = "John"
relatives.map(relative=>[
    console.log(`Hello ${relative}! You are invited to the dinner party`)
])
