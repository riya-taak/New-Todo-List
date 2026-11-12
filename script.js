let Add = document.getElementById('Addbtn');
let input = document.getElementById('inp');
let orderlist = document.getElementById('oderList');
let todoList = [];

function setlist() {
    if (input.value.trim() === "") {
        alert("Empty space not allowed");
        return;
    }
    todoList.push(input.value)
    render(todoList);
    input.value = "";
}

function render(list) {
    let result = "";

    for (let i = 0; i < list.length; i++) {
        let editBtn = `<button class='allBtns editColor' onclick="editItem('${list[i]}')">Edit</button>`
        let dltBtn = `<button class='allBtns dltColor' onclick="removeItm('${list[i]}')">Delete</button>`
        let li = `<li class='list' > <span>${i + 1}. ${list[i]}</span> <div class="btns"> ${editBtn}  ${dltBtn} </div> </li>`;
        result = result + li;
    }
    orderlist.innerHTML = result;
}
function editItem(listItm) {

    let value = prompt("edit this");
    if (value === null || value === "") {
        return;
    }
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i] === listItm) {
            todoList[i] = value;
        }
    }
    render(todoList);


}


function removeItm(word) {
    let arr1 = [];
    for (let i = 0; i < todoList.length; i++) {
        if (word !== todoList[i]) {
            arr1.push(todoList[i])
        }
    }
    todoList = [...arr1];
    render(todoList);
}

render(todoList)
Add.addEventListener('click', setlist);
