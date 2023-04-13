import deleteTaskOnBackend from "./delete";
import patchTaskOnBackend from "./edit";
import sendItemToTheBackend from "./post";

const form = document.querySelector("#task-form-container");
const input = document.querySelector("#task-form-input");
const list_el = document.querySelector("#tasks");

let readonly = "readonly";

//get from serwer function:
function getFromSerwer() {
   // return fetch("http://localhost:8888/todolist").then((res)=>res.json());
   return fetch("https://todolist-backend-production-3003.up.railway.app/todolist").then((res) => res.json());
}

//function to rolls all tasks from serwer
const getTry22 = (e) => {
   getFromSerwer().then(({ tasksJson }) => {
      tasksJson.forEach(e);
   });
};

//function to render tasks from serwer (+valid the Id)
getTry22((element) => {
   console.log(element);
   let inVa = element.value;
   let read = element.readonly;
   let idN = element.idNr;
   renderTask(inVa, read, idN);
   idN == element.idN ? idN++ : (idN = idN);
});

//render Tasks function:
const renderTask = function (inn, re, id) {
   // renderTask (inn,re,id) {
   const task_el = document.createElement("div");
   task_el.classList.add("task");
   task_el.innerHTML = `
        <div class="content">
        <input 
            type="text" 
            class="text"
            value="${inn}"
            readonly="${re}"
            data-id=${id}
            />
        </div>                    
        <div class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
        `;
   list_el.appendChild(task_el);

   input.value = "";

   let buttonEdit = task_el.querySelector(".edit");
   let buttonDelete = task_el.querySelector(".delete");
   let inputToEdit = task_el.querySelector(".text");

   buttonEdit.addEventListener("click", (e) => {
      if (buttonEdit.innerText.toLowerCase() == "edit") {
         inputToEdit.removeAttribute("readonly");
         buttonEdit.innerText = "Save";
      } else {
         inputToEdit.setAttribute("readonly", "readonly");
         buttonEdit.innerText = "Edit";
         console.log(inputToEdit);
         console.log(inputToEdit.readonly);
         let taskInputProps = {
            value: inputToEdit.value,
            idNr: inputToEdit.dataset.id,
            readonly,
         };
         console.log(taskInputProps);
         patchTaskOnBackend(taskInputProps);
      }
   });
   buttonDelete.addEventListener("click", () => {
      list_el.removeChild(task_el);
      console.log(inputToEdit.dataset.id);
      deleteTaskOnBackend(inputToEdit);
   });
};

form.addEventListener("submit", (e) => {
   e.preventDefault();
   let inVa = input.value;
   let read = readonly;
   let idN = Math.floor(Date.now() / 100);

   if (!input.value) {
      alert("please fill out the task");
      return;
   } else {
      // idNr++;
      renderTask(inVa, read, idN);

      let taskInputProps = {
         value: inVa,
         idNr: idN,
         readonly: read,
      };

      //sending JSON to the server:
      sendItemToTheBackend(taskInputProps);
   }
});
