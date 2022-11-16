let listContainer = document.querySelector("#Daily_list");
let checkedSection = document.querySelector("#Daily_list_2");
document.querySelector("#addingItems").onclick = function () {
  if (document.querySelector("#Todays_task input").value.length == 0) {
    alert("ENTER YOUR TO DO ITEM!");
  } else {
    var audio = new Audio("assets/message-124468.mp3");
    audio.play();

    //creating span and setting properties
    const listBox = document.createElement("span");
    listBox.setAttribute("class", "listBox");

    //creating input and setting type as checkbox
    const listItem = document.createElement("input");
    listItem.setAttribute("type", "checkbox");
    listItem.setAttribute(
      "value",
      document.querySelector("#Todays_task input").value
    );
    listItem.setAttribute("class", "listItem");

    //creating label and setting value
    const listLabel = document.createElement("label");
    listLabel.innerHTML = document.querySelector("#Todays_task input").value;
    listLabel.setAttribute("class", "listLabel");

    //creating delete btn and setting value
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("class", "deleteItem");

    //appending elements in required sequence
    listContainer.appendChild(listBox);
    listBox.appendChild(listItem);
    listBox.appendChild(listLabel);
    listBox.appendChild(deleteBtn);

    //adding event listener to checkbox with sound
    listItem.addEventListener("change", (event) => {
      if (listItem.checked) {
        //remove selected item
        listContainer.removeChild(listBox);

        //create new element with same values as of selected item
        const checkedSpan = document.createElement("span");
        checkedSpan.setAttribute("class", "checkedSpan");
        const checkedLabel = document.createElement("label");
        checkedLabel.setAttribute("class", "checkedLabel");
        const checkedDelete = document.createElement("button");
        checkedDelete.setAttribute("class", "deleteItem");
        checkedDelete.innerHTML = "Delete";
        checkedLabel.innerHTML = listLabel.innerText;

        checkedLabel.style.color = "black";
        checkedLabel.style.textDecoration = "line-through";

        checkedSection.appendChild(checkedSpan);
        checkedSpan.appendChild(checkedLabel);
        checkedSpan.appendChild(checkedDelete);
      } else {
        listLabel.style.color = "white";
        listLabel.style.textDecoration = "none";
      }
      var audio = new Audio("assets/pop-39222.mp3");
      audio.play();

      let selectedItem = document.querySelectorAll(".deleteItem");
      for (var i = 0; i < selectedItem.length; i++) {
        selectedItem[i].onclick = function deleteItem() {
          var audio = new Audio("assets/mixkit-arrow-whoosh-1491.wav");
          audio.play();
          this.parentElement.remove();
        };
      }
    });

    //assigning delete method to each span element
    let selectedItem = document.querySelectorAll(".deleteItem");
    for (var i = 0; i < selectedItem.length; i++) {
      selectedItem[i].onclick = function deleteItem() {
        var audio = new Audio("assets/mixkit-arrow-whoosh-1491.wav");
        audio.play();
        this.parentElement.remove();
      };
    }
  }
};
