var TODO_KEY = "todo-list-homepage";

function getToDoList() {
  var toDoList = JSON.parse(localStorage.getItem(TODO_KEY));
  if (toDoList === null) {
    localStorage.setItem(TODO_KEY, JSON.stringify([]));
    return []
  }
  return toDoList
}

function appendToDo(text, id) {
  var ul = document.getElementById("toDoList");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(text));
  li.setAttribute("id", id);
  li.setAttribute("class", "toDo");
  ul.appendChild(li);
  document.getElementById(id).addEventListener("click", function (e) {
    removeToDo(e)
  })
}

function addToDo(list, newToDo) {
  var nextId = list.reduce(function(x, y) {
    return x.id > y.id ? x.id : y.id
  }, 0) + 1;
  list.push({id: nextId, todo: newToDo});
  localStorage.removeItem(TODO_KEY);
  localStorage.setItem(TODO_KEY, JSON.stringify(list));
}

function removeToDo(e) {
  var id = e.srcElement.getAttribute("id");
  var toDos = getToDoList().filter(function (todo) {
     return todo.id.toString() !== id
  });
  localStorage.removeItem(TODO_KEY);
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
  window.location.reload();
}

function addLinks(allLinks, linksGroup, type) {
  allLinks.filter(function (link) {
    return link.type === type;
  }).forEach(function(link) {
    var a = document.createElement("a");
    a.setAttribute("target", "_blank");
    a.setAttribute("class", "button");
    a.setAttribute("href", link.link);

    var span1 = document.createElement("span");
    span1.setAttribute("class", "away");
    span1.innerText = link.text;
    a.appendChild(span1);

    var span2 = document.createElement("span");
    span2.setAttribute("class", "over");
    span2.innerText = "Go!";
    a.appendChild(span2);

    linksGroup.appendChild(a);
  });
}