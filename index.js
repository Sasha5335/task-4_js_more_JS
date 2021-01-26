'use strict'

// Вычислить сумму первых N элементов последовательности . параметр N задает пользователь


function sum(n) {
	let num = 0;
	for (let i = 1; i <= n; i++) {
		num += i;

	}
	return num;
}

// console.log(sum(4));
// например n=4 , 1+2+3+4

// ====================================================================================

// 2.1 Создать объект Student который содержит следующие свойства:имя, фамилию, пол, контактные данные.
// 2.2 Создать объект, который содержит свойства, о факультете и кафедре.
// 2.3 Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента
// 2.4 Реализовать функцию выводит на экран всю информацию о студенте


class University {
	constructor(faculty, department) {
		this.faculty = faculty;
		this.department = department;
	}

}

class Student {
	constructor(name, surname, sex, contactDetails, universityName) {
		this.name = name;
		this.surname = surname;
		this.sex = sex;
		this.contactDetails = contactDetails;
		this.university = new University(universityName)
	}

	showInfo() {
		return `Student name: ${this.name} ${this.surname} \nSex: ${this.sex} \n${this.contactDetails}\n${this.universityName}`
	}
}

// const student = new Student('Alex', 'Alexsovich', 'mail', false, 'A', 'B');


// 3.1 Создать числовой массив и проинициализировать его из 25 элементов.
// 3.1*Инициализация с помощью случайных чисел
// 3.2 Вывести элементы с четными индексами
// 3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
// 3.4 Вывести индексы нулевых элементов (элемент равен нулю)
// 3.5 Подсчитать количество нулевых элементов


const arrNum = new Array(10).fill().map(() => {
	return Math.round(Math.random() * 10);
})
console.log(arrNum)


function numberArr() {
	const arr = [];

	for (let i = 0; i < 26; i++) {
		arr.push(i);
	}
	return arr;

	for (const num of arr) {
		if (num === 0) {
			console.log(`num = 0: ${num}`)
		}
		if (num % 2 === 0) {
			console.log(`num / 2: ${num}`)
		}

	}
}

function evenIndices(arr) {

	arr.forEach((num, index) => {
		console.log(num)
		console.log(index)
	})

}
evenIndices()




numberArr()


// - Книга (автор, название, год издания, издательство)
// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)


// class Book {
// 	constructor(author, neme, year, publish) {
// 		this.author = author;
// 		this.neme = neme;
// 		this.year = year;
// 		this.publish = publish;
// 	}

// }

// class Student {
// 	constructor(name, surname, sex, contactDetails, universityName) {
// 		this.name = name;
// 		this.surname = surname;
// 		this.sex = sex;
// 		this.contactDetails = contactDetails;
// 		this.university = new University(universityName)
// 	}
// }