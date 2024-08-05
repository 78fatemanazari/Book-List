// let pageBanner = document.getElementById('page-banner');
// console.log(pageBanner);

// let titles = document.getElementsByClassName('title');
// console.log(titles[1]);

// let lis = document.getElementsByTagName('li');
// for(let element of lis){
//   console.log(element);
// } 

// let qSelector = document.querySelectorAll('li')
// console.log(qSelector);
// console.log(lis[0]);

// let lists = document.querySelectorAll('#book-list ul li .name');
// console.log(lists[1]);

// const heading = document.createElement('h2');
// heading.className = "Fatema";
// heading.id = "Nazari";
// heading.setAttribute('fatema', 'Nazari');
// heading.className += "Nazari"
// //First Way
// heading.innerHTML = "Hello World"
// heading.innerHTML = `
// <div>
//   <h1>Hello World</h1>
// </div>
// `
// console.log(heading);
// //Second Way
// const lists = document.createElement('ul');
// const list1 = document.createElement('li');
// const list2 = document.createElement('li');

// list1.appendChild(document.createTextNode('Fatema Nazari'));
// list2.appendChild(document.createTextNode('Nazari Fatema'));

// lists.appendChild(list1);
// lists.appendChild(list2);

// console.log(lists);

// const newHeading = document.createElement('h2');
// newHeading.className = 'title'
// newHeading.innerHTML = 'لیست کتاب ها';
// // console.log(newHeading);
// const oldHeading = document.querySelectorAll('.title')[1];
// //console.log(oldHeading);

// const parentElement = document.querySelector('#book-list');
// console.log(parentElement);
// parentElement.replaceChild(newHeading, oldHeading);

// const link = document.querySelector('.button');
// //console.log(link);
// document.querySelector('.button').addEventListener('click', 
//   function(e){
//   console.log('Hello World');
//     e.preventDefault();
// })

// document.querySelector('.button').addEventListener('click', 
//   function(e){
//     console.log('Hello World');
//     e.preventDefault();
//   }
// )

// document.querySelector('.button').addEventListener('mousedown', 
//   function(e){
//     console.log('Mouse down');
//     e.preventDefault();
//   }
// )

// document.querySelector('.button').addEventListener('mouseup', 
//   function(e){
//     console.log('Mouse up');
//     e.preventDefault();
//   }
// )

// document.querySelector('.button').addEventListener('mouseenter', 
//   function(e){
//     console.log('Mouse enter');
//     e.preventDefault();
//   }
// )
// const heading = document.querySelectorAll('.title')[1];
// const offSets = document.body.addEventListener('mousemove', 
//   function(e){
//     // console.log();
//     heading.innerHTML = `offSetX: ${e.offsetX}, offSetY: ${e.offsetY}`;
//     e.preventDefault();
//   }
// )

// const textInput = document.querySelector('#add-book input');
// const link = document.querySelector('#add-book a');
// link.addEventListener('click',
//   function(e){
//     console.log(textInput.value);
//     e.preventDefault();
//     textInput.value = "";
//   }
// )

// localStorage.setItem("fatema1", "Nazari1");
// localStorage.setItem("fatema2", "Nazari2");
// localStorage.setItem("fatema3", "Nazari3");
// localStorage.removeItem("fatema2");
// localStorage.clear()


// const arr = ["Amir", "Ali"];
// const obj = {
//   name:"Ali",
//   age: 23
// };

// //Array to string
// localStorage.setItem("Array", arr);
// const array = localStorage.getItem("Array").split(",")
// console.log(array);
// //output to string to object
// localStorage.setItem("object", JSON.stringify(obj));
// const object = JSON.parse(localStorage.getItem("object"));
// console.log(object);
// // const name = localStorage.getItem("fatema");
// // console.log(name);