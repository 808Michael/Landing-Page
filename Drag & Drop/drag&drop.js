let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for (let list of lists) {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;
    e.dataTransfer.setData("text/plain", null);
    selected.classList.add("dragging");
  });

  list.addEventListener("dragend", function (e) {
    let selected = e.target;
    selected.classList.remove("dragging");
  });
}

document.addEventListener("dragover", function (e) {
  e.preventDefault();
});

rightBox.addEventListener("drop", function (e) {
  let selected = document.querySelector(".list.dragging");
  rightBox.appendChild(selected);
});

leftBox.addEventListener("drop", function (e) {
  let selected = document.querySelector(".list.dragging");
  leftBox.appendChild(selected);
});
