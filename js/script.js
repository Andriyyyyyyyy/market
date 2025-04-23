// Перевірка підключеного файлу скриптів
console.log('Підключено файл скриптів script.js')

// Отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items");

// Перевірка існування знайденого блоку
if (itemsDiv) {
    // Вивід знайденого елементу
    // console.log(itemsDiv)
} else {
    // Вивід повідомлення про не знайдений блок
    console.log('Блок товарів не знайдено')
}

// Визначення масиву товарів
let itemsArray = ['', '', '', '']
// Виведення в консоль масиву
console.log(itemsArray)
// виведення в консоль елементів масиву
for(let i = 0; i < itemsArray.length; i++){console.log (itemsArray[i])}