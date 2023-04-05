// Создайте объект user. Узнайте у user-a его имя, возраст, является ли он мужчиной или женщиной.Запишите все в объект. И выведите в консоли. 
const user = {
}

alert ("Hello user!");
let userName = prompt ('Как тебя зовут?', '');
user.userName = userName;
let userAge = prompt ('Сколько тебе лет?', '18');
user.userAge = userAge;
let userGender = prompt ('Какой у тебя пол?', 'Male');
user.userGender = userGender;

console.log(user);

// Используя конструкцию `if..else`, напишите код, который получает число через `prompt`, а затем выводит в `alert`.

let value = prompt ('Укажите число');
if (value == ''){
    console.log(alert('Вы не ввели число!'));
} else console.log(alert('Ваше число: ' + value));

// Перепишите этот блок кода с использованием оператора `switch`.
let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number

switch(a){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;    
    case 2 || 3:
        alert('2,3')
        break;

}

// Посчитайте сумму всех четных чисел в промежутке 1-100. Выведите в консоль.
let sum = 0;
let i = 1;
while(i<=100){
    if (i%2==0){
        sum+=i;
        i++;
    }else i++;
}
console.log(sum);

for(let i=1; i<=100; i++){
    if (i%2==0){
        sum+=i;
    }else i++;
}
console.log(sum);


// Перепишите цикл `for` на `while`.
let j = 0;
while(j<3){
    alert( `number ${j}!` );
    j++;
}

