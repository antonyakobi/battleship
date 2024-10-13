// Позиция корабля
const randomLoc = Math.floor(Math.random() * 5) // от 0 до 4
const location1 = randomLoc 
const location2 = location1 + 1 
const location3 = location2 + 1

// Потоплен или нет
let isSunk = false;
// Предпологаемая позиция кораблся ("выстрел")
let guess; 
// Добавляем счётик попаданий
let hits = 0;
// создаём счётчик выстрелов
let guesses = 0;


while (isSunk === false) {
    // Не забываем, что строку нужно превратить в число
    guess = +prompt("Fire! Enter a number 0-6")
    if(guess < 0 || guess > 6) {
        alert("Please, enter a valid cell number")
    } else {
        // Увеличиваем счётчик выстрелов
        guesses = guesses + 1
        // Логическое ИЛИ
    if(guess === location1 || guess === location2 || guess === location3) {
        alert("HIT!")
        // Считаем попадания
        hits = hits + 1;
        // если подбили
        if(hits === 3) {
            isSunk = true
            alert("You sank my battleship!")
        }
    } else {
        alert("MISS!")
    }
    }
    
}

const stats = "You have " + hits + " hits out of " + guesses + " shots."
alert(stats)