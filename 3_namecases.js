let name="Akram KHAN"
console.log("in lowercase: ", name.toLowerCase())
console.log("in uppercase: ", name.toUpperCase())
console.log("in titlecase: ", name.split(' ').map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' '))
