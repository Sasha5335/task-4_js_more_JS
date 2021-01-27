'use strict'

// 1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь

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
   constructor(name, surname, sex, contactDetails, universityName, departmentNeme) {
      this.name = name;
      this.surname = surname;
      this.sex = sex;
      this.contactDetails = contactDetails;
      this.university = new University(universityName, departmentNeme);
   }

   showInfo() {
      const infoAnStudent = [];

      for (const [key, value] of Object.entries(this.university)) {
         infoAnStudent.push(`${key}: ${value}`);
      }

      for (const [key, value] of Object.entries(this)) {
         if (typeof value !== 'object')
            infoAnStudent.push(`${key}: ${value}`);
      }

      return infoAnStudent.join(',\n');
   }
}

// const student = new Student('Alex', 'Alexsovich', 'alex@gmail.com', 'mail', 'A', 'B');
// const student1 = new Student('Test', 'Testovich', 'test@gmail.com', false, 'C', 'D');



// ====================================================================================



// 3.1 Создать числовой массив и проинициализировать его из 25 элементов.
// 3.1*Инициализация с помощью случайных чисел

const arrNum = new Array(10).fill().map(() => {
   return Math.round(Math.random() * 10);
});

// console.log(arrNum);


// 3.2 Вывести элементы с четными индексами

function evenIndexsArray(arr) {

   const evenArray = [];

   arr.forEach((item, i) => {
      if (i % 2 === 0) {
         evenArray.push(`Индекс ${i} у элемента ${item}`);
      }
   });
   return evenArray.join(',\n ');
}

evenIndexsArray(arrNum);


// 3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)

function evenElementsArray(arr) {

   const evenElements = [];

   arr.forEach((item) => {
      if (item % 2 === 0) {
         evenElements.push(item);
      }
   });

   return `Четные элементы массива ${evenElements}`;
}

evenElementsArray(arrNum);


// 3.4 Вывести индексы нулевых элементов (элемент равен нулю)

function indexElementEqualZero(arr) {

   const indexElement = [];

   arr.forEach((item, i) => {
      if (item === 0) {
         indexElement.push(i);
      }
   });

   return `Элемент/ы равеный нулю ${indexElement}`;
}

indexElementEqualZero(arrNum);


// 3.5 Подсчитать количество нулевых элементов

function numberElementsEqualZero(arr) {

   let numberElements = 0;

   arr.forEach((item) => {
      if (item === 0) {
         numberElements++;
      }
   });

   return `Количество нулевых элементов ${numberElements}`;
}

numberElementsEqualZero(arrNum);



// ====================================================================================



// 4 Создать классы:
// - Книга (автор, название, год издания, издательство)
// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)

class Book {
   constructor(author, nemeBook, year, publish) {
      this.author = author;
      this.nemeBook = nemeBook;
      this.year = year;
      this.publish = publish;
   }
}

class ElectronicBook extends Book {
   constructor(author, nemeBook, year, publish, format, eNumber) {
      super(author, nemeBook, year, publish);
      this.format = format;
      this.eNumber = eNumber;
   }
}

const newEBook = new ElectronicBook('pdf', '5555');
const newBook = new Book('Test', 'Testovich', '2020', 'aaa');




// ====================================================================================



// 5 Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число,
//  которая функция принимает в качестве параметра, с такими условиями:
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;

function returnNumber(n) {
   for (let i = 1; i <= n; i++) {
      if (i % 3 === 0) {
         console.log('fizz');
      }
      else if (i % 5 === 0) {
         console.log('buzz');
      }
      else {
         console.log('fizzbuzz')
      }
   }
}

returnNumber(10);