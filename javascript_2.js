const searchBook = document.querySelector("#search-books input");
const checkBox = document.querySelector('#hide input');
const inputText = document.querySelector("#add-book input");
const link = document.querySelector(".button");
const ul = document.querySelector("ul");
const spanDelete =  `<span class="delete">حذف</span>`;

checkBox.addEventListener('change', function(e){
  if(checkBox.checked === true){
    ul.style.display = "none"
  }else{
    ul.style.display = "block"
  }
})


searchBook.addEventListener('keyup',function(e){
  for(let book of ul.children){
    if(book.firstElementChild.textContent.indexOf
      (searchBook.value)!== -1){
      book.style.display = "block";
    }else{
      book.style.display = "none";
    }
  }
} )


link.addEventListener('click', function(e){
  const spanName = document.createElement("span");
  spanName.className = "name";
  spanName.textContent = inputText.value;

  const li = document.createElement("li");

  li.appendChild(spanName);
  li.innerHTML += spanDelete;
  ul.appendChild(li);
  
  storetoLocalStorage(inputText.value);
  inputText.value = "";
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", function(e){
  let tasks;
  if(localStorage.getItem("tasks") === null){
  tasks = [];
  }else{
    tasks = localStorage.getItem("tasks").split(",");
  }

  for(let item of tasks){
    const spanName = document.createElement("span");
    spanName.className = "name";
    spanName.textContent = item;
  
    const li = document.createElement("li");
  
    li.appendChild(spanName);
    li.innerHTML += spanDelete;
    ul.appendChild(li);
  }
  
})

function storetoLocalStorage(task){
  let tasks;
  if(localStorage.getItem("tasks") === null){
    tasks = [];
  }else{
    tasks = localStorage.getItem("tasks").split(",");
  }

  tasks.push(task);
  localStorage.setItem("tasks", tasks);
}

ul.addEventListener('click',function(e){
  if(e.target.className === 'delete'){
    e.target.parentElement.remove();
    removeFromLocalStorage(e.target.parentElement.children[0].textContent);
  }
})

function removeFromLocalStorage(task){
  let tasks;
  if(localStorage.getItem("tasks") === null){
    tasks = [];
  }else{
    tasks = localStorage.getItem("tasks").split(",");
  }

  for(let i=0; i<tasks.length; i++){
    if(tasks[i] === task){
      tasks.splice(i, 1);
    }
  }

  if(tasks.length === 0){
    localStorage.clear();
  }else{
    localStorage.setItem('tasks', tasks);
  }
}