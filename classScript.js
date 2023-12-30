
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
    
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

let newNum = 3;

createBtn.addEventListener("click", () => {
    const existingNotes = notesContainer.querySelectorAll(".input-box").length;

    // Check if there are already three notes
    if (existingNotes < newNum) {
        const inputBox = document.createElement("p");
        inputBox.className = "input-box";
        inputBox.setAttribute("contenteditable", "true");

        const img = document.createElement("img");
        img.src = "images/delete.jpg";

        inputBox.appendChild(img);
        notesContainer.appendChild(inputBox);

        updateStorage();
    } else {
        alert("You can only have three classes");
    }
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        updateStorage();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

updateStorage();
