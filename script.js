//1
let human = {
    name: "Амирхон",
    age: 15,
    school: 21,
    address: "Гало Осиё",
    hobby: "Рисовать",
    isMaried: false,
}
//
console.log(`
    Привет, мена зовут ${human.name}. Мне ${human.age} лет. Я учусь в школе ${human.school}. Мое хобби это рисование.
    Я живу в махале ${human.address}. Итак я не ${human.isMaried} женат.
`);
//2
let family = [
    {
        name: "Райимхон",
        age: 46,
        isMaried: true,
    },
    {
        name: "Наргиза",
        age: 43,
        isMaried: true,
    },
    {
        name: "Конечно я сам",
        age: 15,
        isMaried: false,
    },
    {
        name: "Олимхон",
        age: 11,
        isMaried: false,
    },
    {
        name: "Темурхон",
        age: 8,
        isMaried: false,
    },
    {
        name: "Азизхон",
        age: 5,
        isMaried: false,
    },
]
let maried = []
let single = []
//
family.forEach(element => {
    if (element.isMaried) {
        maried.push(element)
    } else {
        single.push(element)
    }
}) 
console.log("Женат", maried);
console.log("Неженат", single);

    