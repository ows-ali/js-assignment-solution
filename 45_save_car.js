function save_car(carName, model, color, feature) {
    let obj = {
        name: carName,
        model
    }
    if (color) {
        obj.color = color
    }
    if (feature ) {
        obj.feature =  feature
    }
    return obj 
}
let resp = save_car("corolla",2019)
console.log(resp)

resp = save_car("corolla",2019, "black")
console.log(resp)


resp = save_car("corolla",2019, "black", "can fly")
console.log(resp)