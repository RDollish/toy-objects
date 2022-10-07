const toys = [
    
{
    id: 1,
    name: "Teddy Bear",
    maker: "ToysForUs",
    color: "brown",
    price: 20,
    weight: 1.2
},

{
    id: 2,
    name: "Thomas",
    maker: "FunTimes",
    color: "blue",
    price: 25,
    weight: .7
},

{
    id: 3,
    name: "Sparkles",
    maker: "Laughin",
    color: "pink",
    price: 9,
    weight: .9
}]

toys.push({
    id: 4,
    name: "Submarine",
    maker: "Underwata",
    color: "yellow",
    price: 16,
    weight: .5
},
{
    id: 5,
    name: "Dinosaur",
    maker: "RawrInc",
    color: "green",
    price: 12,
    weight: 1.6
})

for (const toy of toys) {
    if (toy.id === 2) {
    toy.price = toy.price * 1.05
    console.log(`The ${toy.color} ${toy.name} costs ${toy.price} and weighs ${toy.weight}`)
    }
}
