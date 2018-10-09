function setupToDoBtn() {
  document.getElementById("todoBtn").addEventListener("click",
    function () {
      var toDo = document.getElementById("todo").value;
      addToDo(getToDoList(), toDo)
    });
}

function setupToDoList() {
  var list = getToDoList();
  for (var i = 0; i < list.length; i++) {
    appendToDo(list[i]['todo'], list[i]['id']);
  }
}

function setupLinks() {
  var links = getLinks();
  var importantLinksGroup = document.getElementById("important-links");
  var financeLinksGroup = document.getElementById("finance-links");
  var accountsLinksGroup = document.getElementById("accounts-links");

  addLinks(links, importantLinksGroup, "IMPORTANT");
  addLinks(links, financeLinksGroup, "FINANCE");
  addLinks(links, accountsLinksGroup, "ACCOUNTS");
}