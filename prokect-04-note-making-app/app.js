const listContainer = document.querySelector(".notes-container");
const createButton = document.querySelector(".btn");
let notes = document.querySelector(".input-box");
function showData(){
    listContainer.innerHTML=localStorage.getItem("notes");
}
showData();
function saveStorage(){
    localStorage.setItem("notes",listContainer.innerHTML)
}

createButton.addEventListener("click",()=>{
    let textbox = document.createElement("p");
    let img = document.createElement("img");
    textbox.className="input-box";
    textbox.setAttribute("contenteditable","true");
    img.src="./images/delete.png"
    listContainer.appendChild(textbox).appendChild(img);
});

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        saveStorage();
    }
    else if(e.target.tagName==="P"){
        notes = document.querySelectorAll(".input-box")
        notes.forEach( nt => {
            nt.onkeyup = function(){
                saveStorage();
            }
        });
    }
})
document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});