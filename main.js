// Позиция корабля
const location1 = 3 
const location2 = 4 
const location3 = 5

// Потоплен или нет
let isSunk = false
// Предпологаемая позиция кораблся ("выстрел")
let guess 
// Добавляем счётик попаданий
let hits = 0


while (isSunk === false) {
    // Не забываем, что строку нужно превратить в число
    guess = +prompt("Fire! Enter a number 0-6")
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